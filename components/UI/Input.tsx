import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import React, { useContext } from "react";
import { View } from "react-native";
import { TextInput } from "react-native";

interface Props {
  placeholder: string;
  value: string;
  textInputConfig?: object;
  rightElement?: () => React.JSX.Element;
  leftElement?: () => React.JSX.Element;
  name: string;
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
}

export default function Input({
  name,
  onChange,
  placeholder,
  value,
  textInputConfig,
  rightElement,
  leftElement,
  disabled,
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
      {leftElement && leftElement()}
      <TextInput
        placeholder={placeholder}
        value={value}
        {...textInputConfig}
        style={[
          Typography.semiBold.medium,
          {
            color:
              theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            flexGrow: 1,
            paddingVertical: 15,
          },
        ]}
        placeholderTextColor={Colors.grayScale._500}
        onChangeText={(val) => {
          onChange(name, val);
        }}
        editable={!disabled}
      />

      {rightElement && rightElement()}
    </View>
  );
}
