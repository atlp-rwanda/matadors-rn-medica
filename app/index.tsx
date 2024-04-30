import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    router.push("/(auth)/SignIn&SignOut/SetYourFingerPrint");
  });

  return (
    <>
      <Text>Onboarding Screen</Text>
    </>
  );
}
