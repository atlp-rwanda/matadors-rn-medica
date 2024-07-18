import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import {
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { useAppContext } from "@/ctx/ChatContext";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "@/ctx/ThemeContext";
import { Platform } from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrowBlack} from "@/constants/icon";
import { router } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useGlobalSearchParams } from "expo-router";
import Typography from "@/constants/Typography";
import { useModal } from "@/ctx/ModalContext";

const ChannelScreen = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [isloading, setIsLoading] = useState(false);
  const ios = Platform.OS === "ios";
  const modal = useModal();
  const {appointmentId} = useGlobalSearchParams();
  const { channel } = useAppContext();

  const endAppointment = async() => {
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from("appointment")
        .update({ status: "Completed" })
        .eq("id", appointmentId);
      if (error) {
        setIsLoading(true)
        console.log(error);
      } else {
        setIsLoading(false);
        handlemodal()
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlebackhome() {
    modal.hide();
    router.push("/(app)/Appointments");
  }

  async function handlemodal() {
    modal.show({
      children: (
        <View
          style={{
            padding: 40,
            alignItems: "center",
            gap: 20,
            borderRadius: 48,
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.dark._2,
          }}
        >
          <Image source={require("@/assets/images/cancelimg.png")} />
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
              Chat ended Successfully!
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
              Thank you for using our service. Your chat has been ended
              please go on and provide a review to the doctor.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handlebackhome}>
              <Text
                style={[Typography.bold.large, { color: Colors.others.white }]}
              >
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  }
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: Colors.others.white
    }}
  >
    <Channel
      channel={channel}
      // MessageText={MessageStyle}
      audioRecordingEnabled={true}
      enforceUniqueReaction={true}
      giphyEnabled={true}
    >

        <SafeAreaView style={{ marginBottom: ios ? 10 : 40 }}>
          <StatusBar style={theme === "dark" ? "dark" : "dark"} />
        </SafeAreaView>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 30,
              padding: 20,

                }}>
            <Pressable
              onPress={() => router.back()}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 30,
              }}
            >
              <SvgXml xml={backArrowBlack}/>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "600",
                }}
              >
                My Appointment
              </Text>
            </Pressable>
            <View>
              <Pressable onPress={endAppointment}>
                <Text style={{
                color: Colors.others.white,
                marginRight: 10,
              backgroundColor: Colors.main.primary._500,
              padding: 10,
              borderRadius: 10,}}>End chat</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex:1}}>
            <MessageList />
            <MessageInput />
          </View>
        </View>
    </Channel>
  </View>
  
  );
};

const styles = StyleSheet.create({

  btn: {
    backgroundColor: Colors.main.primary._500,
    textAlign: "center",
    alignItems: "center",
    padding: 18,
    borderRadius: 100,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});

export default ChannelScreen;