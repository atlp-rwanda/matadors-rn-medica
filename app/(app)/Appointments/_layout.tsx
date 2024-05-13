import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="CancelAppointment/index" />
      <Stack.Screen name="VideoCallAppointment/index" />
      <Stack.Screen name="VoiceCallAppointment/index" />
      <Stack.Screen name="MessagingAppointment/index" />
      <Stack.Screen name="ReschedualAppointment/index" />
    </Stack>
  );
}
