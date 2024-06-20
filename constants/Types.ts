import { TCountries } from "countries-list";
import React from "react";

export type ThemeType = "light" | "dark" | null;

export interface ModalType {
  visible: boolean;
  show: ({ children }: { children: React.JSX.Element }) => void;
  hide: () => void;
  content: { children: React.JSX.Element | React.JSX.Element[] | null };
}

export interface PaymentOption {
  id: number;
  title: string;
  iconSvgStringLight: string;
  iconSvgStringDark?: string;
}
export interface AuthType {
  email: string;
  isLoggedIn: boolean;
  token: string;
  activated: boolean;
  userId: string;
  setUpUserInfo: (user: UserInfo) => Promise<void>;
  refreshToken: string;
  register: (email: string, password: string) => Promise<void>;
  loading: boolean;
  refreshSession: () => void;
  logout: () => void;
  login: ( email: string, password: string) => Promise<void>;
}

export interface Countries extends TCountries {
  [key: string]: any;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  gender: string;
  image: ImageType;
}
export interface ImageType {
  uri: string;
  name: string;
  mimeType: string;
}