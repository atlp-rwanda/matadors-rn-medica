import { SvgXml } from "react-native-svg";
import { View } from "../Themed";
import { Pressable, Text } from "react-native";
import { ProfileIcon, ChevronRight } from "@/assets/icons/Profile/Icons";
import Typography from "@/constants/Typography";
import React from "react";

interface Props {
  icon: () => React.JSX.Element;
  title: string;
  textColor?: string;
  rightComponent?: () => React.JSX.Element;
  onPress?: () => void;
}

export default function OptionListing({
  icon,
  title,
  rightComponent,
  textColor,
  onPress,
}: Props) {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
          // backgroundColor: "red",
          gap: 15,
          alignItems: "center",
        }}
      >
        {/* <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}> */}
        {icon()}
        <Text style={[Typography.semiBold.xLarge, { color: textColor }]}>
          {title}
        </Text>
        {/* </View> */}
        <View style={{ marginLeft: "auto" }}>
          {rightComponent && rightComponent()}
        </View>
      </Pressable>
    </>
  );
}
