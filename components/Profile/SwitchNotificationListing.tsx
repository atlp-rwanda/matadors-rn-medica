import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useState } from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-paper";

interface Props {
  value?: boolean;
  title: string;
}

export default function SwitchNotificationListing({ title, value }: Props) {
  const [on, setOn] = useState(value ?? false);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={Typography.semiBold.xLarge}>{title}</Text>
        <Switch
          value={on}
          onValueChange={() => {
            setOn((prevVal) => {
              return !prevVal;
            });
          }}
          thumbColor={Colors.others.white}
          // trackColor={}
          color={Colors.main.primary._500}
        />
      </View>
    </>
  );
}
