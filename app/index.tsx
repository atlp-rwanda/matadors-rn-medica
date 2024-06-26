import React, { useContext, useState, useEffect } from "react";
import Loading from "@/app/spinner/Loading";
import { router, Slot, useNavigationContainerRef } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "@/ctx/ThemeContext";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { StatusBar } from "expo-status-bar";
import * as Sentry from '@sentry/react-native';
import { isRunningInExpoGo } from 'expo';

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: 'https://ed50d6a5ea43c4e35a082579c093f726@o4507497432154112.ingest.us.sentry.io/4507497451945984',
  debug: true, 
  integrations: [
    new Sentry.ReactNativeTracing({
    
      routingInstrumentation,
      enableNativeFramesTracking: !isRunningInExpoGo(),
     
    }),
  ],
});

function SplashScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <View
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme === "light" ? Colors.others.white : Colors.dark._1,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <View>
            <Image source={require("../assets/images/icon.png")} />
          </View>
          <Text
            style={[
              Typography.heading._1,
              {
                color: theme === "light" ? Colors.grayScale._900 : Colors.others.white,
              },
            ]}
          >
            Medica
          </Text>
        </View>
        <View style={styles.spin}>
          <Loading />
        </View>
      </View>
    </>
  );
}

function RootLayout() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref) {
      routingInstrumentation.registerNavigationContainer(ref);
    }
  }, [ref]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
      router.push("onBoarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return <Slot />;
}


export default Sentry.wrap(RootLayout);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  spin: {
    position: "absolute",
    bottom: 50,
  },
});
