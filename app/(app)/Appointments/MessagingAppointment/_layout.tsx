import React from "react";
import { router, Stack, } from "expo-router";
import {
  OverlayProvider,
  Chat,
} from "stream-chat-expo";
import { Channel as ChannelType, StreamChat } from "stream-chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider } from "@/ctx/ChatContext";
import {Colors} from "@/constants/Colors";
import { Button, Text } from "react-native";
import { View, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { moreBlackIcon } from "@/constants/icon";

const API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY;

const chatClient = StreamChat.getInstance(`${API_KEY}`);

const InitialLayout = () => {

  return (
    <OverlayProvider>
      <Chat client={chatClient} >
        <Stack>
        <Stack.Screen name="index" options={{ headerShown:false}} />
          <Stack.Screen name="Home" options={{ 
            title: "Appointment rooms",
            headerTintColor: Colors.main.primary._500,

            headerRight: () => (
              <Pressable>
                  <SvgXml xml={moreBlackIcon} />
              </Pressable>
          
            ),
            }}/>
          <Stack.Screen
            name="ChannelList"
            options={{ title: "Chat lists" }}
          />
        <Stack.Screen name="ChannelScreen" options={{ 
          title: "back",
          headerTintColor: Colors.main.primary._500,

          headerRight: () => (
            <Pressable onPress={()=> router.push("(app)/Appointments/VoiceCallAppointment/SessionEnded")}>
                <Text
                style={{
                  color: Colors.others.white,
                  marginRight: 10,
                backgroundColor: Colors.main.primary._500,
                padding: 10,
                borderRadius: 10,
                }}
                >Add a review</Text>
            </Pressable>
          ),
          }}/>
        </Stack>
      </Chat>
    </OverlayProvider>
  );
};

export default function Layout() {
  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <InitialLayout />
      </GestureHandlerRootView>
    </AppProvider>
  );
}
