import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/SignIn&SignOut/SetYourFingerPrint");
    }, 2000);
  });

  return (
    <>
      <Text>Onboarding Screen</Text>
    </>
  );
}
