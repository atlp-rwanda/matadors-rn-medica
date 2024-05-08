import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";
import { Text, View } from "../Themed";
import { Colors } from "@/constants/Colors";
import { Input, LeftArrow } from "./Icons";
import { Pressable, useColorScheme } from "react-native";
import Typography from "@/constants/Typography";
import { useContext } from "react";
import { ThemeContext } from "@/ctx/ThemeContext";

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <View
        style={{
          paddingVertical: 40,
          paddingHorizontal: 20,
          backgroundColor:
            theme === "light" ? Colors.others.white : Colors.dark._1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.dark._1,
          }}
        >
          <Pressable>
            <LeftArrow
              fillColor={
                theme === "light" ? Colors.grayScale._900 : Colors.others.white
              }
            />
          </Pressable>
          <Text
            style={[
              Typography.heading._4,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            {title}
          </Text>
        </View>
        <Input
          stroke={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
        />
      </View>
    </>
  );
}
