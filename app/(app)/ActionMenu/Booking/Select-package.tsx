import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeContext } from "@/ctx/ThemeContext";
import Typography from "@/constants/Typography";
import DropDown from "@/components/UI/DropDown";
import { SvgXml } from "react-native-svg";
import {
  chatIcon,
  clockIcon,
  lightClockIcon,
  phoneIcon,
  videoIcon,
} from "@/constants/icon";
import PackageItem from "@/components/UI/PackageItem";
import { useTheme } from "react-native-paper";
import PackagesContainer from "@/components/PackagesContainer";
import Button from "@/components/UI/Button";
import { StatusBar } from "expo-status-bar";

const SelectPackage = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const packages = [
    {
      id: "0",
      title: "Messaging",
      description: "Chat messages with doctor",
      price: "$20",
      icon: () => <SvgXml xml={chatIcon} />,
    },
    {
      id: "1",
      title: "Voice Call",
      description: "Voice call with doctor",
      price: "$40",
      icon: () => <SvgXml xml={phoneIcon} />,
    },
    {
      id: "2",
      title: "Video Call",
      description: "Video call with doctor",
      price: "$60",
      icon: () => <SvgXml xml={videoIcon} />,
    },
  ];

  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ScrollView
        style={{
          backgroundColor: theme === "light" ? "#FFFFFF" : "#181A20",
          width: "100%",
          paddingVertical: 20,
        }}
        contentContainerStyle={{
          height: "100%",
          gap: 30,
        }}
      >
        <View style={{ gap: 20, paddingHorizontal: 20 }}>
          <Text
            style={[
              Typography.bold.xxLarge,
              {
                color: theme === "light" ? "#212121" : "#FFFFFF",
              },
            ]}
          >
            Select Duration
          </Text>
          <DropDown
            data={[
              { label: "Here", value: "Here" },
              { label: "There", value: "And" },
            ]}
            leftIcon={() => (
              <SvgXml xml={theme === "light" ? clockIcon : lightClockIcon} />
            )}
          />
        </View>

        <View style={{ gap: 15 }}>
          <Text
            style={[
              Typography.bold.xxLarge,
              {
                color: theme === "light" ? "#212121" : "#FFFFFF",
                paddingHorizontal: 20,
              },
            ]}
          >
            Select Package
          </Text>

          <View>
            {/* <PackageItem
              title="Messaging"
              description="Chat messages with doctor"
              price="$20"
              icon={() => <SvgXml xml={chatIcon} />}
            /> */}
            <PackagesContainer data={packages} />
          </View>
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            paddingHorizontal: 20,
            marginTop: "auto",
          }}
        >
          <Button
            title="Next"
            onPress={() => router.push("ActionMenu/Booking/Patient-details")}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default SelectPackage;
