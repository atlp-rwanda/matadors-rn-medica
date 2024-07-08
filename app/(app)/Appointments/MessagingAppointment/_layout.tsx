import React from "react";
import { Stack, } from "expo-router";
import {
  OverlayProvider,
  Chat,
} from "stream-chat-expo";
import { Channel as ChannelType, StreamChat } from "stream-chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider } from "@/ctx/ChatContext";

const API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY;

const chatClient = StreamChat.getInstance(`${API_KEY}`);

const InitialLayout = () => {
  return (
    <OverlayProvider>
      <Chat client={chatClient} >
        <Stack>
        <Stack.Screen name="index" options={{ headerShown:false}} />
          <Stack.Screen name="Home" options={{ title: "Appointment rooms" }} />
          <Stack.Screen
            name="ChannelList"
            options={{ title: "Chat list list" }}
          />
        <Stack.Screen name="ChannelScreen" options={{ title: "back" }}/>
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
