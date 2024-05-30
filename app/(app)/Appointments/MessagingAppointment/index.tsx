import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { StatusBar } from "expo-status-bar";
import Typography from "@/constants/Typography";
import { SvgXml } from "react-native-svg";
import DoctorCard from "@/components/DoctorCard";
import {
  WhiteMessageIcon,
  blueMessageIcon,
} from "@/components/UI/icons/blueMessage";
import { backArrowWhite } from "@/components/UI/icons/backArrow";
import { WhiteMenuCircle } from "@/components/UI/icons/WhiteMenuCircle";
import { moreGrayIcon } from "@/components/UI/icons/circleWithDots";
import { MoreIcon } from "@/assets/icons/MoreCircleSvg";

interface PatientType {
  id: string;
  name: string;
  gender: "male" | "female";
  age: string;
  problem: string;
  appointmentMethod: "Messaging" | "voice call" | "video call";
  appointmentDate: string;
  time: string;
  price: string;
  paid: boolean;
}

function AppointmentMessaging() {
  const { theme, changeTheme } = useContext(ThemeContext);
  changeTheme("dark");
  const ios = Platform.OS === "ios";

  const PatientDetails: PatientType[] = [
    {
      id: "23",
      name: "Rhys manners",
      gender: "male",
      age: "23",
      problem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      appointmentMethod: "Messaging",
      appointmentDate: "Today December 22,, 2022",
      time: "16:30 - 1:30 minutes",
      price: "20",
      paid: true,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme === "dark" ? Colors.dark._1 : Colors.others.white,
      }}
    >
      <SafeAreaView style={{ marginBottom: ios ? 10 : 40 }}>
        <StatusBar style={theme === "dark" ? "light" : "dark"} />
      </SafeAreaView>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
            padding: 20,
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.dark._1,
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 30,
              backgroundColor:
                theme === "light" ? Colors.others.white : Colors.dark._1,
            }}
          >
            <SvgXml xml={backArrowWhite} />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                color:
                  theme === "dark" ? Colors.others.white : Colors.others.black,
              }}
            >
              My Appointment
            </Text>
          </Pressable>
          <View>
            <SvgXml xml={theme === "dark" ? WhiteMenuCircle : MoreIcon} />
          </View>
        </View>
        <View style={{ flex: 1, paddingBottom: 30 }}>
          {PatientDetails &&
            PatientDetails.map((data: PatientType) => (
              <View
                key={data?.id}
                style={{
                  flex: 1,
                  justifyContent: "space-around",
                  backgroundColor:
                    theme === "light" ? Colors.others.white : Colors.dark._1,
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <DoctorCard />
                </View>
                <View style={{ gap: 10 }}>
                  <Text
                    style={[
                      Typography.heading._5,
                      {
                        color:
                          theme === "dark"
                            ? Colors?.others?.white
                            : Colors?.grayScale?._900,
                      },
                    ]}
                  >
                    Scheduled appointment
                  </Text>
                  <Text
                    style={[
                      Typography.regular.large,{
                      color:
                        theme === "dark"
                          ? Colors?.others?.white
                          : Colors?.grayScale?._900,
                    }]}
                  >
                    {data.appointmentDate}
                  </Text>
                  <Text
                    style={[
                      Typography.regular.large,{
                      color:
                        theme === "dark"
                          ? Colors?.others?.white
                          : Colors?.grayScale?._900,
                    }]}
                  >
                    {data.time}
                  </Text>
                </View>
                <View style={{ gap: 16 }}>
                  <Text
                    style={[
                      Typography.heading._5,
                      {
                        color:
                          theme === "dark"
                            ? Colors.others.white
                            : Colors.grayScale._900,
                      },
                    ]}
                  >
                    Patient Information
                  </Text>
                  <View style={{ gap: 10 }}>
                    <Text
                      style={[
                        Typography.regular.large,
                        {
                          gap: 8,
                          color: theme === "dark" ? "#E0E0E0" : "#212121",
                        },
                      ]}
                    >
                      Full Name: <Text>{data?.name}</Text>
                    </Text>
                    <Text
                      style={[
                        Typography.regular.large,
                        { color: theme === "dark" ? "#E0E0E0" : "#212121" },
                      ]}
                    >
                      Gender: <Text>{data?.gender}</Text>
                    </Text>
                    <Text
                      style={[
                        Typography.regular.large,
                        { color: theme === "dark" ? "#E0E0E0" : "#212121" },
                      ]}
                    >
                      Age: <Text>{data?.age}</Text>
                    </Text>
                    <Text
                      style={[
                        Typography.regular.large,
                        {
                          color: theme === "dark" ? "#E0E0E0" : "#212121",
                          flexDirection: "row",
                          gap: 10,
                        },
                      ]}
                    >
                      Problem:{" "}
                      <Text>
                        {data?.problem}{" "}
                        <TouchableOpacity>
                          <Text
                            style={[
                              Typography.regular.large,
                                {color: "#246BFD"}
                            ]}
                          >
                            view more
                          </Text>
                        </TouchableOpacity>
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={{ gap: 20 }}>
                  <Text
                    style={[
                      Typography.heading._5,
                      {
                        color:
                          theme === "dark"
                            ? Colors.others.white
                            : Colors.grayScale._900,
                      },
                    ]}
                  >
                    Your Package
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 20,
                      borderRadius: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 30,
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: Colors.transparent.blue,
                          padding: 20,
                          borderRadius: 100,
                        }}
                      >
                        <SvgXml xml={blueMessageIcon} />
                      </View>
                      <View style={{ gap: 5 }}>
                        <Text
                          style={[
                            Typography.heading._5,
                            {
                              color:
                                theme === "dark"
                                  ? Colors.others.white
                                  : Colors.grayScale._900,
                            },
                          ]}
                        >
                          {data.appointmentMethod}
                        </Text>
                        <Text style={[
                        Typography.regular.large,
                        {
                          color: theme === "dark" ? "#E0E0E0" : "#212121",
                          flexDirection: "row",
                          gap: 10,
                        },
                      ]}>Chat message with doctor</Text>
                      </View>
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={[
                          Typography.bold.xLarge,
                          { color: Colors.main.primary._500 },
                        ]}
                      >
                        ${data.price}
                      </Text>
                      <Text style={[
                        Typography.regular.large,
                        {
                          color: theme === "dark" ? "#E0E0E0" : "#212121",
                          flexDirection: "row",
                          gap: 10,
                        },
                      ]}>{data.paid ? "Paid" : "not paid"}</Text>
                    </View>
                  </View>
                </View>

                <Pressable
                  onPress={() =>
                    router.push(
                      "(app)/Appointments/MessagingAppointment/ChatMessaging"
                    )
                  }
                  style={{
                    backgroundColor: Colors.main.primary._500,
                    borderRadius: 100,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      alignSelf: "center",
                      padding: 20,
                      gap: 20,
                    }}
                  >
                    <SvgXml xml={WhiteMessageIcon} />
                    <Text
                      style={[
                        Typography.bold.large,
                        { color: Colors.others.white },
                      ]}
                    >
                      {data?.appointmentMethod}(
                      <Text>Start at {data?.time}</Text>)
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
}

export default AppointmentMessaging;
