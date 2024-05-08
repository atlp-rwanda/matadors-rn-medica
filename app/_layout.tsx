import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";
 
import { useContext, useEffect, useState } from "react";
 
import * as NavigationBar from "expo-navigation-bar";
import { ZoomOutUp } from "react-native-reanimated";
import ThemeProvider, { ThemeContext } from "@/ctx/ThemeContext";
import { Pressable, View, useColorScheme } from "react-native";
import { ThemeType } from "@/constants/Types";
import { Text } from "@/components/Themed";
import ModalProvider from "@/ctx/ModalContext";
import ModalContainer from "@/components/UI/Modal";
 
export { ErrorBoundary } from "expo-router";
 
export const unstable_settings = {
  initialRouteName: "(onBoarding)",
};
 
SplashScreen.preventAutoHideAsync();
 
export default function RootLayout() {
  const [loaded, error] = useFonts({
    Medium: require("../assets/fonts/Urbanist-Medium.ttf"),
    SemiBold: require("../assets/fonts/Urbanist-SemiBold.ttf"),
    Bold: require("../assets/fonts/Urbanist-Bold.ttf"),
    Regular: require("../assets/fonts/Urbanist-Regular.ttf"),
    ...FontAwesome.font,
  });
 
  const systemTheme = useColorScheme() as ThemeType;
 
  const [favoredTheme, setFavoredTheme] = useState<ThemeType>(null);
 
  useEffect(() => {
    async function getCustomTheme() {
      try {
        let favoredTheme = (await SecureStore.getItemAsync(
          "theme"
        )) as ThemeType;
 
        if (!favoredTheme) {
          favoredTheme = systemTheme;
        }
 
        setFavoredTheme(favoredTheme);
      } catch (e) {
        console.log(e);
      }
    }
 
    getCustomTheme();
  }, []);
 
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);
 
  useEffect(() => {
    async function handleNavigationButtons() {
      await NavigationBar.setPositionAsync("absolute");
      await NavigationBar.setBackgroundColorAsync("#ffffff00");
      await NavigationBar.setBehaviorAsync("inset-swipe");
      await NavigationBar.setVisibilityAsync("hidden");
 
      NavigationBar.addVisibilityListener(({ visibility }) => {
        if (visibility === "visible") {
          setTimeout(async () => {
            await NavigationBar.setVisibilityAsync("hidden");
          }, 2000);
        }
      });
    }
    if (loaded) {
      handleNavigationButtons();
      SplashScreen.hideAsync();
    }
  }, [loaded, favoredTheme]);
 
  if (!loaded) {
    return null;
  }
 
  return (
    <ThemeProvider theme={favoredTheme}>
      <ModalProvider>
        <RootLayoutNav />
      </ModalProvider>
    </ThemeProvider>
  );
}
 
function RootLayoutNav() {
  return (
    <>
      <Stack
        initialRouteName="(auth)"
        screenOptions={{ statusBarTranslucent: true, headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}