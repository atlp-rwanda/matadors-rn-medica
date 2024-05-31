import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function Layout() {

  return (
    <Stack>
        <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FirstScreen"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SecondScreen"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ThirdScreen"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
