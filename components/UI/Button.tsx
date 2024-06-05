import React from "react";
import { Colors } from "@/constants/Colors";
import {
  Pressable,
  StyleProp,
  StyleSheetProperties,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Text } from "../Themed";
import Typography from "@/constants/Typography";

interface Props {
  title: string;
  type?: "primary" | "dark" | "gray" | "light" | "outline";
  radius?: "medium" | "large";
  active?: boolean;
  leftIcon?: () => React.JSX.Element;
  rightIcon?: () => React.JSX.Element;
  onPress: () => void;
}

// interface Props {
//   backgroundColor: string;
//   title: string;
//   style?: StyleProp<ViewStyle>;
//   textColor?: StyleProp<TextStyle>;
//   onPress: () => void;
//   shadowColor?: string;
// }

export default function Button({
  title,
  type,
  radius,
  active,
  leftIcon,
  rightIcon,
  onPress,
}: Props) {
  let variableStyles: {
    backgroundColor: string;
    textColor: string;
    shadowColor: string;
    borderRadius: number;
    elevation: number;
  } = {
    backgroundColor: Colors.main.primary._500,
    textColor: Colors.others.white,
    shadowColor: Colors.main.primary._500,
    borderRadius: 100,
    elevation: 0,
  };

  let isActive = active === undefined ? true : active;

  if (type === "gray") {
    variableStyles.backgroundColor = Colors.dark._3;
    variableStyles.textColor = Colors.others.white;
  } else if (type === "dark") {
    variableStyles.backgroundColor = Colors.dark._1;
    variableStyles.textColor = Colors.others.white;
  } else if (type === "light") {
    variableStyles.backgroundColor = Colors.main.primary._100;
    variableStyles.textColor = Colors.main.primary._500;
  } else if (type === "outline") {
    variableStyles.backgroundColor = Colors.others.white;
    variableStyles.textColor = Colors.grayScale._900;
    variableStyles.shadowColor = "none";
    variableStyles.elevation = 0
  }

  if (radius === "medium") {
    variableStyles.borderRadius = 20;
  }

  return (
    <Pressable
      style={[
        {
          backgroundColor: !isActive
            ? Colors.status.disabled_button
            : variableStyles.backgroundColor,
          borderRadius: variableStyles.borderRadius,
          width: "100%",
          shadowColor: isActive ? variableStyles.shadowColor : "none",
          elevation: isActive ? variableStyles.elevation : 0,
          borderWidth: type === "outline" ? 1 : 0,
          borderColor: type === "outline" ? Colors.grayScale._200 : "none",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 18,
          gap: 10
        },
      ]}
      onPress={() => {
        active && onPress();
      }}
    >
      {leftIcon && leftIcon()}
      <Text
        style={[
          Typography.bold.large,
          {
            textAlign: "center",
            color: variableStyles.textColor,
          },
        ]}
      >
        {title}
      </Text>
      {rightIcon && rightIcon()}
    </Pressable>
  );
}
