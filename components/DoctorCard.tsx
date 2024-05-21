import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";

const DoctorCard = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        width: 380,
        borderRadius: 24,
        backgroundColor:
          theme === "dark" ? Colors.dark._2 : Colors.others.white,
        gap: 16,
      }}
    >
      <Image
        source={require("@/assets/images/Maria.png")}
        style={{ width: 110, height: 110 }}
      />
      <View
        style={{
          justifyContent: "space-around",
          backgroundColor: "transparent",
        }}
      >
        <Text
          style={[
            Typography.heading._5,
            {
              color:
                theme === "dark" ? Colors.others.white : Colors.grayScale._900,
            },
          ]}
        >
          Dr Maria Foose
        </Text>
        <View
          style={{
            width: 222,
            height: 1,
            backgroundColor:
              theme === "dark" ? Colors.dark._3 : Colors.grayScale._200,
          }}
        ></View>
        <Text
          style={[
            Typography.medium.small,
            {
              color:
                theme === "dark" ? Colors.others.white : Colors.grayScale._800,
            },
          ]}
        >
          Dermatologists
        </Text>
        <Text
          style={[
            Typography.medium.small,
            {
              color:
                theme === "dark" ? Colors.others.white : Colors.grayScale._800,
            },
          ]}
        >
The Venus Hospital in Paris, France        </Text>
      </View>
    </View>
  );
};

export default DoctorCard;
