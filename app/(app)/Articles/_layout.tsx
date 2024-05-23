import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="Article" options={{headerShown:false}} />
      <Stack.Screen name="ArticleSeeAll" options={{headerShown:false}} />
    </Stack>
  );
}
