import { Text } from "@/components/Themed";
import { LeftArrow } from "@/components/UI/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, Pressable } from "react-native";
import  CountdownTimer from "@/components/OTPcomponents/countdownTimer";
import { OtpInput } from "react-native-otp-entry";


export default function OTPform() {
  const [isDark, setIsDark] = useState(false);
  const [pin1, Setpin1] = useState(null);
  const [showTimer, setShowTimer] = useState(false);

  const handleTimeout = () => {
    setShowTimer(false);
    // Handle resend code action here
  };
  
  return (
    <>
      <View style={isDark ? styles.containerdark : styles.container}>
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
            OTP Code Verification
          </Text>
        </View>
        <View style={{gap:60,alignItems:'center'}}>
        <Text style={[Typography.medium.xLarge,{color: isDark? Colors.others.white:Colors.grayScale._900}]}>Code has been send to +1 111 ******99</Text>
        <View style={styles.inputs}>
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
        <Text style={[Typography.medium.xLarge,{color:isDark? Colors.others.white:Colors.grayScale._900}]}> Resend code in <CountdownTimer/> s</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 380,
            height: 58,
            borderRadius: 100,
            backgroundColor: Colors.main.primary._500,
            alignItems:'center',
            justifyContent:'center',            
          }}
        >
           
          <Text style={[Typography.bold.large,{color:Colors.others.white}]}>verify</Text>
        </TouchableOpacity>
       
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  inputs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
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
    justifyContent: "space-between",
    gap: 20,
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
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: Colors.dark._1,
    alignItems: "center",
    flex: 1,
    padding: 20,
    
  },
});
