import React, { useContext } from "react";
import { StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "@/constants/Typography";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { SvgXml } from "react-native-svg";
import ReviewerCardComponent from "@/components/ReviewerCardComponent";
import { LeftArrow } from "@/components/UI/Icons";
import { moreGrayIcon } from "@/components/UI/icons/circleWithDots";
import {
  fullSmallBlueStar,
  fullSmallWhiteStar,
} from "@/components/UI/icons/star";
import Chips from "@/components/UI/ChipsComponent";
import { backArrowBlack, backArrowWhite } from "@/constants/icon";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "@/ctx/ThemeContext";

const DoctorRatingAndReview = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        gap: 20,
        backgroundColor:
          theme === "dark" ? Colors.dark._1 : Colors.others.white,
      }}
    >
      <SafeAreaView>
        <View style={styles.navBar}>
          <View style={styles.leftSide}>
            <Pressable onPress={() => router.back()}>
              <SvgXml
                xml={theme === "dark" ? backArrowWhite : backArrowBlack}
              />
            </Pressable>
            <View>
              <Text
                style={[
                  Typography.heading._4,
                  { color: theme === "dark" ? "white" : "black" },
                ]}
              >
                4.8 (4,942 reviews)
              </Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <SvgXml xml={moreGrayIcon} />
          </View>
        </View>
      </SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Chips
            text="All"
            type="filled"
            size="medium"
            leftIcon={() => <SvgXml xml={fullSmallWhiteStar} />}
          />
          <Chips
            text="5"
            type="border"
            size="medium"
            leftIcon={() => <SvgXml xml={fullSmallBlueStar} />}
            style={{ marginLeft: 10 }}
          />
          <Chips
            text="4"
            type="border"
            size="medium"
            leftIcon={() => <SvgXml xml={fullSmallBlueStar} />}
            style={{ marginLeft: 10 }}
          />
          <Chips
            text="3"
            type="border"
            size="medium"
            leftIcon={() => <SvgXml xml={fullSmallBlueStar} />}
            style={{ marginLeft: 10 }}
          />
          <Chips
            text="2"
            type="border"
            size="medium"
            leftIcon={() => <SvgXml xml={fullSmallBlueStar} />}
            style={{ marginLeft: 10 }}
          />
          <Chips
            text="1"
            type="border"
            size="medium"
            leftIcon={() => <SvgXml xml={fullSmallBlueStar} />}
            style={{ marginLeft: 10 }}
          />
        </ScrollView>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ReviewerCardComponent />
        </ScrollView>
      </View>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },

  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  individualCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
    alignContent: "center",
    margin: 10,
    width: "100%",
    padding: 20,
    borderRadius: 10,
  },

  drName: {
    borderColor: Colors.others.black,
    borderBottomWidth: 0.5,
    paddingBottom: 20,
  },
  appContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  ratings: {
    flexDirection: "row",
    gap: 10,
    borderColor: Colors.main.primary._500,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});

export default DoctorRatingAndReview;
