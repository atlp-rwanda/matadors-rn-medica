import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { ThemeContext } from "@/ctx/ThemeContext";
import { SvgXml } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Typography from "../../../constants/Typography";
import { Colors } from "../../../constants/Colors";
import {
  OrLine,
  greyOrLine,
  BlackApple,
  WhiteApple,
} from "@/components/Icons/Icons";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import React from "react";

WebBrowser.maybeCompleteAuthSession();
const redirectTo = makeRedirectUri({
  native: "com.medica://",
});

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  return data.session;
};

const signInWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });
  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? "",
    redirectTo
  );

  if (res.type === "success") {
    const { url } = res;
    await createSessionFromUrl(url);

    router.push("/(app)/ActionMenu");
  }
};
const LetsYouIn = () => {
  const { theme } = useContext(ThemeContext);

  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  return (
    <ScrollView
      style={{
        backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
      }}
      contentContainerStyle={{
        paddingHorizontal: 20,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <StatusBar style={theme === "dark" ? "light" : "dark"} />

      <Image source={require("../../../assets/icons/FrameOne.png")} />

      <View style={styles.midPartOne}>
        <Text
          style={[
            Typography.heading._1,
            { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
          ]}
        >
          Let's you in
        </Text>
      </View>

      <View style={styles.middlePart}>
        <View style={styles.Buttons}>
          <TouchableOpacity
            style={[
              styles.middleButton,
              {
                backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF",
                borderColor: theme === "dark" ? "#35383F" : "#EEEEEE",
              },
            ]}
            onPress={signInWithFacebook}
          >
            <Image source={require("../../../assets/icons/facebook.png")} />
            <Text
              style={[
                Typography.semiBold.large,
                { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
              ]}
            >
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.middleButton,
              {
                backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF",
                borderColor: theme === "dark" ? "#35383F" : "#EEEEEE",
              },
            ]}
          >
            <Image source={require("../../../assets/icons/Google.png")} />
            <Text
              style={[
                Typography.semiBold.large,
                { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
              ]}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.middleButton,
              {
                backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF",
                borderColor: theme === "dark" ? "#35383F" : "#EEEEEE",
              },
            ]}
          >
            <SvgXml xml={theme === "dark" ? WhiteApple : BlackApple} />
            <Text
              style={[
                Typography.semiBold.large,
                { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
              ]}
            >
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <SvgXml xml={theme === "dark" ? OrLine : greyOrLine} />

      <TouchableOpacity
        onPress={() => router.push("/(auth)/SignIn&SignOut/SignInBlankForm")}
        style={styles.signinBtn}
      >
        <Text style={[Typography.bold.large, { color: Colors.others.white }]}>
          Sign in with password
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text
          style={[
            Typography.regular.medium,
            { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._500 },
          ]}
        >
          Don't have an account?
        </Text>
        <Text
          style={[Typography.semiBold.medium, { color: "#246DFB" }]}
          onPress={() =>
            router.replace("/(auth)/SignIn&SignOut/SignUpBlankForm")
          }
        >
          Sign up
        </Text>
      </View>
    </ScrollView>
  );
};

export default LetsYouIn;

const styles = StyleSheet.create({
  signText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signinBtn: {
    backgroundColor: "#246BFD",
    width: "100%",
    height: 58,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#246BFD",
    elevation: 10,
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "bold",
  },
  middleButton: {
    flexDirection: "row",
    gap: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "110%",
    borderRadius: 16,
  },
  Buttons: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textOne: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "Bold",
  },
  midPartOne: {
    justifyContent: "center",
    alignItems: "center",
  },
  middlePart: {
    gap: 24,
  },
  arrow: {
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: 20,
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    paddingRight: 24,
  },
});
