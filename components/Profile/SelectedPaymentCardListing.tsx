import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { colors } from "react-native-elements";

interface Props {
  icon: () => React.JSX.Element;
  title: string;
}

export default function SelectPaymentCardListing({ icon, title }: Props) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: "white",
          elevation: 20,
          shadowColor: Colors.grayScale._400,
          gap: 10,
          borderRadius: 15,
        }}
      >
        {icon()}
        <Text style={Typography.bold.xLarge}>{title}</Text>
        <Text
          style={[
            Typography.bold.large,
            { marginLeft: "auto", color: Colors.main.primary._500 },
          ]}
        >
          Connected
        </Text>
      </View>
    </>
  );
}
