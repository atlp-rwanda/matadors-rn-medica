import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LeftArrow } from "@/components/UI/icons";
import { router } from "expo-router";
import Typography from "../../../constants/Typography";
import { Colors } from "../../../constants/Colors";

const LetsYouIn = () => {
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <LeftArrow fillColor={"#23272f"} />
      </View>

      <Image source={require("../../../assets/icons/FrameOne.png")} />

      <View style={styles.middlePart}>
        <View style={styles.midPartOne}>
          <Text
            style={[Typography.heading._1, { color: Colors.grayScale._900 }]}
          >
            Let's you in
          </Text>
        </View>

        <View style={styles.Buttons}>
          <TouchableOpacity style={styles.middleButton}>
            <Image source={require("../../../assets/icons/facebook.png")} />
            <Text style={[Typography.semiBold.large]}>
              Continue with facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.middleButton}>
            <Image source={require("../../../assets/icons/Google.png")} />
            <Text style={[Typography.semiBold.large]}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.middleButton}>
            <Image source={require("../../../assets/icons/AppleIcon.png")} />
            <Text style={[Typography.semiBold.large]}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image source={require("../../../assets/icons/OR.png")} />

      <TouchableOpacity style={styles.signinBtn}>
        <Text style={[Typography.bold.large, { color: Colors.others.white }]}>
          Sign in with password
        </Text>
      </TouchableOpacity>

      <Text style={[Typography.regular.medium]}>
        Don't have an account?
        <Text
          style={styles.signupText}
          onPress={() =>
            router.replace("/(auth)/SignIn&SignOut/SignUpBlankForm")
          }
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
};

export default LetsYouIn;

const styles = StyleSheet.create({
  signupText: {
    color: "#246BFD",
    fontWeight: "600",
  },
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
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "bold",
  },
  middleButton: {
    flexDirection: "row",
    gap: 15,
    borderWidth: 1,
    borderColor: "#eeeeee",
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
    gap: 30,
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
    paddingBottom: 48,
    paddingRight: 24,
    // borderWidth: 4,
    // borderColor: 'red',
  },
});
