import React, { useContext } from "react";
import Header from "@/components/UI/Header";
import Modal from "@/components/UI/Modal";
import { Stack, router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import Typography from "@/constants/Typography";
import { SvgXml } from "react-native-svg";
import { WhiteScanner, GreyScanner } from "@/components/Icons/Icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { ThreeDotCircle } from "@/assets/icons/ThreeDotCircle";
import { WhiteThreeDots } from "@/components/UI/icons/WhiteThreeDots";
import { WhiteHeart } from "@/components/UI/icons/WhiteHeart";
import { blackHeart } from "@/components/UI/icons/blackHeart";

export default function BookingLayout() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Stack>
        <Stack.Screen name="reviewSummary" options={{ headerShown: false }} />
        <Stack.Screen
          name="BookingAppointment"
          options={{ header: () => <Header title="Book Appointment" /> }}
        />
        <Stack.Screen
          name="Doctor_details"
          options={{
            header: () => (
              <Header
                title=" Dr.Jenny Watson"
                options={{
                  rightComponent: () => {
                    return (
                      <View style={{ flexDirection: "row", gap: 20 }}>
                        <TouchableOpacity>
                          <SvgXml
                            xml={theme === "dark" ? WhiteHeart : blackHeart}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}}>
                          <SvgXml
                            xml={
                              theme === "dark" ? WhiteThreeDots : ThreeDotCircle
                            }
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  },
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="DoctorRatingAndReview"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="Select-package"
          options={{ header: () => <Header title="Select Package" /> }}
        />
        <Stack.Screen name="Patient-details" options={{ header: () => (
            <Header
              title="Patient Details"
            />
          ), }} />
        <Stack.Screen name="EnterYourPin"  options={{ header: () => (
            <Header
              title="Enter Your PIN"
            />
          ), }}/>
        <Stack.Screen
          name="AddNewCard"
          options={{
            header: () => (
              <Header
                title="Add New Card"
                options={{
                  rightComponent: () => {
                    return (
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            router.push(
                              "(app)/ActionMenu/Booking/QRCodeScanner"
                            )
                          }
                        >
                          <SvgXml
                            xml={theme === "dark" ? WhiteScanner : GreyScanner}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  },
                }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="SelectPayment"
          options={{ header: () => <Header title="Payments" /> }}
        />
      </Stack>
    </>
  );
}
