import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="SignIn&SignOut/SignUpBlankForm"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn&SignOut/LetsYouIn"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn&SignOut/SignInBlankForm"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword&Reset/OTPform"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateNewPassword"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword&Reset/ForgotPassword"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn&SignOut/YourProfile"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn&SignOut/Create-NewPin"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn&SignOut/SetYourFingerPrint"
          options={{ header: () => (<Header title="Set Your Fingerprint" />) }}
        />
      </Stack>
    </>
  );
}
