
import React from "react";
import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack } from "expo-router";

export default function BookingLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="reviewSummary" options={{ headerShown: false }} />
        <Stack.Screen
          name="BookingAppointment"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Doctor_details" options={{ header: () => (
            <Header
              title="Dr. Jenny Watson"
              options={{
              }}
            />
          ), }} />
        <Stack.Screen
          name="DoctorRatingAndReview"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Select-package" options={{ headerShown: false }} />
        <Stack.Screen name="Patient-details" options={{ headerShown: false }} />
        <Stack.Screen name="EnterYourPin" options={{ headerShown: false }} />
        <Stack.Screen name="AddNewCard" options={{ headerShown: false }} />
        <Stack.Screen
          name="SelectPayment"
          options={{ header: () => <Header title="Payments" /> }}
        />
      </Stack>
    </>
  );
}
