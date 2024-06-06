import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Redirect, Stack } from "expo-router";
import { Pressable } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "@/ctx/AuthContext";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function Layout() {
  const { isLoggedIn } = useAuth();
  async function userViewedOnboarding() {
    if ((await SecureStore.getItemAsync("viewedOnboardingScreen")) !== "true") {
      await SecureStore.setItemAsync("viewedOnboardingScreen", "true");
    }

    return true;
  }

  const displayOnboarding = !userViewedOnboarding();

  if (displayOnboarding && !isLoggedIn) {
    return <Redirect href="/(auth)/SignIn&SignOut/SignInBlankForm" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
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
      /> */}
    </Stack>
  );
}
