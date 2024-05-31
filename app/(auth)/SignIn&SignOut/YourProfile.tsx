import {
  CalenderIcon,
  CalenderIconGray,
  DropDownIcon,
  DropDownIconDark,
  DropDownIconGray,
  MessageIcon,
  MessageIconGray,
} from "@/assets/icons/Profile/Icons";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import SelectProfile from "@/components/UI/SelectProfile";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { ThemeContext } from "@/ctx/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SvgXml } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

const YourProfile = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [image, setImage] = useState<null | string>(null);
  const [value, setValue] = useState<string>("United States");
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor:
          theme === "light" ? Colors.others.white : Colors.dark._1,
      }}
      contentContainerStyle={{
        gap: 15,
        alignItems: "center",
        // paddingTop: 20,
        paddingHorizontal: 15,
        // paddingBottom: 30,
        height: "100%",
        paddingVertical: 20,
      }}
    >
      <View>
        <SelectProfile image={image} setImage={setImage} />
      </View>

      <View
        style={{
          gap: 20,
          paddingHorizontal: 20,
          paddingVertical: 20,
          width: "100%",
          height: "100%",
        }}
      >
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input
          placeholder="Birth Date"
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
          rightElement={() => {
            return (
              <Pressable>
                <SvgXml xml={MessageIconGray} />
              </Pressable>
            );
          }}
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
            // borderColor: theme === "light" ? Colors.others.white : Colors.others.
            borderRadius: 10,
          }}
          search
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <SvgXml xml={theme === "light" ? DropDownIconGray : DropDownIconDark} />
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
          value={value}
        />
      </View>

      <View style={{ marginTop: "auto", width: "100%" }}>
        <Button
          title="Update"
          onPress={() => {
            router.push("/(auth)/SignIn&SignOut/Create-NewPin")
          }}
          shadowColor={Colors.main.primary._500}
          backgroundColor={Colors.main.primary._500}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default YourProfile;
