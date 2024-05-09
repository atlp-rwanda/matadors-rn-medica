import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
      {/* <Stack.Screen name="SignIn&SignOut/SignUpBlankForm" options={{ headerShown: false }} />
      <Stack.Screen name="SignIn&SignOut/LetsYouIn" options={{ headerShown: false }} /> */}

      </Stack>
    </>
  );
}
