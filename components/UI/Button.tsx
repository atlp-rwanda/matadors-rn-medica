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
  backgroundColor: string;
  title: string;
  style?: StyleProp<ViewStyle>;
  textColor?: StyleProp<TextStyle>;
  onPress: () => void;
  shadowColor?: string;
}

export default function Button({
  backgroundColor,
  title,
  style,
  textColor,
  shadowColor,
  onPress,
}: Props) {
  return (
    <Pressable
      style={[
        {
          backgroundColor: backgroundColor,
          borderRadius: 100,
          width: "100%",
          shadowColor: shadowColor ? shadowColor : "none",
          elevation: shadowColor ? 8 : 0,
        },
        style,
      ]}
      onPress={() => {
        onPress();
      }}
    >
      <Text
        style={[
          Typography.bold.large,
          {
            textAlign: "center",
            color: Colors.others.white,
            paddingHorizontal: 16,
            paddingVertical: 18,
          },
          textColor,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
