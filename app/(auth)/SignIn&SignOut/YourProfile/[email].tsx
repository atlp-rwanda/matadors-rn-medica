import {
  CalenderIconGray,
  DropDownIconDark,
  DropDownIconGray,
  MessageIconGray,
} from "@/assets/icons/Profile/Icons";
import Button from "@/components/UI/Button";
import CustomDropdown from "@/components/UI/CustomDropdown";
import Input from "@/components/UI/Input";
import SelectProfile from "@/components/UI/SelectProfile";
import { Colors } from "@/constants/Colors";
import { UserInfo } from "@/constants/Types";
import Typography from "@/constants/Typography";
import { useAuth } from "@/ctx/AuthContext";
import { ThemeContext } from "@/ctx/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ActivityIndicator } from "react-native";
import { SvgXml } from "react-native-svg";

const YourProfile = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [image, setImage] = useState<null | string>(null);
  const [value, setValue] = useState<string>(" ");
  const { theme } = useContext(ThemeContext);
  const { setUpUserInfo, name, authType, imageUrl } = useAuth();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<Omit<UserInfo, "email">>({
    firstName: "",
    lastName: "",
    birthDate: "",
    // email: "",
    gender: "",
    image: {
      name: "",
      mimeType: "",
      uri: "",
    },
  });

  function handleFormChange(name: string, value: string) {
    setFormData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  console.log(formData.lastName);

  async function handleSubmit() {
    try {
      setIsLoading(true);
      await setUpUserInfo(

        authType  && authType !== "apple"
          ? authType && authType !== "apple"
            ? {
              ...formData,
              firstName: String(name).split(" ")[0],
              lastName: String(name).split(" ")[1],
              imageUrl: { uri: imageUrl, mimeType: "image/jpeg" },
            }
            : formData
          : formData
      )
    } catch (err) {
      setIsLoading(false);
      const error: Error = err as Error;
      Alert.alert(error.message);
      console.log(err);
    }
  }

  return (
    <ScrollView
      style={{
        backgroundColor:
          theme === "light" ? Colors.others.white : Colors.dark._1,
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
        gap: 15,
        // paddingHorizontal: 20,
        alignItems: "center",
        paddingVertical: 20,
      }}
      alwaysBounceVertical={false}
    >
      <View>
        <SelectProfile
          image={
            authType && authType !== "apple"
              ? { uri: imageUrl, mimeType: "image/jpeg" }
              : formData.image
          }
          onChange={handleFormChange}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          gap: 20,
          paddingVertical: 20,
          width: "100%",
          height: "100%",
          flexGrow: 1,
          flex: 1,
        }}
      >
        <Input
          placeholder="First Name"
          name="firstName"
          value={
            authType && authType !== "apple"
              ? authType || authType !== "apple"
                ? String(name).split(" ")[0]
                : formData.firstName
              : formData.firstName
          }
          onChange={handleFormChange}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          value={
            authType  && authType !== "apple"
              ? authType || authType !== "apple"
                ? String(name).split(" ")[1]
                : formData.lastName
              : formData.lastName
          }
          onChange={handleFormChange}
        />
        <Input
          placeholder="yyyy-MM-DD"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleFormChange}
          rightElement={() => {
            return (
              <Pressable>
                <SvgXml xml={CalenderIconGray} />
              </Pressable>
            );
          }}
        />
        <Input
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleFormChange}
          rightElement={() => {
            return (
              <Pressable>
                <SvgXml xml={MessageIconGray} />
              </Pressable>
            );
          }}
          disabled
        />
        <Dropdown
          style={{
            backgroundColor:
              theme === "light" ? Colors.grayScale._50 : Colors.dark._2,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
          }}
          placeholderStyle={[
            Typography.semiBold.medium,
            {
              color:
                theme === "light" ? Colors.grayScale._500 : Colors.others.white,
            },
          ]}
          selectedTextStyle={[
            Typography.semiBold.medium,
            {
              color:
                theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            },
          ]}
          containerStyle={{
            borderRadius: 20,
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.dark._2,
            borderWidth: 0,
          }}
          inputSearchStyle={{
            height: 40,
            fontSize: 16,
            borderRadius: 10,
          }}
          search
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            handleFormChange("gender", item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <SvgXml
              xml={theme === "light" ? DropDownIconGray : DropDownIconDark}
            />
          )}
          itemTextStyle={{
            color:
              theme === "light" ? Colors.grayScale._900 : Colors.others.white,
          }}
          data={[
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Gender" : "..."}
          searchPlaceholder="Search..."
          renderInputSearch={() => <></>}
          value={formData.gender}
          onChangeText={(e) => { }}
        />
      </View>

      <View style={{ marginTop: "auto", width: "100%", paddingHorizontal: 20 }}>
        <Button
          title={isLoading ? <ActivityIndicator color="white" /> : "Continue"}
          onPress={handleSubmit}
          active={!isLoading}
        />
      </View>
    </ScrollView>
  );
};

export default YourProfile;
