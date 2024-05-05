import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="SignIn&SignOut/SetYourFingerPrint"
          options={{
            header: () => {
              return <Header title="Set Your Fingerprint" />;
            },
          }}
        />
        <Stack.Screen name="ForgotPassword&Reset/ForgotPassword" options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPassword&Reset/OTPform" options={{headerShown:false}}/>
        
      </Stack>

    </>
  );
}
