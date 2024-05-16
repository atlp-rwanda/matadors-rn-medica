import Loading from "@/app/spinner/Loading";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/(app)/Appointments/ScheduledAppointments/AppointmentCompletedScreen");
    }, 2000);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.splash}>
          <View>
            <View>
              <Image source={require("../assets/images/icon.png")} />
            </View>
          </View>

          <View>
            <Text style={styles.text}>Medica</Text>
          </View>
          <View style={styles.spin}>
            <Loading />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  splash: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    gap: 20,
    width: "100%",
  },
  text: {
    fontSize: 30,
  },
  spin: {
    position: "absolute",
    bottom: 50,
  },
});
