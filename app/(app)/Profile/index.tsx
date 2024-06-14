import { EditBlueIcon } from "@/assets/icons/EditBlueIcon";
import {
  EmptyImageContainer,
  EmptyImageContainerDark,
} from "@/assets/icons/EmptyImageContainer";
import Typography from "@/constants/Typography";
import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
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
import SelectProfile from "@/components/UI/SelectProfile";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { fetchPatientData, getPatientData } from "@/helper/LoggedInUser";

const index = () => {
  const [session, setSession] = useState<Session | null>(null);
  const { theme, changeTheme } = useContext(ThemeContext);
  const [image, setImage] = useState<null | string>(null);

  const [userData, setUserData] = useState<any[]>([]);
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    getPatientData(supabase, setUserData);
  }, []);

  useEffect(() => {
    const id: string = userData?.id;
    if (id) {
      fetchPatientData(id, setPatientData);
    }
  }, [userData]);

  return (
    <View>
      {patientData && userData && (
        <FlatList
          data={patientData}
          renderItem={({ item }) => (
            <View
              style={{
                height: "100%",
                backgroundColor:
                  theme === "light" ? Colors.others.white : Colors.dark._1,
              }}
            >
              <View
                style={{
                  justifyContent: "start",
                  alignItems: "center",
                  gap:10,
                }}
              >
                <SelectProfile image={item?.image} setImage={setImage} />
                <Text
                  style={[
                    Typography.bold.xxLarge,
                    {
                      color:
                        theme === "light"
                          ? Colors.grayScale._900
                          : Colors.others.white,
                    },
                  ]}
                >
                  {item?.first_name + " " + item?.last_name}
                </Text>
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
                  marginBottom: 20
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
                        xml={
                          theme === "light" ? ChevronRight : ChevronRightDark
                        }
                        width={30}
                      />
                    );
                  }}
                  textColor={
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
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
                          theme === "light"
                            ? NotificationIcon
                            : NotificationIconDark
                        }
                        width={30}
                      />
                    );
                  }}
                  rightComponent={() => {
                    return (
                      <SvgXml
                        xml={
                          theme === "light" ? ChevronRight : ChevronRightDark
                        }
                        width={30}
                      />
                    );
                  }}
                  textColor={
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
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
                        xml={
                          theme === "light" ? ChevronRight : ChevronRightDark
                        }
                        width={30}
                      />
                    );
                  }}
                  textColor={
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
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
                        xml={
                          theme === "light" ? SecurityIcon : SecurityIconDark
                        }
                        width={30}
                      />
                    );
                  }}
                  rightComponent={() => {
                    return (
                      <SvgXml
                        xml={
                          theme === "light" ? ChevronRight : ChevronRightDark
                        }
                        width={30}
                      />
                    );
                  }}
                  textColor={
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
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
                        xml={
                          theme === "light" ? LanguageIcon : LanguageIconDark
                        }
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
                          xml={
                            theme === "light" ? ChevronRight : ChevronRightDark
                          }
                          width={30}
                        />
                      </View>
                    );
                  }}
                  textColor={
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
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
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
                  }
                  rightComponent={() => {
                    return (
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Switch
                          active={theme === "dark"}
                          onPress={() => {
                            const newTheme =
                              theme === "light" ? "dark" : "light";
                            changeTheme(newTheme);
                            console.log("Changed theme");
                          }}
                        />
                        <SvgXml
                          xml={
                            theme === "light" ? ChevronRight : ChevronRightDark
                          }
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
                        xml={
                          theme === "light"
                            ? HelpCenterIcon
                            : HelpCenterIconDark
                        }
                        width={30}
                      />
                    );
                  }}
                  rightComponent={() => {
                    return (
                      <SvgXml
                        xml={
                          theme === "light" ? ChevronRight : ChevronRightDark
                        }
                        width={30}
                      />
                    );
                  }}
                  textColor={
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
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
                          theme === "light"
                            ? InviteFriendsIcon
                            : InviteFriendsIconDark
                        }
                        width={30}
                      />
                    );
                  }}
                  rightComponent={() => {
                    return (
                      <SvgXml
                        xml={
                          theme === "light" ? ChevronRight : ChevronRightDark
                        }
                        width={30}
                      />
                    );
                  }}
                  textColor={
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white
                  }
                />
                <OptionListing
                  title="Logout"
                  textColor={Colors.others.red}
                  icon={() => {
                    return <SvgXml xml={LogoutIcon} width={30} />;
                  }}
                  textColor={Colors.status.error}
                />
              </View>
            </View>
          )}
          style={{
            height: "100%",
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.dark._1,
          }}
          contentContainerStyle={{
            gap: 15,
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        />
      )}
    </View>
  );
};

export default index;

