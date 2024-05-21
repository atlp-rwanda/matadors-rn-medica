import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="CancelAppointment/index" options={{headerShown:false}}/>
      <Stack.Screen name="VideoCallAppointment/index" options={{headerShown:false}}/>
      <Stack.Screen name="VideoCallAppointment/VideoCall" options={{headerShown:false}}/>
      <Stack.Screen name="VideoCallAppointment/VideoCallRinging" options={{headerShown:false}}/>
      <Stack.Screen name="VoiceCallAppointment/Index" options={{headerShown:false}}/>
      <Stack.Screen name="VoiceCallAppointment/VoiceCallRinging" options={{headerShown:false}}/>
      <Stack.Screen name="VoiceCallAppointment/SessionEnded" options={{headerShown:false}}/>
      <Stack.Screen name="MessagingAppointment" options={{headerShown:false}}/>
      <Stack.Screen name="ReschedualAppointment/index" options={{headerShown:false}}/>
      <Stack.Screen name="ReschedualAppointment/rescheduleDate" options={{ headerShown: false }}  />
      <Stack.Screen name="ReschedualAppointment/selectreason" options={{ headerShown: false }}  />
      <Stack.Screen name="Review" options={{ headerShown: false }}  />
    </Stack>
  );
}
