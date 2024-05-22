import { BlueAttachIcon } from "@/components/UI/icons/attachIcon";
import { WhiteMessageIcon } from "@/components/UI/icons/blueMessage";
import { BlueCameraIcon } from "@/components/UI/icons/cameraIcon";
import { circleWithDots } from "@/components/UI/icons/circleWithDots";
import { WhiteDoubleTick, BlueDoubleTick } from "@/components/UI/icons/doubleTickIcon";
import { BlackFilterIcon } from "@/components/UI/icons/filterIcon";
import { blueImojiIcon } from "@/components/UI/icons/imojiIcon";
import { WhiteVoiceIcon } from "@/components/UI/icons/voiceIcon";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Platform, SafeAreaView, View } from "react-native";
import { SvgXml } from "react-native-svg";
import MenuComponent from "./Menu";
import { TouchableOpacity } from "react-native";
import AttachComponent from "./AttachComponent";
import { Image } from "react-native";
import PlaySound from "./Playsound";

function ChatMessaging() {
  const date = new Date();

  const { theme, changeTheme } = useContext(ThemeContext);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [menu, setMenu] = useState(false);
  const [attachContainer, setAttachContainer] = useState<boolean>(false);

  const [messages, setMessages] = useState<any[]>([
    {
      user: "user1",
      chat: "Can you tell me the problem you are having? So that I can identify it.",
      time: `${date.getHours()}:${date.getMinutes()}`,
    },
    {
      user: "user",
      chat: " I'm Andrew, I have a problem with my immune system 😢",
      time: `${date.getHours()}:${date.getMinutes()}`,
    },
    {},
  ]);
  function handleChatMenu() {
    setMenu(!menu);
  }

  function handleAttachMenu() {
    setAttachContainer(!attachContainer);
  }
  const [chats, setChats] = useState("");

  const handleChat = (text: string, user = "user") => {
    setInputFocused(true);
    const newMessage = {
      user,
      chat: text,
      time: `${date.getHours()}:${date.getMinutes()}`,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleTextChange = (text: string) => {
    setChats(text);
    handleChat(text);
  };

  const ios = Platform.OS === "ios";
  changeTheme("light");

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: ios ? 10 : 30, backgroundColor: "white" }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 30,
          padding: 20,
          backgroundColor:
            theme === "light" ? Colors.others.white : Colors.others.black,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.others.black,
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={25}
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
            }}
          >
            Dr. Drake Boeson
          </Text>
        </Pressable>
        {menu && (
          <View
            style={[
              {
                backgroundColor: Colors.others.white,
                borderRadius: 10,
                padding: 20,
                position: "absolute",
                right: 20,
                top: 50,
                zIndex:10
              },
              styles.shadowProp,
            ]}
          >
            <MenuComponent closeMenu={handleChatMenu} />
          </View>
        )}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <SvgXml xml={BlackFilterIcon} />
          <TouchableOpacity onPress={handleChatMenu}>
            <SvgXml xml={circleWithDots} />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "space-around",
          paddingHorizontal: 20,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          style={{
            marginBottom: 20,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              paddingVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: "rgba(117, 117, 117, 0.2)",
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            Session Start
          </Text>

          {messages.map((message: any, index: any) => (
            <View
              key={index}
              style={{
                backgroundColor:
                  message.user === "user"
                    ? Colors.main.primary._500
                    : "rgba(117, 117, 117, 0.2)",
                paddingHorizontal: 20,
                paddingVertical: 10,
                maxWidth: 350,
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent:
                  message.user === "user" ? "flex-start" : "flex-end",
                borderBottomEndRadius: message.user === "user" ? 10 : 20,
                borderBottomStartRadius: message.user === "user1" ? 10 : 20,
                borderRadius: 20,
                alignSelf: message.user === "user" ? "flex-end" : "flex-start",
                marginBottom: 20,
                gap: 30,
              }}
            >
              <Text
                style={[
                  Typography.medium.xLarge,
                  {
                    color:
                      message.user === "user" ? Colors.others.white : "black",
                    maxWidth: 250,
                  },
                ]}
              >
                {message.chat}
              </Text>
              <View>
                <Text
                  style={{
                    color:
                      message.user === "user"
                        ? Colors.others.white
                        : "rgba(117, 117, 117, 0.5)",
                  }}
                >
                  {message.time}
                </Text>
              </View>
            </View>
          ))}
          <View
            style={{
              backgroundColor: Colors.main.primary._500,
              paddingHorizontal: 20,
              paddingVertical: 10,
              maxWidth: 350,
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              borderBottomEndRadius: 10,
              borderRadius: 20,
              alignSelf: "flex-end",
              marginBottom: 20,
              gap: 30,
            }}
          >
            <Text
              style={[
                Typography.medium.xLarge,
                { color: Colors.others.white, maxWidth: 200 },
              ]}
            >
              Hi, good afternoon Dr. Drake... 😁😁
            </Text>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Text style={{ color: Colors.others.white }}>16:00</Text>
              <SvgXml xml={WhiteDoubleTick} />
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.main.primary._500,
              paddingHorizontal: 20,
              paddingVertical: 10,
              maxWidth: 350,
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              borderBottomEndRadius: 10,
              borderRadius: 20,
              alignSelf: "flex-end",
              marginBottom: 20,
              gap: 30,
            }}
          >
            <Text
              style={[
                Typography.medium.xLarge,
                { color: Colors.others.white, maxWidth: 200 },
              ]}
            >
              Hi, good afternoon Dr. Drake... 😁😁
            </Text>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Text style={{ color: Colors.others.white }}>16:00</Text>
              <SvgXml xml={WhiteDoubleTick} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "rgba(117, 117, 117, 0.2)",
              paddingHorizontal: 20,
              paddingVertical: 10,
              maxWidth: 350,
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              borderBottomStartRadius: 10,
              borderRadius: 20,
              alignSelf: "flex-start",
              marginBottom: 20,
              gap: 30,
            }}
          >
            <Text
              style={[
                Typography.medium.xLarge,
                { color: Colors.others.black, maxWidth: 250 },
              ]}
            >
              Hi, good afternoon Dr. Drake... 😁😁
            </Text>
            <View>
              <Text style={{ color: "rgba(117, 117, 117, 0.5)" }}>16:00</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.main.primary._500,
              paddingHorizontal: 20,
              paddingVertical: 10,
              maxWidth: 350,
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              borderBottomEndRadius: 10,
              borderRadius: 20,
              alignSelf: "flex-end",
              marginBottom: 20,
              gap: 30,
            }}
          >
            <Text
              style={[
                Typography.medium.xLarge,
                { color: Colors.others.white, maxWidth: 200 },
              ]}
            >
              Hi, good afternoon Dr. Drake... 😁😁
            </Text>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Text style={{ color: Colors.others.white }}>16:00</Text>
              <SvgXml xml={WhiteDoubleTick} />
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <View
              style={{
                width: 130,
                height: 130,
                backgroundColor: "green",
                borderRadius: 20,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/images/leftFoot.png")}
              />
            </View>
            <View
              style={{
                width: 130,
                height: 130,
                backgroundColor: "green",
                borderRadius: 20,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/images/rigthFoot.png")}
              />
            </View>
          </View>
          <PlaySound />
       <Pressable onPress={()=> router.push("Appointments/Review/ReviewBlankform")}>
       <Text
            style={{
              alignSelf: "center",
              paddingVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: "rgba(117, 117, 117, 0.2)",
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            Session End
          </Text>
       </Pressable>
        </ScrollView>
        <View style={{}}>
          {attachContainer && (
            <View
              style={[
                {
                  backgroundColor: Colors.others.white,
                  padding: 40,
                  position: "absolute",
                  top: -190,
                  borderRadius: 20,
                  left: 40,
                },
                styles.shadowProp,
              ]}
            >
              <AttachComponent />
            </View>
          )}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <View
              style={{
                flexDirection: "row",
                flex: 2,
                borderColor: Colors.main.primary._500,
                borderWidth: 1,
                alignItems: "center",
                backgroundColor: Colors.transparent.blue,
                padding: 15,
                gap: 15,
                borderRadius: 20,
              }}
            >
              <Pressable>
                <SvgXml xml={blueImojiIcon} />
              </Pressable>
              <TextInput
                style={[Typography.semiBold.medium, { flex: 2 }]}
                value={chats}
                onChangeText={handleTextChange}
                keyboardType="default"
                returnKeyType="done"
              />
              <Pressable onPress={handleAttachMenu}>
                <SvgXml xml={BlueAttachIcon} />
              </Pressable>
              <Pressable
                onPress={() =>
                  router.push("Appointments/MessagingAppointment/Camera")
                }
              >
                <SvgXml xml={BlueCameraIcon} />
              </Pressable>
            </View>
            <View>
              {inputFocused ? (
                <Pressable
                  style={{
                    backgroundColor: Colors.main.primary._500,
                    padding: 20,
                    borderRadius: 100,
                  }}
                >
                  <Ionicons name="send" size={24} color="white" />
                </Pressable>
              ) : (
                <Pressable
                  style={{
                    backgroundColor: Colors.main.primary._500,
                    padding: 20,
                    borderRadius: 100,
                  }}
                >
                  <SvgXml xml={WhiteVoiceIcon} />
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor:Colors.others.white

  },
});
export default ChatMessaging;
