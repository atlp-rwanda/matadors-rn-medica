import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="CancelAppointment/index" options={{headerShown:false}}/>
      <Stack.Screen name="VideoCallAppointment/index" options={{headerShown:false}}/>
      <Stack.Screen name="VoiceCallAppointment/MyAppointmentVoiceCall" options={{headerShown:false}}/>
      <Stack.Screen name="VoiceCallAppointment/VoiceCallRinging" options={{headerShown:false}}/>
      <Stack.Screen name="VoiceCallAppointment/SessionEnded" options={{headerShown:false}}/>
      <Stack.Screen name="MessagingAppointment" options={{headerShown:false}}/>
      <Stack.Screen name="ReschedualAppointment/index" options={{headerShown:false}}/>
    </Stack>
  );
}
