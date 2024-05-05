import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";

import { useContext, useEffect, useState } from "react";

import ThemeProvider, { ThemeContext } from "@/ctx/ThemeContext";
import { Pressable, View, useColorScheme } from "react-native";
import { ThemeType } from "@/constants/Types";
import { Text } from "@/components/Themed";

export {

  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(auth)",
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
    if (loaded && favoredTheme) {
      SplashScreen.hideAsync();
    }
  }, [loaded, favoredTheme]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={favoredTheme}>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  return (
    <>
      <Stack initialRouteName="(auth)">
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </>
  );
}
