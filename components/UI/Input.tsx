import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import React, { useContext } from "react";
import { View } from "react-native";
import { TextInput } from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  textInputConfig?: object;
  rightElement?: () => React.JSX.Element;
}

export default function Input({
  placeholder,
  value,
  textInputConfig,
  rightElement,
}: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor:
          theme === "light" ? Colors.grayScale._50 : Colors.dark._2,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        {...textInputConfig}
        style={[
          Typography.semiBold.medium,
          {
            color:
              theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            // width: "100%",
            flexGrow: 1,
            paddingVertical: 15,
          },
        ]}
        placeholderTextColor={Colors.grayScale._500}
      />

      {rightElement && rightElement()}
    </View>
  );
}
