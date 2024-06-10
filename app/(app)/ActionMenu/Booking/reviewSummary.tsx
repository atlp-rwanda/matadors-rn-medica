import { Text } from "@/components/Themed";
import {
  LeftArrow,
  masterCardDark,
  masterCardLight,
} from "@/components/UI/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { colors } from "react-native-elements";
import { Mastercard, Mastercarddark } from "@/components/UI/Icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { router } from "expo-router";
import Button from "@/components/UI/Button";
import React from "react";
import { ScrollView } from "react-native";
import HorizontalSeparator from "@/components/UI/HorizontalSeparator";
import PaymentChooseInputCard from "@/components/UI/PaymentChooseContainer/PaymentChooseInputCard";
import SelectPaymentCardListing from "@/components/Profile/SelectedPaymentCardListing";
import { SvgXml } from "react-native-svg";

export default function Reviewsummary() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <ScrollView
        style={{ backgroundColor: "white", height: "100%", flex: 1 }}
        contentContainerStyle={{
          gap: 10,
          flexGrow: 1,
          paddingBottom: 20,
        }}
      >
        <View style={{ paddingHorizontal: 20, gap: 20 }}>
          <View
            style={{
              elevation: 20,
              shadowColor: Colors.grayScale._400,
              flexDirection: "row",
              gap: 15,
              backgroundColor: "white",
              padding: 15,
              borderRadius: 20,
            }}
          >
            <Image
              source={require("@/assets/images/BookingImages/doctor.png")}
            ></Image>

            <View style={{ gap: 10, paddingVertical: 4 }}>
              <Text style={[Typography.bold.xLarge]}>Dr Jenny Watson</Text>
              <HorizontalSeparator color={Colors.grayScale._200} />
              <Text
                style={[
                  Typography.medium.small,
                  { color: Colors.grayScale._800 },
                ]}
              >
                Immunologists
              </Text>
              <Text
                style={[
                  Typography.medium.small,
                  { color: Colors.grayScale._800 },
                ]}
              >
                Christ Hospital in London, UK
              </Text>
            </View>
          </View>

          <View
            style={{
              elevation: 20,
              shadowColor: Colors.grayScale._400,
              gap: 15,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  Typography.medium.medium,
                  { color: Colors.grayScale._700 },
                ]}
              >
                Date & Hour
              </Text>
              <Text
                style={[
                  Typography.semiBold.large,
                  { color: Colors.grayScale._800 },
                ]}
              >
                Dec 23, 2024 | 10:00 AM
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  Typography.medium.medium,
                  { color: Colors.grayScale._700 },
                ]}
              >
                Package
              </Text>
              <Text
                style={[
                  Typography.semiBold.large,
                  { color: Colors.grayScale._800 },
                ]}
              >
                Messaging
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  Typography.medium.medium,
                  { color: Colors.grayScale._700 },
                ]}
              >
                Duration
              </Text>
              <Text
                style={[
                  Typography.semiBold.large,
                  { color: Colors.grayScale._800 },
                ]}
              >
                30 minutes
              </Text>
            </View>
          </View>

          <View
            style={{
              elevation: 20,
              shadowColor: Colors.grayScale._400,
              gap: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  Typography.medium.medium,
                  { color: Colors.grayScale._700 },
                ]}
              >
                Amount
              </Text>
              <Text
                style={[
                  Typography.semiBold.large,
                  { color: Colors.grayScale._800 },
                ]}
              >
                $20
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  Typography.medium.medium,
                  { color: Colors.grayScale._700 },
                ]}
              >
                Duration (30 mins)
              </Text>
              <Text
                style={[
                  Typography.semiBold.large,
                  { color: Colors.grayScale._800 },
                ]}
              >
                1 x $20
              </Text>
            </View>

            <HorizontalSeparator />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  Typography.medium.medium,
                  { color: Colors.grayScale._700 },
                ]}
              >
                Total
              </Text>
              <Text
                style={[
                  Typography.semiBold.large,
                  { color: Colors.grayScale._800 },
                ]}
              >
                $20
              </Text>
            </View>
          </View>

          <SelectPaymentCardListing
            icon={() => {
              return (
                <SvgXml
                  xml={theme === "light" ? masterCardLight : masterCardDark}
                />
              );
            }}
            title="•••• •••• •••• •••• 4679"
          />
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: "auto" }}>
          <Button
            title="Next"
            onPress={() => router.push("(app)/ActionMenu/Booking/EnterYourPin")}
            style={{}}
          />
        </View>
      </ScrollView>
    </>
  );
}
