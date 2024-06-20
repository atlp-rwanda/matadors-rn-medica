import React, { useEffect } from "react";
import { Text } from "@/components/Themed";
import { LeftArrow, Chat, Message } from "@/components/UI/Icons";
import { StyleSheet, Image, View, TouchableOpacity, Pressable, TextInput, ScrollView } from "react-native";
import Typography from "@/constants/Typography";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Redirect, router } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useLocalSearchParams } from "expo-router";
import Alerts from "@/components/UI/AlertComponent";



export default function ForgotPassword() {
  const image = require("@/assets/images/ForgotPasswordImages/forgotpassword.png");
  const darkImg = require("@/assets/images/ForgotPasswordImages/forgotpassworddark.png");
  const [isSelectedSMS, setIsSelectedSMS] = useState(true);
  const [isSelectedEmail, setIsSelectedEmail] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [email, setEmail] = useState("")
  const [alert, setAlert] = useState<{ text: string, status: "success" | "error" | "info" | "warning" } | null>(null);


  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSelectionSMS = () => {
    setIsSelectedSMS(true);
    setIsSelectedEmail(false);
  };

  const handleSelectionEmail = () => {
    setIsSelectedSMS(false);
    setIsSelectedEmail(true);
  };

  const resetByEmail= async()=> {
    try {
      if(!email ){
        setAlert({ text: "Email can't be empty", status: "error" });
      }else if (!validateEmail(email)){
        setAlert({ text: "Enter a valid email", status: "error" });
      }else {
        const {error } = await supabase.auth.resetPasswordForEmail(email)
      if (error){
        console.log("unable to reach the target...................: ", error?.message)
      }
      setTimeout(()=>{
      router.replace({
        pathname: "(auth)/ForgotPassword&Reset/[OTPform]}",
        params: {email}
      })
      },1000)
      setAlert({ text: "Please check your email", status: "success" });
      }
    } catch (error) {
      setAlert({ text: "An unexpected error occurred", status: "error" });
    }
  }

  const border= isDark ? Colors.dark._3:Colors.grayScale._200;
  
  return (
    <>
      <ScrollView
      contentContainerStyle={isDark ? styles.containerdark : styles.container}
      >
        
        <View style={isDark ? styles.headerdark : styles.header}>
          <Pressable onPress={()=> router.back()}>
            <LeftArrow
              fillColor={isDark ? Colors.others.white : Colors.grayScale._900}
            />
          </Pressable>
          <Text
            style={[
              Typography.heading._4,
              { color: isDark ? Colors.others.white : Colors.grayScale._900 },
            ]}
          >
            Forgot Password
          </Text>
        </View>
        <View style={{ backgroundColor: "transparent"}}>
          <Image source={isDark ? darkImg : image} style={{width:276,height:250}}></Image>
        </View>
        <Text
          style={[
            Typography.regular.xLarge,
            { color: isDark ? Colors.others.white : Colors.grayScale._900 },
          ]}
        >
          Select which contact details should we use to reset your password
        </Text>
        <TouchableOpacity
          onPress={()=> {
            handleSelectionSMS();
          }}
          style={{
            width: 380,
            height: 128,
            borderColor: isSelectedSMS
              ? Colors.main.primary._500
              : border,

            backgroundColor: isDark ? Colors.dark._1 : Colors.others.white,
            borderWidth: 3,
            borderRadius: 32,
            flexDirection: "row",
            padding: 24,
            gap: 20,
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              backgroundColor: Colors.transparent.blue,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Chat fillColor={Colors.main.primary._500} />
          </View>
          <View
            style={{
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color: isDark ? Colors.grayScale._300 : Colors.grayScale._600,
                },
              ]}
            >
              via SMS
            </Text>
            <Text
              style={[
                Typography.bold.large,
                { color: isDark ? Colors.others.white : Colors.grayScale._900 },
              ]}
            >
              +1 111*****99
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> {
            handleSelectionEmail()
          }}
          style={{
            width: 380,
            height: 128,
            borderColor: isSelectedEmail
              ? Colors.main.primary._500
              : border,
            backgroundColor: isDark ? Colors.dark._1 : Colors.others.white,
            borderWidth: 3,
            borderRadius: 32,
            flexDirection: "row",
            padding: 24,
            gap: 20,
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              backgroundColor: Colors.transparent.blue,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Message fillColor={Colors.main.primary._500} />
          </View>
          <View
            style={{
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color: isDark ? Colors.grayScale._300 : Colors.grayScale._600,
                },
              ]}
            >
              via Email:
            </Text>
              <TextInput
              style={[
                Typography.bold.large,
              
                { color: isDark ? Colors.others.white : Colors.grayScale._900, borderRadius: 5, borderBottomWidth: 1,  borderColor: "#ccc",minWidth: "60%", paddingStart:10}]}
              placeholder="email"
              placeholderTextColor={isDark ? Colors.others.white : Colors.grayScale._500}

              value={email}
              onChangeText={(email)=> setEmail(email)}
            />
          </View>
        </TouchableOpacity>

        {alert && <Alerts text={alert.text} status={alert.status} />}

        <TouchableOpacity
          onPress={()=> {
              resetByEmail()
          }}
          style={{
            width: 380,
            height: 58,
            borderRadius: 100,
            backgroundColor: Colors.main.primary._500,
            alignItems:'center',
            justifyContent:'center',            
          }}
        >
           
          <Text style={[Typography.bold.large,{color:Colors.others.white}]}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "transparent",
  },
  container: {
    justifyContent: "flex-start",
    gap: 25,
    alignItems: "center",
    backgroundColor: Colors.others.white,
    flex: 1,
    padding: 20,
  },

  headerdark: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "transparent",
  },
  containerdark: {
    justifyContent: "flex-start",
    gap: 25,
    backgroundColor: Colors.dark._1,
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
});