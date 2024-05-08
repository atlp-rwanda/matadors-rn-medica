import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "expo-checkbox";
import { LeftArrow } from "@/components/UI/Icons";
import { router } from "expo-router";
import Typography from '../../../constants/Typography';
import {Colors} from '../../../constants/Colors';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);


  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
    setPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setEmailFocused(false);
  }

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  }

  return (
    <View style={styles.container}>
    
        <TouchableOpacity style={styles.arrow} onPress={() => router.replace("/(auth)/SignIn&SignOut/SignUpBlankForm")}>
          <LeftArrow fillColor={"#23272f"} />
        </TouchableOpacity>
      
      <View>
        <Image source={require("../../../assets/icons/HeartPlus.png")} />
      </View>

      <View style={styles.middlePart}>
        <View style={styles.midPartOne}>
          <Text style={[Typography.heading._3,{color:Colors.grayScale._900}]}>Login to Your Account</Text>
        </View>
      </View>

      <View style={styles.Buttons}>
        <View style={[styles.inputOne, emailFocused && styles.inputOneFocused]}>
          <Image source={require("../../../assets/icons/Message.png")} style={[styles.icon, emailFocused && styles.iconFocused]} />
          <TextInput
            style={[styles.email, emailFocused && styles.emailFocused]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="rgba(45, 45, 45, 0.5)"
            value={email}
            onChangeText={handleEmailChange}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
        </View>

        <View style={[styles.inputOne, passwordFocused && styles.inputOneFocused]}>
          <Image source={require("../../../assets/icons/Lock.png")} style={[styles.icon, passwordFocused && styles.iconFocused]} />
          
            <TextInput
              style={[styles.email, passwordFocused && styles.emailFocused]}
              placeholder="Password"
              placeholderTextColor="rgba(45, 45, 45, 0.5)"
              secureTextEntry={secureTextEntry}
              value={password}
              onChangeText={handlePasswordChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <View style={[styles.passwordInputContainer, passwordFocused && styles.passwordInputContainerFocused]}>
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


      <View style={styles.Check}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
          color="#007bff"
        />
        <Text style={[Typography.semiBold.medium, {color:Colors.grayScale._900}]}>Remember me</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.signinBtn}>
          <Text style={styles.signText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <Pressable
      onPress={()=> router.push("/(auth)/ForgotPassword&Reset/ForgotPassword")}
      >
        <Text style={[Typography.semiBold.large, {color:Colors.main.primary._500}]}>Forgot the password?</Text>
      </Pressable>

      <View>
        <Image source={require("../../../assets/icons/continue.png")} />
      </View>

      <View style={styles.overCont}>
        <View style={styles.smallCont}>
          <Image source={require("../../../assets/icons/facebook.png")} />
        </View>
        <View style={styles.smallCont}>
          <Image source={require("../../../assets/icons/Google.png")} />
        </View>
        <View style={styles.smallCont}>
          <Image source={require("../../../assets/icons/AppleIcon.png")} />
        </View>
      </View>

      <View style={styles.account}>
        <Text style={[Typography.regular.medium]}>Don’t have an account? </Text>
        <Text
          style={[Typography.semiBold.medium, {color:Colors.main.primary._500}]}
          onPress={() => router.push("/(auth)/SignIn&SignOut/SignInBlankForm")}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

  inputOneFocused: {
    borderColor: "#246BFD",
    borderWidth: 2,
  },
  emailFocused: {
    color: "#212121",
    fontSize: 16
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
  eye:{
    marginRight: 10
  },
  passwordIconContainer:{
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
    borderColor: "#eeeeee",
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
    backgroundColor: "#FAFAFA",
    width: 380,
    height: 60,
    padding: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    gap: 10,
  },
  email: {
    fontSize: 16,
    flex: 1,
  },
  signText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signinBtn: {
    backgroundColor: "#246BFD",
    width: 380,
    height: 58,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#246BFD',
    elevation: 15,
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
    gap: 10,
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
  frogotPass: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22.4,
    letterSpacing: 0.2,
    textAlign: "center",
    color: "#246BFD",
  },
  account: {
    flexDirection: "row",
  },
  middlePart: {
    gap: 30,
  },
  arrow: {
    alignSelf: "flex-start"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: 15,
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 48,
    paddingRight: 24,
  },
  LoginText: {
    color: "#246BFD",
    fontWeight: "600",
  },

});
