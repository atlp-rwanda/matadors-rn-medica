import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" />
      <Stack.Screen name="index" />
      <Stack.Screen name="NotificationScreen" />
    </Stack>
  );
}
