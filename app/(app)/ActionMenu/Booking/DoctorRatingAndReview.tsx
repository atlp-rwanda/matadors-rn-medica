import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "@/constants/Typography";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { SvgXml } from "react-native-svg";
import ReviewerCardComponent from "@/components/ReviewerCardComponent";
import { fullSmallBlueStar, fullSmallWhiteStar } from "@/components/UI/icons/star";
import { backArrowWhite, moreBlackIcon, moreWhiteIcon } from "@/constants/icon";
import { ThemeContext } from "@/ctx/ThemeContext";
import { StatusBar } from "expo-status-bar";



const DoctorRatingAndReview = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <View style={{
      flex: 1,
      padding: 24,
      gap: 20,
      backgroundColor: theme === "dark"? Colors.dark._1: Colors.others.white
    }}>
      <SafeAreaView>
        <View style={styles.navBar}>
          <View style={styles.leftSide}>
            <Pressable onPress={() => router.back()}>
            <SvgXml xml={theme === "dark"? backArrowWhite:backArrowWhite } />
            </Pressable>
            <View>
              <Text style={[Typography.heading._4, {color: theme==="dark"? "white":"black" }]}>4.8 (4,942 reviews)</Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <SvgXml xml={theme === "dark" ? moreWhiteIcon: moreBlackIcon} />
          </View>
        </View>
      </SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center", backgroundColor: Colors.main.primary._500 }]}
          >
            <SvgXml xml={fullSmallWhiteStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: theme ===  "dark"?Colors.others.white: Colors.others.black },
              ]}
            >
              All
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
          <View
            style={[styles.ratings, { marginRight: 10, alignItems: "center" }]}
          >
            <SvgXml xml={fullSmallBlueStar} />
            <Text
              style={[
                Typography.semiBold.medium,
                { color: Colors.main.primary._500 },
              ]}
            >
              5
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ReviewerCardComponent />
        </ScrollView>
      </View>
      <StatusBar style={theme==="dark"? "light":"dark"} />
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
