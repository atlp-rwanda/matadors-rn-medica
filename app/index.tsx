import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./(app)/HomeScreen";
import SplashScreen from "@/SpashScreen/Splash";
import { useEffect, useState } from "react";
import OnboardingScreen from "./Onboading/OnboardingScreen";
import CreateNewPassword from "./(auth)/CreateNewPassword";
import { router } from "expo-router";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      setShowHome(true);
    }, 3000);

    return () => clearTimeout(splashTimeout);
  }, []);

  useEffect(() => {
    if (showHome) {
      const homeTimeout = setTimeout(() => {
        setShowHome(false);
        setShowOnboarding(true);
      }, 5000);

      return () => clearTimeout(homeTimeout);
    }
  }, [showHome]);

  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/SignIn&SignOut/LetsYouIn");
    }, 2000);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {showHome && <HomeScreen />}
      {showOnboarding && <CreateNewPassword />}
    </>
  );

}
