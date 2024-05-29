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
import { SvgXml } from "react-native-svg";
import { GreyDownArrow, WhiteDownArrow } from "@/components/Icons/Icons";

const PatientDetails = () => {
  const [text, setText] = useState("");
  const [height, setHeight] = useState(40);
  const { theme, changeTheme } = useContext(ThemeContext);
  changeTheme("dark");

  return (
    <>
      <View
        style={[
          styles.Main,
          { backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF" },
        ]}
      >
        <View>
                  <View style={styles.middle}>
          <Text
            style={[
              styles.select,
              { color: theme === "dark" ? "#FFFFFF" : "#212121" },
            ]}
          >
            Full Name
          </Text>
          <View
            style={[
              styles.inputs11,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
            ]}
          >
            <TextInput
              style={{
                fontSize: 15,
                color: theme === "light" ? '#212121' : '#FAFAFA',
                fontWeight: "400",
              }}
              placeholder="Andrew Ainsley"
              keyboardType="default"
              placeholderTextColor={theme === "dark" ? "#FFFFFF" : "#212121"}
            />
          </View>
        </View>
        <View style={styles.middle}>
          <Text
            style={[
              styles.select,
              { color: theme === "dark" ? "#FFFFFF" : "#212121" },
            ]}
          >
            Gender
          </Text>

          <View
            style={[
              styles.inputs1,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
            ]}
          >
            <TextInput
              style={{
                fontSize: 15,
                color: theme === "light" ? '#212121' : '#FAFAFA',
                fontWeight: "400",
              }}
              placeholder="Male"
              keyboardType="default"
              placeholderTextColor={theme === "dark" ? "#FFFFFF" : "#212121"}
            />
            <SvgXml
              xml={theme === "dark" ? WhiteDownArrow : GreyDownArrow}
              style={styles.icon1}
            />
          </View>
        </View>
        <View style={styles.middle}>
          <Text
            style={[
              styles.select,
              { color: theme === "dark" ? "#FFFFFF" : "#212121" },
            ]}
          >
            Your Age
          </Text>

          <View
            style={[
              styles.inputs1,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
            ]}
          >
            <TextInput
              style={{
                fontSize: 15,
                color: theme === "light" ? '#212121' : '#FAFAFA',
                fontWeight: "400",
              }}
              placeholder="27 years"
              keyboardType="default"
              placeholderTextColor={theme === "dark" ? "#FFFFFF" : "#212121"}
            />
            {/* <Icon name="caret-down" size={20} style={styles.icon1} />
             */}
            <SvgXml
              xml={theme === "dark" ? WhiteDownArrow : GreyDownArrow}
              style={styles.icon1}
            />
          </View>
        </View>
        <View style={styles.middle}>
          <Text
            style={[
              styles.select,
              { color: theme === "dark" ? "#FFFFFF" : "#212121" },
            ]}
          >
            Write Your Problem
          </Text>

          <View
            style={[
              styles.inputs1,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
            ]}
          >
            <TextInput
              value={text}
              onChangeText={(text) => setText(text)}
              style={{
                fontSize: 15,
                color: theme === "light" ? '#212121' : '#FAFAFA',
                fontWeight: "400",
              }}
              placeholder="type in your info"
              keyboardType="default"
              placeholderTextColor={theme === "dark" ? "#FFFFFF" : "#212121"}
              multiline={true}
              numberOfLines={9}
              onContentSizeChange={(event) => {
                setHeight(event.nativeEvent.contentSize.height);
              }}
            />
          </View>
        </View>
        </View>


        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() =>
              router.push("(app)/ActionMenu/Booking/SelectPayment")
            }
            style={{
              width: 350,
              alignSelf: "center",
              backgroundColor: Colors.main.primary._500,
              paddingTop: 18,
              paddingBottom: 18,
              paddingLeft: 16,
              paddingRight: 16,
              borderRadius: 100,
            }}
          >
            <Text style={{
    alignSelf: "center",
    color: Colors.others.white,
    fontWeight: "bold",
  }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({
  Main: {
    width: "100%",
    height: 900,
    paddingTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
    gap: 40,
  },
  icon1: {
    alignSelf: "center",
  },
  fill: {
    fontSize: 24,
    fontWeight: "600",
  },
  select: {
    fontSize: 16,
    fontWeight: "500",
  },
  middle: {
    marginTop: 10,
  },
  inputs11: {
    width: "100%",
    flexDirection: "row",
    margin: 10,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email1: {
    fontSize: 15,
    color: Colors.grayScale._900,
    fontWeight: "400",
  },
  inputs1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.grayScale._50,
    margin: 10,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email: {
    fontSize: 15,
    color: Colors.grayScale._900,
    fontWeight: "400",
  },
  btn: {
    height: 58,
  },
  button: {
    width: 340,
    alignSelf: "center",
    backgroundColor: Colors.main.primary._500,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
    shadowColor: '#246BFD',
    elevation: 7
  },
  buttonText: {
    alignSelf: "center",
    color: Colors.others.white,
    fontWeight: "bold",
  },
});
