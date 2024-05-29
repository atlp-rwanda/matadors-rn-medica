import { Text } from "@/components/Themed";
import { LeftArrow, } from "@/components/UI/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { router } from "expo-router";
import { useModal } from "@/ctx/ModalContext";
import { ThemeContext } from "@/ctx/ThemeContext";
import React from "react";

export default function EnterYourPin() {
  const [isDark, setIsDark] = useState(false);
  const modal = useModal();

  const { theme, changeTheme } = useContext(ThemeContext);
  async function handlePIN() {
    modal.show({
      children: (
        <View
          style={{
            padding: 40,
            alignItems: "center",
            gap: 20,
            borderRadius: 48,
            backgroundColor:
              theme === "light" ? Colors.others.white : '#181A20',
          }}
        >
          <Image source={require("@/assets/images/calendarmodal.png")} />
          <View
            style={{
              gap: 20,
              backgroundColor:
                theme === "light" ? Colors.others.white : Colors.dark._2,
            }}
          >
            <Text
              style={[
                Typography.heading._4,
                {
                  color: Colors.main.primary._500,
                  textAlign: "center",
                },
              ]}
            >
              Congratulations!
            </Text>
            <Text
              style={[
                Typography.regular.large,
                {
                  textAlign: "center",
                  color:
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white,
                },
              ]}
            >
              Appointment successfully booked. You will receive a notification
              and the doctor you selected will contact you.
            </Text>
            <TouchableOpacity style={{
                 backgroundColor: Colors.main.primary._500,
                 alignItems: "center",
                 padding: 18,
                 borderRadius: 100,
                 marginTop: 10,
            }} onPress={()=> {
              modal.hide()
              router.push("Appointments")
            }}>
              <Text
                style={[Typography.bold.large, { color: Colors.others.white,textAlign: "center"}]}
              >
                View Appointment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> {
                modal.hide()
                router.push("ActionMenu")
              }}
              style={{
                backgroundColor: theme === "light"
                ? Colors.main.primary._100:Colors.dark._3,
                borderRadius: 100,
                padding: 18,
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  Typography.bold.large,
                  {  color:theme === "light" ? Colors.main.primary._500:Colors.others.white },
                ]}
              >
                cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  }

  return (
    <>
      <View style={[isDark ? styles.containerdark : styles.container,{backgroundColor:
              theme === "light" ? Colors.others.white : '#181A20',}]}>
        <View style={isDark ? styles.headerdark : styles.header}>

        </View>
        <View style={{ gap: 60, alignItems: "center" }}>
          <Text
            style={[
              Typography.medium.xLarge,
              { color: theme === "dark" ? "#FFFFFF" : "#212121" },
            ]}
          >
            Enter your PIN to confirm appointment
          </Text>
          <View style={styles.inputs}>
            <OtpInput
              numberOfDigits={4}
              autoFocus={false}
              theme={{
                pinCodeContainerStyle: {
                  width: 83,
                  height: 61,
                  
                  backgroundColor: theme === 'dark'
                    ? '#1F222A'
                    : Colors.grayScale._50,
                  borderRadius: 16,
                  borderColor: theme === 'dark' ? '#35383F' : Colors.grayScale._200,
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
                pinCodeTextStyle: {
                  color: theme === 'dark' ? Colors.others.white : Colors.grayScale._900,
                },
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handlePIN}
          style={{
            width: 380,
            height: 58,
            borderRadius: 100,
            backgroundColor: Colors.main.primary._500,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[Typography.bold.large, { color: Colors.others.white }]}>
            Continue
          </Text>
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
