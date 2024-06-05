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

const PatientDetails = () => {
  const [text, setText] = useState("");
  const [height, setHeight] = useState(40);
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: theme === "light" ? "#FFFFFF" : "#181A20",
          width: "100%",
          height: 900,
          padding: 20,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            width: "60%",
            height: 60,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons
              name="arrow-back"
              size={23}
              style={{ color: theme === "light" ? "#212121" : "#FFFFFF" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: theme === "light" ? "#212121" : "#FFFFFF",
            }}
          >
            Patient details
          </Text>
        </Pressable>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: theme === "light" ? "#212121" : "#FFFFFF",
            }}
          >
            Full Name
          </Text>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              backgroundColor: theme === "light" ? "#FAFAFA" : "#1F222A",
              margin: 10,
              marginTop: 20,
              marginBottom: 10,
              padding: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              style={{
                fontSize: 15,
                color: theme === "light" ? "#212121" : "#FAFAFA",
                fontWeight: "400",
              }}
              placeholder="Andrew Ainsley"
              keyboardType="default"
              placeholderTextColor={theme === "light" ? "#212121" : "#FFFFFF"}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: theme === "light" ? "#212121" : "#FFFFFF",
            }}
          >
            Gender
          </Text>
          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: theme === "light" ? "#FAFAFA" : "#1F222A",
              margin: 10,
              marginTop: 20,
              marginBottom: 10,
              padding: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              style={{
                fontSize: 15,
                color: theme === "light" ? "#212121" : "#FAFAFA",
                fontWeight: "400",
              }}
              placeholder="Male"
              keyboardType="default"
              placeholderTextColor={theme === "light" ? "#212121" : "#FFFFFF"}
            />
            <Icon
              name="caret-down"
              size={20}
              style={{
                alignSelf: "center",
                color: theme === "light" ? "#212121" : "#FFFFFF",
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: theme === "light" ? "#212121" : "#FFFFFF",
            }}
          >
            Your Age
          </Text>
          {/* <Text>Gender</Text> */}

          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: theme === "light" ? "#FAFAFA" : "#1F222A",
              margin: 10,
              marginTop: 20,
              marginBottom: 10,
              padding: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              style={{
                fontSize: 15,
                color: theme === "light" ? "#212121" : "#FAFAFA",
                fontWeight: "400",
              }}
              placeholder="27 years"
              keyboardType="default"
              placeholderTextColor={theme === "light" ? "#212121" : "#FFFFFF"}
            />
            <Icon
              name="caret-down"
              size={20}
              style={{
                alignSelf: "center",
                color: theme === "light" ? "#212121" : "#FFFFFF",
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: theme === "light" ? "#212121" : "#FFFFFF",
            }}
          >
            Write Your Problem
          </Text>
          {/* <Text>Gender</Text> */}

          <View
            style={{
              width: "95%",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: theme === "light" ? "#FAFAFA" : "#1F222A",
              margin: 10,
              marginTop: 20,
              marginBottom: 10,
              padding: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              value={text}
              onChangeText={(text) => setText(text)}
              style={{
                fontSize: 15,
                color: theme === "light" ? "#212121" : "#FAFAFA",
                fontWeight: "400",
              }}
              placeholder="type in your info"
              keyboardType="default"
              textAlignVertical="top"
              placeholderTextColor={theme === "light" ? "#212121" : "#FFFFFF"}
              multiline={true}
              numberOfLines={9}
              onContentSizeChange={(event) => {
                setHeight(event.nativeEvent.contentSize.height);
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 150,
            justifyContent: "flex-end",
          }}
        >
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
            <Text
              style={{
                alignSelf: "center",
                color: Colors.others.white,
                fontWeight: "bold",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default PatientDetails;
