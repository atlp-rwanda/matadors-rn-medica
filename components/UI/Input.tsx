import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native";

interface Props {
  placeholder: string;
  value: string;
  textInputConfig?: object;
  rightElement?: () => React.JSX.Element;
}

export default function Input({
  placeholder,
  value,
  textInputConfig,
  rightElement,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: Colors.grayScale._50,
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
            color: Colors.grayScale._900,
            // width: "100%",
            flexGrow: 1,
            paddingVertical: 15,
          },
        ]}
      />

      {rightElement && rightElement()}
    </View>
  );
}
