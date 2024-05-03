import { Text, View } from "@/components/Themed";
import { LeftArrow } from "@/components/UI/icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { useContext, useEffect } from "react";
import { SvgUri, SvgXml } from "react-native-svg";

export default function SetYourFingerPrint() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Text>Set Your Finger Print</Text>
    </>
  );
}
