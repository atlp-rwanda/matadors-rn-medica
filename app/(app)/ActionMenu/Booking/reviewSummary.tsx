import { Text } from "@/components/Themed";
import { LeftArrow } from "@/components/UI/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useContext, useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Pressable } from "react-native";
import { colors } from "react-native-elements";
import { Mastercard, Mastercarddark } from "@/components/UI/Icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { router } from "expo-router";
import React from "react";

export default function Reviewsummary() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <View style={theme === "dark" ? styles.containerdark : styles.container}>
        <Pressable onPress={()=> router.back()}
        style={theme === "dark" ? styles.headerdark : styles.header}>
          <LeftArrow
            fillColor={
              theme === "dark" ? Colors.others.white : Colors.grayScale._900
            }
          />
          <Text
            style={[
              Typography.heading._4,
              {
                color:
                  theme === "dark"
                    ? Colors.others.white
                    : Colors.grayScale._900,
              },
            ]}
          >
            Review Summary
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            width: 380,
            borderRadius: 24,
            backgroundColor:
              theme === "dark" ? Colors.dark._2 : Colors.others.white,
            gap: 16,
          }}
        >
          <Image
            source={require("@/assets/images/BookingImages/doctor.png")}
            style={{ width: 110, height: 110 }}
          ></Image>
          <View
            style={{
              justifyContent: "space-around",
              backgroundColor: "transparent",
            }}
          >
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
              Dr Jenny Watson
            </Text>
            <View
              style={{
                width: 222,
                height: 1,
                backgroundColor:
                  theme === "dark" ? Colors.dark._3 : Colors.grayScale._200,
              }}
            ></View>
            <Text
              style={[
                Typography.medium.small,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              Immunologist
            </Text>
            <Text
              style={[
                Typography.medium.small,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              Christ hospital London,uk
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 380,
            padding: 24,
            gap: 20,
            borderRadius: 20,
            backgroundColor:
              theme === "dark" ? Colors.dark._2 : Colors.others.white,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color:
                    theme === "dark"
                      ? Colors.grayScale._300
                      : Colors.grayScale._700,
                },
              ]}
            >
              Date & Hour
            </Text>
            <Text
              style={[
                Typography.semiBold.large,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              Dec 23, 2024 | 10:00 AM
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color:
                    theme === "dark"
                      ? Colors.grayScale._300
                      : Colors.grayScale._700,
                },
              ]}
            >
              Packaging
            </Text>
            <Text
              style={[
                Typography.semiBold.large,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              Messaging
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color:
                    theme === "dark"
                      ? Colors.grayScale._300
                      : Colors.grayScale._700,
                },
              ]}
            >
              Duration
            </Text>
            <Text
              style={[
                Typography.semiBold.large,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              30 minutes
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 380,
            padding: 24,
            gap: 20,
            borderRadius: 20,
            backgroundColor:
              theme === "dark" ? Colors.dark._2 : Colors.others.white,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color:
                    theme === "dark"
                      ? Colors.grayScale._300
                      : Colors.grayScale._700,
                },
              ]}
            >
              Amount
            </Text>
            <Text
              style={[
                Typography.semiBold.large,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              $20
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color:
                    theme === "dark"
                      ? Colors.grayScale._300
                      : Colors.grayScale._700,
                },
              ]}
            >
              Duration(30 mins)
            </Text>
            <Text
              style={[
                Typography.semiBold.large,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              1 * $20
            </Text>
          </View>

          <View
            style={{
              width: 332,
              height: 1,
              backgroundColor:
                theme === "dark" ? Colors.dark._3 : Colors.grayScale._200,
            }}
          ></View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[
                Typography.medium.medium,
                {
                  color:
                    theme === "dark"
                      ? Colors.grayScale._300
                      : Colors.grayScale._700,
                },
              ]}
            >
              Total
            </Text>
            <Text
              style={[
                Typography.semiBold.large,
                {
                  color:
                    theme === "dark"
                      ? Colors.others.white
                      : Colors.grayScale._800,
                },
              ]}
            >
              $20
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 380,
            padding: 24,
            gap: 20,
            borderRadius: 20,
            backgroundColor:
              theme === "dark" ? Colors.dark._2 : Colors.others.white,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              {theme === "dark" ? <Mastercarddark /> : <Mastercard />}
            </View>
            <Text
              style={[
                Typography.heading._5,
                {
                  color:
                    theme === "dark"
                      ? Colors.grayScale._300
                      : Colors.grayScale._900,
                },
              ]}
            >
              •••• •••• •••• •••• 4679
            </Text>
            <Text
              style={[
                Typography.bold.large,
                { color: Colors.main.primary._500 },
              ]}
            >
              change
            </Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={()=> router.push("(app)/ActionMenu/Booking/EnterYourPin")}
          style={{
            width: 380,
            height: 58,
            borderRadius: 100,
            backgroundColor: Colors.main.primary._500,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[Typography.bold.large, { color: Colors.others.white }]}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  itemcontainer: {},

  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "transparent",
  },
  container: {
    justifyContent: "space-around",
    gap: 20,
    alignItems: "center",
    backgroundColor: Colors.grayScale._50,
    flex: 1,
    padding: 20,
  },

  headerdark: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "transparent",
  },
  containerdark: {
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: Colors.dark._1,
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
});
