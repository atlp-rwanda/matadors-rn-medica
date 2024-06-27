
import { useContext, useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { ThemeContext } from "@/ctx/ThemeContext";
import { SvgXml } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Typography from "../../../constants/Typography";
import { Colors } from "../../../constants/Colors";
import {
  OrLine,
  greyOrLine,
  BlackApple,
  WhiteApple,
} from "@/components/Icons/Icons";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import React from "react";
import { useRouteInfo } from "expo-router/build/hooks";
import { User } from "@supabase/supabase-js";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();





const redirectTo = makeRedirectUri({
  native: "com.medica://",
});
console.log({ redirectTo });

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  console.log("session", data.session);
  return data.session;
};

const signInWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });
  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? "",
    redirectTo
  );

  if (res.type === "success") {
    const { url } = res;
    await createSessionFromUrl(url);

    router.push("/(app)/ActionMenu");
  }
};

const LetsYouIn = () => {

  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const route = useRouteInfo();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "816666560728-jme3n8em7sctff82bvg4mot1o429d3nc.apps.googleusercontent.com",
    redirectUri: "com.medica.oauthdeeplink:/(auth)" + route.pathname,
  });

  console.log("com.medica.oauthdeeplink:/(auth)" + route.pathname)
  useEffect(() => {
    signInWithGoogleAsync();
  }, [response]);

  async function signInWithGoogleAsync() {
    console.log(response)
    if (response?.type === "success") {
      setLoading(true);
      const { authentication } = response;
      console.log(authentication);
      
      if (authentication?.idToken) {
        const sbRequest = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: authentication.idToken,
          access_token: authentication.accessToken,
        });
        if (sbRequest.error) {
          Alert.alert("Error", sbRequest.error.message);
        } else {
          const { data } = await supabase.auth.getUser();
          console.log(data);
          if (data) {
            setUser(data.user);
          } else {
            Alert.alert("Error", "User not found");
          }
        }
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) redirectUser(user);
  }, [user]);

  async function redirectUser(user: User) {
    const { data: userData } = await supabase
      .from("patients")
      .select("*")
      .eq("id", user?.id)
      .single();

    if (userData) {
      router.push("/(app)/ActionMenu");
    } else {
      router.push("/(auth)/SignIn&SignOut/YourProfile/[email]");
    }
  }

  const url = Linking.useURL();
  console.log({ url });
  if (url) createSessionFromUrl(url);

  return (
    <ScrollView
      style={{
        backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
      }}
      contentContainerStyle={{
        paddingHorizontal: 20,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <StatusBar style={theme === "dark" ? "light" : "dark"} />

      <Image source={require("../../../assets/icons/FrameOne.png")} />

      <View style={styles.midPartOne}>
        <Text
          style={[
            Typography.heading._1,
            { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
          ]}
        >
          Let's you in
        </Text>
      </View>

      <View style={styles.middlePart}>
        <View style={styles.Buttons}>
          <TouchableOpacity
            style={[
              styles.middleButton,
              {
                backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF",
                borderColor: theme === "dark" ? "#35383F" : "#EEEEEE",
              },
            ]}
            onPress={signInWithFacebook}
          >
            <Image source={require("../../../assets/icons/facebook.png")} />
            <Text
              style={[
                Typography.semiBold.large,
                { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
              ]}
            >
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.middleButton,
              {
                backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF",
                borderColor: theme === "dark" ? "#35383F" : "#EEEEEE",
              },
            ]}
            onPress={() => promptAsync()}
          >
            <Image source={require("../../../assets/icons/Google.png")} />
            <Text
              style={[
                Typography.semiBold.large,
                { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
              ]}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.middleButton,
              {
                backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF",
                borderColor: theme === "dark" ? "#35383F" : "#EEEEEE",
              },
            ]}
          >
            <SvgXml xml={theme === "dark" ? WhiteApple : BlackApple} />
            <Text
              style={[
                Typography.semiBold.large,
                { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._900 },
              ]}
            >
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <SvgXml xml={theme === "dark" ? OrLine : greyOrLine} />

      <TouchableOpacity
        onPress={() => router.push("/(auth)/SignIn&SignOut/SignInBlankForm")}
        style={styles.signinBtn}
      >
        <Text style={[Typography.bold.large, { color: Colors.others.white }]}>
          Sign in with password
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text
          style={[
            Typography.regular.medium,
            { color: theme === "dark" ? "#FFFFFF" : Colors.grayScale._500 },
          ]}
        >
          Don't have an account?
        </Text>
        <Text
          style={[Typography.semiBold.medium, { color: "#246DFB" }]}
          onPress={() =>
            router.replace("/(auth)/SignIn&SignOut/SignUpBlankForm")
          }
        >
          Sign up
        </Text>
      </View>
    </ScrollView>
  );
};

export default LetsYouIn;

const styles = StyleSheet.create({
  signText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  signinBtn: {
    backgroundColor: "#246BFD",
    width: "100%",
    height: 58,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#246BFD",
    elevation: 10,
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "bold",
  },
  middleButton: {
    flexDirection: "row",
    gap: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "110%",
    borderRadius: 16,
  },
  Buttons: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textOne: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#212121",
    fontFamily: "Bold",
  },
  midPartOne: {
    justifyContent: "center",
    alignItems: "center",
  },
  middlePart: {
    gap: 24,
  },
  arrow: {
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: 20,
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    paddingRight: 24,
  },
});