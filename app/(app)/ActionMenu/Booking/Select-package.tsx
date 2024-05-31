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
import {
  GreyDownArrow,
  GreyTimer,
  WhiteDownArrow,
  WhiteTimer,
} from "@/components/Icons/Icons";
import { SvgXml } from "react-native-svg";

const SelectPackage = () => {
  const [time, setTime] = useState("");
  const [selected, setSelected] = useState<boolean>(false);
  const [selected1, setSelected1] = useState<boolean>(false);
  const [selected2, setSelected2] = useState<boolean>(false);
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleTimeChange = (text: string) => {
    setTime(text);
  };
  const toggleSelection = () => {
    setSelected(!selected);
    setSelected1(false);
    setSelected2(false);
  };
  const toggleSelection1 = () => {
    setSelected1(!selected1);
    setSelected(false);
    setSelected2(false);
  };
  const toggleSelection2 = () => {
    setSelected2(!selected2);
    setSelected1(false);
    setSelected(false);
  };

  return (
    <View
      style={[
        styles.Main,
        { backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF", gap: 30 },
      ]}
    >
      <View style={styles.middle}>
        <Text
          style={[
            styles.select,
            { color: theme === "dark" ? "#FFFFFF" : "#212121" },
          ]}
        >
          Select Duration
        </Text>

        <View
          style={[
            styles.inputs1,
            { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
          ]}
        >
          <View style={styles.input11}>
            <SvgXml
              xml={theme === "dark" ? WhiteTimer : GreyTimer}
              style={styles.icon}
            />
            <TextInput
              style={styles.email}
              placeholder="30 Minutes"
              keyboardType="email-address"
              placeholderTextColor="#9E9E9E"
              value={time}
              onChangeText={handleTimeChange}
            />
          </View>
          <SvgXml
            xml={theme === "dark" ? WhiteDownArrow : GreyDownArrow}
            style={styles.icon1}
          />
        </View>
      </View>
      <View style={styles.last}>
        <Text
          style={[
            styles.select,
            { color: theme === "dark" ? "#FFFFFF" : "#212121" },
          ]}
        >
          Select Package
        </Text>
        <View
          style={[
            styles.container2,
            { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
          ]}
        >
          <View style={styles.text}>
            <Image
              source={require("@/assets/images/AutoLayout.png")}
              style={styles.visa}
            />
            <View>
              <Text
                style={[
                  styles.mobile,
                  { color: theme === "dark" ? "#FFFFFF" : "#212121" },
                ]}
              >
                Messaging
              </Text>
              <Text
                style={[
                  styles.min,
                  { color: theme === "dark" ? "#E0E0E0" : "#212121" },
                ]}
              >
                Chats messages with doctor
              </Text>
            </View>
          </View>
          <View style={styles.dollar12}>
            <Text style={styles.dollar1}>$20</Text>
            <Text
              style={[
                styles.min,
                { color: theme === "dark" ? "#E0E0E0" : "#212121" },
              ]}
            >
              /30mins
            </Text>
          </View>
          <TouchableOpacity onPress={toggleSelection}>
            <MaterialIcons
              name={
                selected ? "radio-button-checked" : "radio-button-unchecked"
              }
              size={20}
              color={selected ? "blue" : "blue"}
              style={styles.radio}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.container2,
            { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
          ]}
        >
          <View style={styles.text}>
            <Image
              source={require("@/assets/images/VoiceCall.png")}
              style={styles.visa}
            />
            <View>
              <Text
                style={[
                  styles.mobile,
                  { color: theme === "dark" ? "#FFFFFF" : "#212121" },
                ]}
              >
                Voice Call
              </Text>
              <Text
                style={[
                  styles.min,
                  { color: theme === "dark" ? "#E0E0E0" : "#212121" },
                ]}
              >
                Voice Call with doctor
              </Text>
            </View>
          </View>
          <View style={styles.dollar}>
            <Text style={styles.dollar1}>$40</Text>
            <Text
              style={[
                styles.min,
                { color: theme === "dark" ? "#E0E0E0" : "#212121" },
              ]}
            >
              /30mins
            </Text>
          </View>
          <TouchableOpacity onPress={toggleSelection1}>
            <MaterialIcons
              name={
                selected1 ? "radio-button-checked" : "radio-button-unchecked"
              }
              size={20}
              color={selected1 ? "blue" : "blue"}
              style={styles.radio}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.container2,
            { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
          ]}
        >
          <View style={styles.text}>
            <Image
              source={require("@/assets/images/VideoCall.png")}
              style={styles.visa}
            />
            <View>
              <Text
                style={[
                  styles.mobile,
                  { color: theme === "dark" ? "#FFFFFF" : "#212121" },
                ]}
              >
                Video Call
              </Text>
              <Text
                style={[
                  styles.min,
                  { color: theme === "dark" ? "#E0E0E0" : "#212121" },
                ]}
              >
                Video call with doctor
              </Text>
            </View>
          </View>
          <View style={styles.dollar}>
            <Text style={styles.dollar1}>$60</Text>
            <Text
              style={[
                styles.min,
                { color: theme === "dark" ? "#E0E0E0" : "#212121" },
              ]}
            >
              /30mins
            </Text>
          </View>
          <TouchableOpacity onPress={toggleSelection2}>
            <MaterialIcons
              name={
                selected2 ? "radio-button-checked" : "radio-button-unchecked"
              }
              size={20}
              color={selected2 ? "blue" : "blue"}
              style={styles.radio}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("ActionMenu/Booking/Patient-details")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectPackage;
const styles = StyleSheet.create({
  Main: {
    width: "100%",
    height: 900,
    padding: 20,
  },
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    height: 50,
  },
  icon: {
    alignSelf: "center",
  },
  input11: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "35%",
  },
  icon1: {
    alignSelf: "center",
  },
  fill: {
    fontSize: 24,
    fontWeight: "600",
  },
  select: {
    fontSize: 20,
    fontWeight: "500",
  },
  middle: {
    marginTop: 10,
  },
  inputs1: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 30,
    marginBottom: 0,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email: {
    height: 50,
    fontSize: 16,
    color: Colors.grayScale._400,
    fontWeight: "500",
  },
  last: {
    marginTop: 20,
  },
  container2: {
    flexDirection: "row",
    height: 100,
    borderRadius: 24,
    marginBottom: 10,
    marginTop: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  visa: {
    marginRight: 15,
  },
  mobile: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.grayScale._900,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
  },
  radio: {
    alignSelf: "flex-end",
  },
  btn: {
    //   marginTop: 48
    height: 170,
    // justifyContent: 'flex-end'
  },
  button: {
    width: 350,
    alignSelf: "center",
    backgroundColor: Colors.main.primary._500,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
  },
  buttonText: {
    alignSelf: "center",
    color: Colors.others.white,
    fontWeight: "bold",
  },
  dollar: {
    left: 30,
    gap: 8,
  },
  dollar12: {
    left: 10,
    gap: 8,
  },
  dollar1: {
    alignSelf: "center",
    color: Colors.main.primary._500,
  },
  min: {
    fontSize: 14,
    color: Colors.grayScale._700,
  },
});
