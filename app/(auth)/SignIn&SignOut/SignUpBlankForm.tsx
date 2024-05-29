import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import { LeftArrow } from "@/components/UI/Icons";
import { router } from "expo-router";
import Typography from "../../../constants/Typography";
import { Colors } from "../../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "@/ctx/ThemeContext";
import {
  BackArrow,
  blackArrow,
  DarkContinueLine,
  LightContinueLine,
  BlackApple,
  WhiteApple
} from "@/components/Icons/Icons";
import { SvgXml } from "react-native-svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleEmailFocused = () => {
    setIsFocused(true);
  };
  const handleEmailBlur = () => {
    setIsFocused(false);
  };
  const handlePasswordFocused = () => {
    setPasswordFocused(true);
  };
  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF" },
      ]}
    >
      <StatusBar style={theme === "dark" ? "light" : "dark"} />

      <Image source={require("../../../assets/icons/HeartPlus.png")} />

      <View style={styles.middlePart}>
        <View style={styles.midPartOne}>
          <Text
            style={[
              Typography.heading._3,
              { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
            ]}
          >
            Create new account
          </Text>
        </View>
      </View>

      <View style={styles.Buttons}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={60}
        >
          <View style={{ gap: 20 }}>
            <View
              style={[
                styles.inputOne,
                isFocused && styles.inputOneFocused,
                { backgroundColor: theme === "dark" ? "#1F222A" : Colors.grayScale._50 },
              ]}
            >
              <Image
                source={require("../../../assets/icons/Message.png")}
                style={[styles.icon, isFocused && styles.iconFocused]}
              />
              <TextInput
                style={[styles.email, isFocused && styles.emailFocused]}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#9E9E9E"
                value={email}
                onChangeText={handleEmailChange}
                onFocus={handleEmailFocused}
                onBlur={handleEmailBlur}
              />
            </View>

            <View
              style={[
                styles.inputOne,
                passwordFocused && styles.inputOneFocused,
                { backgroundColor: theme === "dark" ? "#1F222A" : Colors.grayScale._50 },
              ]}
            >
              <Image
                source={require("../../../assets/icons/Lock.png")}
                style={[styles.icon, passwordFocused && styles.iconFocused]}
              />
              <TextInput
                style={styles.email}
                placeholder="Password"
                placeholderTextColor="#9E9E9E"
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={handlePasswordChange}
                onFocus={handlePasswordFocused}
                onBlur={handlePasswordBlur}
              />
              <View
                style={[
                  styles.passwordInputContainer,
                  passwordFocused && styles.passwordInputContainerFocused,
                ]}
              >
                <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                  <Ionicons
                    name={secureTextEntry ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color={passwordFocused ? "#246BFD" : "gray"}
                    style={styles.eye}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.Check}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
          color="#246BFD"
        />
        <Text
          style={[
            Typography.semiBold.medium,
            { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
          ]}
        >
          Remember me
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/SignIn&SignOut/SignInBlankForm")}
        style={styles.signinBtn}
      >
        <Text style={[Typography.bold.large, { color: Colors.others.white }]}>
          Sign up
        </Text>
      </TouchableOpacity>

      <SvgXml xml={theme === "dark" ? DarkContinueLine : LightContinueLine} />

      <View style={styles.overCont}>
        <TouchableOpacity>
          <View
            style={[
              styles.smallCont,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF", borderColor: theme === 'dark' ? '#35383F' : '#EEEEEE' },
            ]}
          >
            <Image source={require("../../../assets/icons/facebook.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[
              styles.smallCont,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF", borderColor: theme === 'dark' ? '#35383F' : '#EEEEEE'  },
            ]}
          >
            <Image source={require("../../../assets/icons/Google.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[
              styles.smallCont,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF", borderColor: theme === 'dark' ? '#35383F' : '#EEEEEE'  },
            ]}
          >
            <SvgXml xml={theme === 'dark' ? WhiteApple : BlackApple} />

          </View>
        </TouchableOpacity>
      </View>

      <View style={{ gap: 3, flexDirection: "row" }}>
        <Text
          style={[
            Typography.regular.medium,
            { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._500 },
          ]}
        >
          Already have an account?
        </Text>
        <Text
          style={[
            Typography.semiBold.medium,
            { color: Colors.main.primary._500, marginLeft: 10 },
          ]}
          onPress={() =>
            router.replace("/(auth)/SignIn&SignOut/SignInBlankForm")
          }
        >
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputOneFocused: {
    borderColor: "#246BFD",
    borderWidth: 2,
  },
  emailFocused: {
    color: "#212121",
    fontSize: 16,
  },
  iconFocused: {
    tintColor: "#246BFD",
  },
  passwordInputContainerFocused: {
    borderColor: "#246BFD",
  },
  icon: {
    tintColor: "#868a94",
  },
  eye: {
    marginRight: 40,
  },
  passwordIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textInputFocused: {
    borderColor: "blue",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#246BFD",
  },
  remember: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19.6,
    letterSpacing: 0.2,
  },
  Check: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  smallCont: {
    width: 80,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  overCont: {
    flexDirection: "row",
    gap: 10,
  },
  passwordInputContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs1: {
    backgroundColor: "#fff",
    margin: 30,
    marginTop: 30,
    marginBottom: 0,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputOne: {
    borderRadius: 16,
    width: 360,
    height: 60,
    padding: 8,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    gap: 10,
  
  },
  email: {
    fontSize: 16,
    flex: 1,
  },
  signupText: {
    color: "#246BFD",
    fontWeight: "600",
  },
  signinBtn: {
    backgroundColor: "#246BFD",
    width: 360,
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
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 380,
    borderRadius: 16,
  },
  Buttons: {
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textOne: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#212121",
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
    // backgroundColor: "#FFFFFF",
    gap: 20,
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 48,
    paddingRight: 24,
  },
});