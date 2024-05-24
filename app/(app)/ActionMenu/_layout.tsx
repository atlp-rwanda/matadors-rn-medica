import Header from "@/components/UI/Header";
import { Stack } from "expo-router";

export default function Layout() {
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
    </Stack>
  );
}
