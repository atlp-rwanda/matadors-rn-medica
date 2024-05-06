import React from "react";

export type ThemeType = "light" | "dark" | null;

export interface ModalType {
  visible: boolean;
  show: ({ children }: { children: React.JSX.Element }) => void;
  hide: () => void;
  content: { children: React.JSX.Element | React.JSX.Element[] | null };
}
