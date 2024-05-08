import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

const CreateNewPin: React.FC<any> = ({ navigation }) => {
  const [isDark, setIsDark] = useState(false);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [fullNameFocused, setFullNameFocused] = useState(false);

  const handleFullNameFocus = () => {
    setFullNameFocused(false);
  };

  return (
    <>
      <View style={styles.Maincont}>
        <Pressable onPress={() => router.back()} style={styles.main}>
          <MaterialIcons name="arrow-back" size={25} style={styles.icon} />
          <Text style={styles.fill}>Create New PIN</Text>
        </Pressable>
          <View style={styles.middle}>
            <Text style={styles.text}>
              Add a PIN number to make your account {"\n"}
              more secure
            </Text>
          </View>
        <View style={styles.container}>
        <OtpInput
            numberOfDigits={4}
            autoFocus={false}
            
            
            theme={{
              pinCodeContainerStyle: {
                width: 83,
                height: 61,
                backgroundColor:  isDark? Colors.dark._2:Colors.grayScale._50,
                borderRadius: 16,
                borderColor: isDark? Colors.dark._3:Colors.grayScale._200,
                borderWidth: 1,
                
              },
              focusedPinCodeContainerStyle: {
                width: 83,
                height: 61,
                backgroundColor: Colors.transparent.blue,
                borderRadius: 16,
                borderColor: Colors.main.primary._500,
                borderWidth: 1,
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 32,
                paddingRight: 32,
                
              },
             pinCodeTextStyle:{
              color:isDark? Colors.others.white:Colors.grayScale._900
             },
             
              
            }}
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() =>
              router.push("/(auth)/SignIn&SignOut/SetYourFingerPrint")
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CreateNewPin;

const styles = StyleSheet.create({
  body: {
    margin: 0,
    padding: 0,
  },
  Maincont: {
    backgroundColor: Colors.others.white,
    height: 900,
    padding: 30,
  },
  main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
    height: 50,
  },
  inputsFocused: {
    backgroundColor: "#246BFD",
    borderWidth: 2,
    borderColor: "#246BFD",
  },
  icon: {
    alignSelf: "center",
  },
  fill: {
    fontSize: 24,
    fontWeight: "600",
  },
  middle: {
    height: 140,
    textAlign: "center",
    justifyContent: "flex-end",
  },
  text: {
    paddingTop: 15,
    textAlign: "center",
    color: Colors.others.black,
    lineHeight: 26,
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 1,
  },
  container: {
    height: 170,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: Colors.grayScale._50,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: Colors.grayScale._300,
    margin: 5,
    textAlign: "center",
    fontSize: 25,
  },
  selectedBox: {
    backgroundColor: "#000",
  },
  btn: {
    height: 100,
    justifyContent: "flex-end",
  },
  button: {
    width: 358,
    alignSelf: "center",
    backgroundColor: "#246BFD",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
  },
  buttonText: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
