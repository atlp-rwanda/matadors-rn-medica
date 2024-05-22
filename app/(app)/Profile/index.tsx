import { EditBlueIcon } from "@/assets/icons/EditBlueIcon";
import {
  EmptyImageContainer,
  EmptyImageContainerDark,
} from "@/assets/icons/EmptyImageContainer";
import Typography from "@/constants/Typography";
import React, { useContext, useState } from "react";
import { Text, View, ScrollView, Pressable, Image } from "react-native";
import { Svg, SvgXml } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import { LightDivider } from "@/assets/icons/LightDivider";
import OptionListing from "@/components/Profile/OptionListing";
import { Colors } from "@/constants/Colors";
import {
  ChevronRight,
  ChevronRightDark,
  HelpCenterIcon,
  HelpCenterIconDark,
  InviteFriendsIcon,
  InviteFriendsIconDark,
  LanguageIcon,
  LanguageIconDark,
  LogoutIcon,
  NotificationIcon,
  NotificationIconDark,
  PaymentIcon,
  PaymentIconDark,
  ProfileIcon,
  ProfileIconDark,
  SecurityIcon,
  SecurityIconDark,
  ThemeIcon,
  ThemeIconDark,
} from "@/assets/icons/Profile/Icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { router } from "expo-router";
import Switch from "@/components/UI/Switch";

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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

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
            <>
              {theme === "light" ? (
                <SvgXml xml={EmptyImageContainer} />
              ) : (
                <SvgXml xml={EmptyImageContainerDark} />
              )}
            </>
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

        <Text
          style={[
            Typography.bold.xxLarge,
            {
              color:
                theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            },
          ]}
        >
          Andrew Ainsley
        </Text>
        <Text
          style={[
            Typography.semiBold.medium,
            {
              color:
                theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            },
          ]}
        >
          +1 111 467 378 399
        </Text>
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
            return (
              <SvgXml
                xml={theme === "light" ? ProfileIcon : ProfileIconDark}
                width={30}
              />
            );
          }}
          rightComponent={() => {
            return (
              <SvgXml
                xml={theme === "light" ? ChevronRight : ChevronRightDark}
                width={30}
              />
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
        />
        <OptionListing
          title="Notification"
          onPress={() => {
            router.push("/(app)/Profile/Notification");
          }}
          icon={() => {
            return (
              <SvgXml
                xml={
                  theme === "light" ? NotificationIcon : NotificationIconDark
                }
                width={30}
              />
            );
          }}
          rightComponent={() => {
            return (
              <SvgXml
                xml={theme === "light" ? ChevronRight : ChevronRightDark}
                width={30}
              />
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
        />
        <OptionListing
          title="Payment"
          onPress={() => {
            router.push("/(app)/Profile/Payment");
          }}
          icon={() => {
            return (
              <SvgXml
                xml={theme === "light" ? PaymentIcon : PaymentIconDark}
                width={30}
              />
            );
          }}
          rightComponent={() => {
            return (
              <SvgXml
                xml={theme === "light" ? ChevronRight : ChevronRightDark}
                width={30}
              />
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
        />
        <OptionListing
          title="Security"
          onPress={() => {
            router.push("/(app)/Profile/Security");
          }}
          icon={() => {
            return (
              <SvgXml
                xml={theme === "light" ? SecurityIcon : SecurityIconDark}
                width={30}
              />
            );
          }}
          rightComponent={() => {
            return (
              <SvgXml
                xml={theme === "light" ? ChevronRight : ChevronRightDark}
                width={30}
              />
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
        />
        <OptionListing
          title="Language"
          onPress={() => {
            router.push("/(app)/Profile/Languages");
          }}
          icon={() => {
            return (
              <SvgXml
                xml={theme === "light" ? LanguageIcon : LanguageIconDark}
                width={30}
              />
            );
          }}
          rightComponent={() => {
            return (
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Text
                  style={[
                    Typography.semiBold.medium,
                    {
                      color:
                        theme === "light"
                          ? Colors.grayScale._900
                          : Colors.others.white,
                    },
                  ]}
                >{`English (US)`}</Text>
                <SvgXml
                  xml={theme === "light" ? ChevronRight : ChevronRightDark}
                  width={30}
                />
              </View>
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
        />
        <OptionListing
          title="Dark Mode"
          icon={() => {
            return (
              <SvgXml
                xml={theme === "light" ? ThemeIcon : ThemeIconDark}
                width={30}
              />
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
          rightComponent={() => {
            return (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch
                  active={theme === "dark"}
                  onPress={() => {
                    const newTheme = theme === "light" ? "dark" : "light";
                    changeTheme(newTheme);
                  }}
                />
                <SvgXml
                  xml={theme === "light" ? ChevronRight : ChevronRightDark}
                  width={30}
                />
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
            return (
              <SvgXml
                xml={theme === "light" ? HelpCenterIcon : HelpCenterIconDark}
                width={30}
              />
            );
          }}
          rightComponent={() => {
            return (
              <SvgXml
                xml={theme === "light" ? ChevronRight : ChevronRightDark}
                width={30}
              />
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
        />
        <OptionListing
          title="Invite Friends"
          onPress={() => {
            router.push("/(app)/Profile/InviteFriends");
          }}
          icon={() => {
            return (
              <SvgXml
                xml={
                  theme === "light" ? InviteFriendsIcon : InviteFriendsIconDark
                }
                width={30}
              />
            );
          }}
          rightComponent={() => {
            return (
              <SvgXml
                xml={theme === "light" ? ChevronRight : ChevronRightDark}
                width={30}
              />
            );
          }}
          textColor={
            theme === "light" ? Colors.grayScale._900 : Colors.others.white
          }
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
          textColor={Colors.status.error}
        />
      </View>
    </ScrollView>
  );
};

export default index;
