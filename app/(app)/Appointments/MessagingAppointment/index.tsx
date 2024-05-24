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
} from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { StatusBar } from "expo-status-bar";
import Typography from "@/constants/Typography";
import { SvgXml } from "react-native-svg";
import { circleWithDots } from "@/components/UI/icons/circleWithDots";
import DoctorCard from "@/components/DoctorCard";
import {
  WhiteMessageIcon,
  blueMessageIcon,
} from "@/components/UI/icons/blueMessage";

interface PatientType{
  id: string
  name: string
  gender: "male" | "female"
  age: string
  problem: string,
  appointmentMethod: "Messaging" | "voice call" | "video call"
  appointmentDate:string
  time: string
  price: string
  paid: boolean,
}

function AppointmentMessaging() {
  const { theme, changeTheme } = useContext(ThemeContext);
  changeTheme("light")
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ marginBottom: ios ? 10 : 40 }}>
        <StatusBar style="dark" />
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
            theme === "light"
              ? Colors.others.white
              : Colors.others.black,
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
                theme === "light" ? Colors.others.white : Colors.others.black,
            }}
          >
            <MaterialIcons
              name="arrow-back"
              size={25}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
              }}
            >
              Book Appointment
            </Text>
          </Pressable>
          <View>
            <SvgXml xml={circleWithDots} />
          </View>
        </View>
        <View style={{flex: 1, paddingBottom: 30}}>
          {PatientDetails &&
            PatientDetails.map((data: PatientType) => (
              <View
              key={data?.id}
                style={{
                  flex: 1,
                  justifyContent: "space-around",
                  backgroundColor: 
                    theme === "light"
                      ? Colors.others.white
                      : Colors.others.black,
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
                <View style={{ backgroundColor: "white", gap: 10 }}>
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
                  <Text>{data.appointmentDate}</Text>
                  <Text>{data.time}</Text>
                </View>
                <View>
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
                  <View style={{ backgroundColor: "white", gap: 10 }}>
                    <Text>
                      {" "}
                      Full Name: <Text>{data?.name}</Text>
                    </Text>
                    <Text>
                      Gender: <Text>{data?.gender}</Text>
                    </Text>
                    <Text>
                      Age: <Text>{data?.age}</Text>
                    </Text>
                    <Text>
                      Problem: <Text>{data?.problem}</Text>
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
                        <Text>Chat message with doctor</Text>
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
                      <Text>{data.paid ? "Paid" : "not paid"}</Text>
                    </View>
                  </View>
                </View>

                <Pressable
                onPress={()=> router.push("(app)/Appointments/MessagingAppointment/ChatMessaging")}
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
