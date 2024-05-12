import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Booking/Doctor_details" options={{ headerShown: false }} />
        <Stack.Screen name="Booking/DoctorRatingAndReview" options={{ headerShown: false }}/>
        <Stack.Screen name="ActionMenu/NotificationScreen" options={{ headerShown: false }} />
        <Stack.Screen name="ActionMenu/HomeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Booking/BookingAppointment" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
