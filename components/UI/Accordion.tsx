import { BlueDownIcon } from "@/assets/icons/Profile/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useState } from "react";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import HorizontalSeparator from "./HorizontalSeparator";

interface Props {
  title: string;
  description: string;
}

export default function Accordion({ title, description }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable
      onPress={() => {
        setIsOpen((prevValue) => !prevValue);
      }}
      style={{
        gap: 15,
        padding: 25,
        backgroundColor: "white",
        elevation: 20,
        shadowColor: Colors.grayScale._400,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            Typography.bold.xLarge,
            {
              color: Colors.grayScale._900,
            },
          ]}
        >
          {title}
        </Text>
        <SvgXml xml={BlueDownIcon} />
      </View>
      {isOpen && <HorizontalSeparator />}
      {isOpen && (
        <View>
          <Text
            style={[Typography.medium.medium, { color: Colors.grayScale._800 }]}
          >
            {description}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
