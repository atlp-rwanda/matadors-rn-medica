import { title } from "process";
import React, { useContext } from "react";
import { SvgXml } from "react-native-svg";
import { Pressable, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "@/constants/Typography";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { fullSmallBlueStar } from "@/components/UI/icons/star";
import { circleWithDots } from "@/components/UI/icons/circleWithDots";
import { blueHeart } from "@/components/UI/icons/blueHeart";
import { LeftArrow } from "@/components/UI/Icons";
import { blackHeart } from "@/components/UI/icons/blackHeart";
import { bluePeopleIcon } from "@/components/UI/icons/bluePeople";
import { statisticIcon } from "@/components/UI/icons/statistics";
import { halfTransparentStar } from "@/components/UI/icons/halfTransparentStart";
import { blueMessageIcon } from "@/components/UI/icons/blueMessage";
import { ThemeContext } from "@/ctx/ThemeContext";
import { backArrowBlack, backArrowWhite } from "@/components/UI/icons/backArrow";

export const ReviewerCardComponent = () => {
  const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <View style={{ gap: 10, marginVertical: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View style={{ width: 50, height: 50 }}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 100 }}
              source={require("@/assets/images/jenny_watson.png")}
            />
          </View>
          <Text style={[Typography.bold.large, {color: theme === "dark" ? Colors.others.white : Colors.others.black}]}>Charlotte Hanlin</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View style={styles.ratings}>
            <SvgXml xml={fullSmallBlueStar}/>
            <Text style={[Typography.semiBold.medium,{color: Colors.main.primary._500}]}>5</Text>
          </View>
          <View>
            <SvgXml xml={circleWithDots} />
          </View>
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Text style={{
          color: theme === "dark" ? Colors.others.white : Colors.others.black
        }}>
          Dr. Jenny is very professional in her work and responsive. I have
          consulted and my problem is solved. 😍😍
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 40 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <SvgXml xml={blueHeart}/>
            <Text style={[Typography.medium.small, {
              color: theme === "dark" ? Colors.others.white : Colors.others.black
            }]}>5</Text>
          </View>
          <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}> 6 days ago</Text>
        </View>
      </View>
    </View>
  );
};

const DoctorDetails = () => {
  const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <View style={[styles.container, {backgroundColor: theme === "dark" ? Colors.others.black : Colors.others.white}]}>
      <SafeAreaView>
        <View style={styles.navBar}>
          <View style={styles.leftSide}>
          <Pressable onPress={()=> router.back()}>
              {
                theme === "dark" ? <SvgXml xml={backArrowWhite} />: <SvgXml xml={backArrowBlack} />
              }
          </Pressable>
            <View>
            <Text style={[Typography.heading._4, {color: theme === "dark" ? Colors.others.white : Colors.others.black}]}>Dr.Jenny Watson</Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <SvgXml xml={blackHeart} />
            <SvgXml xml={circleWithDots}/>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.individualCard}>
        <View style={{width: 100, height: 100}}>
          <Image 
          style={{width: "100%", height: "100%"}}
          source={require("@/assets/images/jenny_watson.png")} />
        </View>
        <View style={{ flex: 1 }}>
        <Text style={[styles.drName, Typography.bold.xLarge, {color: theme === "dark" ? Colors.others.white : Colors.others.black}]}>
            Dr. Jenny Watson
          </Text>
          <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}>Immunologists</Text>
            <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}>Christ Hospital in London, UK</Text>
          </View>
        </View>
      </View>
      <View style={styles.appContainer}>
        <View style={{ alignItems: "center", gap: 5 }}>
          <View
            style={{
              backgroundColor: "rgba(36, 107, 253, 0.1)",
              padding: 20,
              borderRadius: 100,
            }}
          >
            <SvgXml xml={bluePeopleIcon}/>
          </View>
          <Text
            style={[
              Typography.bold.xLarge,
              { color: Colors.main.primary._500,  },
            ]}
          >
            5.000+
          </Text>
          <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}>patients</Text>
        </View>
        <View style={{ alignItems: "center", gap: 5 }}>
          <View
            style={{
              backgroundColor: "rgba(36, 107, 253, 0.1)",
              padding: 20,
              borderRadius: 100,
            }}
          >
            <SvgXml xml={statisticIcon}/>
          </View>
          <Text
            style={[
              Typography.bold.xLarge,
              { color: Colors.main.primary._500 },
            ]}
          >
            5.000+
          </Text>
          <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}>years exp...</Text>
        </View>
        <View style={{ alignItems: "center", gap: 5 }}>
          <View
            style={{
              backgroundColor: "rgba(36, 107, 253, 0.1)",
              padding: 20,
              borderRadius: 100,
            }}
          >
            <SvgXml xml={halfTransparentStar}/>
          </View>
          <Text
            style={[
              Typography.bold.xLarge,
              { color: Colors.main.primary._500 },
            ]}
          >
            5.000+
          </Text>
          <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}>rating</Text>
        </View>
        <View style={{ alignItems: "center", gap: 5 }}>
          <View
            style={{
              backgroundColor: "rgba(36, 107, 253, 0.1)",
              padding: 20,
              borderRadius: 100,
            }}
          >
            <SvgXml xml={blueMessageIcon} />
          </View>
          <Text
            style={[Typography.bold.large, { color: Colors.main.primary._500 }]}
          >
            5.000+
          </Text>
          <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}>reviewers</Text>
        </View>
      </View>
      <View style={{ gap: 5 }}>
      <Text style={[Typography.heading._5, {color: theme === "dark" ? Colors.others.white : Colors.others.black}]}>About me</Text>
        <Text style={{lineHeight: 25, color: theme === "dark" ? Colors.others.white : Colors.others.black}}>
          Dr. Jenny Watson is the top most Immunologists specialist in Christ
          Hospital at London. She achived several awards for her wonderful
          contribution in medical field. She is available for private
          consultation.{" "}
          <Text style={{ color: Colors.main.primary._500 }}>view more</Text>
        </Text>
      </View>
      <View style={{ gap: 5 }}>
        <Text style={[Typography.heading._5, {
          color: theme === "dark" ? Colors.others.white : Colors.others.black
        }]}>Working Time</Text>
        <Text style={{color: theme === "dark" ? Colors.others.white : Colors.others.black}}> Monday - Friday, 08.00 AM - 20.00 PM </Text>
      </View>

      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[Typography.heading._5, {
            color: theme === "dark" ? Colors.others.white : Colors.others.black
          }]}>Reviews</Text>
          <Pressable onPress={()=> router.push("/Booking/DoctorRatingAndReview")}>
            <Text
                style={[Typography.heading._5, { color: Colors.main.primary._500 }]}
            >
                See All
            </Text>
          </Pressable>
         
        </View>
        <View>
          <ReviewerCardComponent />
        </View>
      </View>
      <View>
        <Pressable
          style={{
            backgroundColor: Colors.main.primary._500,
            paddingVertical: 20,
            borderRadius: 100,
          }}
        >
          <Text
            style={[
              Typography.bold.medium,
              {
                color: Colors.others.white,
                textAlign: "center",
              },
            ]}
          >
            Book Appointment
          </Text>
        </Pressable>
      </View>
      <StatusBar backgroundColor={"black"} />
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
    padding: 10,
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },

  drName: {
    borderColor:"rgba(83, 83, 83, 0.4)",
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
    alignItems: "center",
    gap: 10,
    borderColor: Colors.main.primary._500,
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});

export default DoctorDetails;
