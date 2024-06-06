import Header from "@/components/UI/Header";
import { useAuth } from "@/ctx/AuthContext";
import { Redirect, Stack } from "expo-router";
import React from "react";

export default function Layout() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Redirect href="/(auth)/SignIn&SignOut/SignInBlankForm" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="NotificationScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Booking" options={{ headerShown: false }} />
      <Stack.Screen
        name="FavoriteDoctorScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllDoctorScreen"
        options={{headerShown:false}}
      />
    </Stack>
  );
}
