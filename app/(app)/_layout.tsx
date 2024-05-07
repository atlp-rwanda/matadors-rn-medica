import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ActionMenu/NotificationScreen" options={{ headerShown: false }} />
      <Stack.Screen name="ActionMenu/HomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="Booking/Booking_Appointment" options={{ headerShown: false }} />

      </Stack>
    </>
  );
}
