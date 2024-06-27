import React, { useContext, useEffect } from "react";
import { AuthType, UserInfo } from "@/constants/Types";
import { createContext, useState } from "react";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

export const AuthContext = createContext<AuthType>({
  email: "",
  isLoggedIn: false,
  activated: false,
  userId: "",
  token: "",
  refreshToken: "",
  name: "",
  imageUrl: "",
  authType: "",
  setUpUserInfo: async (user: UserInfo) => {},
  refreshSession: async () => {},
  login: async (email: string, password: string) => {},
  register: async (email: string, password: string) => {},
  logout: async () => {},
});

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}

export default function AuthProvider({ children }: Props) {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [activated, setActivated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [authType, setAuthType] = useState("");

  async function refreshSession() {}

  async function logout() {}

  async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      setIsLoggedIn(true);
      setEmail(data.session.user.email!);
      setToken(data.session.access_token);
      setRefreshToken(data.session.refresh_token);
      setUserId(data.session.user.id);
    } else {
      throw new Error(error.message);
    }
  }

  async function register(email: string, password: string) {
    const { data: registerData, error: registerError } =
      await supabase.auth.signUp({
        email: email,
        password: password,
      });

    if (!registerError) {
      const { error } = await supabase
        .from("patients")
        .insert({ auth_id: registerData.session?.user.id, activated: false });

      if (!error) {
        setToken(registerData.session?.access_token || "");
        setRefreshToken(registerData.session?.refresh_token || "");
        setEmail(email);
        setUserId(registerData.session?.user.id || "");
      } else {
        console.log("Error creating patient entry: ", error);
        throw new Error(error.message);
      }
    } else {
      console.log("Register error: ", registerError);
      throw new Error(registerError.message);
    }
  }

  async function setUpUserInfo(user: UserInfo) {
    if (authType === "email") {
      const res = await fetch(user.image.uri);
      const arrayBuffer = await res.arrayBuffer();

      await supabase.storage
        .from("patients")
        .upload(userId + "/" + uuid.v4(), arrayBuffer, {
          contentType: user.image.mimeType ?? "image/jpeg",
        });
    }

    const res = await supabase
      .from("patients")
      .update({
        first_name: user.firstName,
        last_name: user.lastName,
        gender: user.gender,
        date_of_birth: user.birthDate,
        activated: true,
        image: authType !== "email" ? imageUrl : userId + "/" + uuid.v4(),
      })
      .eq("auth_id", userId);

    setActivated(true);
    setIsLoggedIn(true);
  }

  useEffect(() => {
    (async () => {
      if (userId) {
        const { data } = await supabase
          .from("patients")
          .select(`*`)
          .eq("auth_id", userId)
          .single();

        setActivated(data?.activated);
        setIsLoggedIn(true);
      }
    })();
  }, [userId]);

  const value = {
    isLoggedIn,
    token,
    refreshToken,
    activated,
    userId,
    email,
    name,
    authType,
    imageUrl,
    setName,
    setUpUserInfo,
    refreshSession,
    login,
    logout,
    register,
    setIsLoggedIn,
    setEmail,
    setToken,
    setRefreshToken,
    setUserId,
    setImageUrl,
    setAuthType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
