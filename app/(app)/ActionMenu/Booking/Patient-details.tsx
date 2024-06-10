import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeContext } from "@/ctx/ThemeContext";
import DropDown from "@/components/UI/DropDown";
import Input from "@/components/UI/Input";
import Typography from "@/constants/Typography";
import TextArea from "@/components/UI/TextArea";
import Button from "@/components/UI/Button";
import { StatusBar } from "expo-status-bar";

const PatientDetails = () => {
  const [text, setText] = useState("");
  const [height, setHeight] = useState(40);
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ScrollView
        style={{
          backgroundColor: theme === "light" ? "#FFFFFF" : "#181A20",
          width: "100%",
          padding: 20,
        }}
        contentContainerStyle={{
          gap: 20,
          height: "100%",
        }}
      >
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Full Name
          </Text>
          <Input placeholder="Full Names" value="Andrew Ainsley" />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Gender
          </Text>
          <DropDown
            data={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Your Age
          </Text>
          <DropDown
            data={[
              { value: "27 years", label: "27 years" },
              { value: "28 years", label: "28 years" },
            ]}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Write Your Problem
          </Text>
          {/* <Input placeholder="Describe how you are feeling here ..."  /> */}
          <TextArea text="Hello Dr. Jenny, I have a problem with my immune system. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Button
            title="Next"
            onPress={() => {
              router.push("(app)/ActionMenu/Booking/SelectPayment");
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({});
