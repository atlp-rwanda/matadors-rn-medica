import { EditBlueIcon } from "@/assets/icons/EditBlueIcon";
import { EmptyImageContainer } from "@/assets/icons/EmptyImageContainer";
import Typography from "@/constants/Typography";
import React, { useContext, useState } from "react";
import { Text, View, ScrollView, Pressable, Image, Switch } from "react-native";
import { Svg, SvgXml } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import { LightDivider } from "@/assets/icons/LightDivider";
import OptionListing from "@/components/Profile/OptionListing";
import { Colors } from "@/constants/Colors";
import {
  ChevronRight,
  HelpCenterIcon,
  InviteFriendsIcon,
  LanguageIcon,
  LogoutIcon,
  NotificationIcon,
  PaymentIcon,
  ProfileIcon,
  SecurityIcon,
  ThemeIcon,
} from "@/assets/icons/Profile/Icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { router } from "expo-router";

const index = () => {
  const [image, setImage] = useState<null | string>(null);
  const { theme, changeTheme } = useContext(ThemeContext);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <ScrollView
      style={{ height: "100%", backgroundColor: "white" }}
      contentContainerStyle={{
        gap: 15,
        alignItems: "center",
        // paddingTop: 20,
        paddingHorizontal: 15,
        // paddingBottom: 30,
      }}
    >
      <View style={{ justifyContent: "start", alignItems: "center", gap: 4 }}>
        <View style={{ position: "relative" }}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 140, height: 140, borderRadius: 100 }}
            />
          ) : (
            <SvgXml xml={EmptyImageContainer} />
          )}
          <Pressable
            onPress={pickImage}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          >
            <SvgXml xml={EditBlueIcon} />
          </Pressable>
        </View>

        <Text style={Typography.bold.xxLarge}>Andrew Ainsley</Text>
        <Text style={Typography.semiBold.medium}>+1 111 467 378 399</Text>
      </View>

      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: Colors.grayScale._200,
          marginHorizontal: 24,
        }}
      ></View>

      <View style={{ gap: 20, width: "100%" }}>
        <OptionListing
          onPress={() => {
            router.push("/(app)/Profile/EditProfile");
          }}
          title="Edit Profile"
          icon={() => {
            return <SvgXml xml={ProfileIcon} width={30} />;
          }}
          rightComponent={() => {
            return <SvgXml xml={ChevronRight} width={30} />;
          }}
        />
        <OptionListing
          title="Notification"
          onPress={() => {
            router.push("/(app)/Profile/Notification");
          }}
          icon={() => {
            return <SvgXml xml={NotificationIcon} width={30} />;
          }}
          rightComponent={() => {
            return <SvgXml xml={ChevronRight} width={30} />;
          }}
        />
        <OptionListing
          title="Payment"
          onPress={() => {
            router.push("/(app)/Profile/Payment");
          }}
          icon={() => {
            return <SvgXml xml={PaymentIcon} width={30} />;
          }}
          rightComponent={() => {
            return <SvgXml xml={ChevronRight} width={30} />;
          }}
        />
        <OptionListing
          title="Security"
          onPress={() => {
            router.push("/(app)/Profile/Security");
          }}
          icon={() => {
            return <SvgXml xml={SecurityIcon} width={30} />;
          }}
          rightComponent={() => {
            return <SvgXml xml={ChevronRight} width={30} />;
          }}
        />
        <OptionListing
          title="Language"
          onPress={() => {
            router.push("/(app)/Profile/Languages");
          }}
          icon={() => {
            return <SvgXml xml={LanguageIcon} width={30} />;
          }}
          rightComponent={() => {
            return (
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Text
                  style={[Typography.semiBold.medium]}
                >{`English (US)`}</Text>
                <SvgXml xml={ChevronRight} width={30} />
              </View>
            );
          }}
        />
        <OptionListing
          title="Dark Mode"
          icon={() => {
            return <SvgXml xml={HelpCenterIcon} width={30} />;
          }}
          rightComponent={() => {
            return (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch
                  value={theme === "dark"}
                  onValueChange={() => {
                    const newTheme = theme === "light" ? "dark" : "light";
                    changeTheme(newTheme);
                  }}
                  thumbColor={Colors.others.white}
                  // trackColor={Colors.main.primary._500}
                />
                <SvgXml xml={ChevronRight} width={30} />
              </View>
            );
          }}
        />
        <OptionListing
          title="Help Center"
          onPress={() => {
            router.push("/(app)/Profile/HelpCenter");
          }}
          icon={() => {
            return <SvgXml xml={HelpCenterIcon} width={30} />;
          }}
          rightComponent={() => {
            return <SvgXml xml={ChevronRight} width={30} />;
          }}
        />
        <OptionListing
          title="Invite Friends"
          onPress={() => {
            router.push("/(app)/Profile/InviteFriends");
          }}
          icon={() => {
            return <SvgXml xml={InviteFriendsIcon} width={30} />;
          }}
          rightComponent={() => {
            return <SvgXml xml={ChevronRight} width={30} />;
          }}
        />
        <OptionListing
          title="Logout"
          textColor={Colors.others.red}
          icon={() => {
            return <SvgXml xml={LogoutIcon} width={30} />;
          }}
          // rightComponent={() => {
          //   return <SvgXml xml={ChevronRight} />;
          // }}
        />
      </View>
    </ScrollView>
  );
};

export default index;
