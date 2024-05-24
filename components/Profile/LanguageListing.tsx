import { useState } from "react";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { checkedRadioBtn, uncheckedRadioBtn } from "../UI/Icons";
import Typography from "@/constants/Typography";

interface Props {
  name: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function LanguageListing({ name, selected, onPress }: Props) {
  return (
    <Pressable
      onPress={() => {
        onPress && onPress();
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={Typography.semiBold.xLarge}>{name}</Text>
      <SvgXml xml={selected ? checkedRadioBtn : uncheckedRadioBtn} />
    </Pressable>
  );
}
