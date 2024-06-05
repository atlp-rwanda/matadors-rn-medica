import React, { useContext } from "react";
import { SvgXml } from "react-native-svg";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import Typography from "@/constants/Typography";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { fullSmallBlueStar } from "@/components/UI/icons/star";
import { circleWithDots } from "@/components/UI/icons/circleWithDots";
import { blueHeart } from "@/components/UI/icons/blueHeart";
import { bluePeopleIcon } from "@/components/UI/icons/bluePeople";
import { statisticIcon } from "@/components/UI/icons/statistics";
import { halfTransparentStar } from "@/components/UI/icons/halfTransparentStart";
import { blueMessageIcon } from "@/components/UI/icons/blueMessage";
import { ThemeContext } from "@/ctx/ThemeContext";
import { WhiteThreeDots } from "@/components/UI/icons/WhiteThreeDots";

export const ReviewerCardComponent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [likes, setLikes] = React.useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };



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
              source={require("@/assets/images/Charly.png")}
            />
          </View>
          <Text
            style={[
              Typography.bold.large,
              {
                color: theme === "dark" ? Colors.others.white : "#212121",
              },
            ]}
          >
            Charlotte Hanlin
          </Text>
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
          <View>
            <TouchableOpacity>
              <SvgXml
                xml={theme === "dark" ? WhiteThreeDots : circleWithDots}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Text
          style={[
            Typography.medium.medium,
            {
              color: theme === "dark" ? Colors.others.white : "#212121",
              letterSpacing: 0.2,
              lineHeight: 20,
            },
          ]}
        >
          Dr. Jenny is very professional in her work and responsive. I have
          consulted and my problem is solved. 😍😍
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 40 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <TouchableOpacity onPress={handleLikes}>
              <SvgXml xml={blueHeart} />
            </TouchableOpacity>

            <Text
              style={[
                Typography.medium.small,
                {
                  color: theme === "dark" ? Colors.others.white : "#212121",
                },
              ]}
            >
              {likes}
            </Text>
          </View>
          <Text
            style={{
              color: theme === "dark" ? Colors.others.white : "#212121",
            }}
          >
            6 days ago
          </Text>
        </View>
      </View>
    </View>
  );
};

const DoctorDetails = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? "#181A20" : Colors.others.white,
      }}
    >
      <ScrollView>
        <View style={[styles.container]}>
          <StatusBar backgroundColor={theme === "dark" ? "light" : "dark"} />

          <View
            style={[
              styles.individualCard,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
            ]}
          >
            <View style={{ width: 100, height: 100 }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/images/jenny_watson.png")}
              />
            </View>

            <View>
              <Text
                style={[
                  styles.drName,
                  Typography.bold.xLarge,
                  {
                    color: theme === "dark" ? Colors.others.white : "#212121",
                  },
                ]}
              >
                Dr. Jenny Watson
              </Text>

              <View style={{ flex: 1, justifyContent: "space-around" }}>
                <Text
                  style={[
                    Typography.medium.small,
                    {
                      color: theme === "dark" ? Colors.others.white : "#212121",
                    },
                  ]}
                >
                  Immunologists
                </Text>
                <Text
                  style={[
                    Typography.medium.small,
                    {
                      color: theme === "dark" ? Colors.others.white : "#212121",
                    },
                  ]}
                >
                  Christ Hospital in London, UK
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.appContainer]}>
            <View style={{ alignItems: "center", gap: 8 }}>
              <View
                style={{
                  backgroundColor: "rgba(36, 107, 253, 0.1)",
                  borderRadius: 100,
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                }}
              >
                <SvgXml xml={bluePeopleIcon} />
              </View>
              <Text
                style={[
                  Typography.bold.xLarge,
                  { color: Colors.main.primary._500 },
                ]}
              >
                5.000+
              </Text>
              <Text
                style={{
                  color: theme === "dark" ? Colors.others.white : "#212121",
                }}
              >
                patients
              </Text>
            </View>

            <View style={{ alignItems: "center", gap: 8 }}>
              <View
                style={{
                  backgroundColor: "rgba(36, 107, 253, 0.1)",
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  borderRadius: 100,
                }}
              >
                <SvgXml xml={statisticIcon} />
              </View>
              <Text
                style={[
                  Typography.bold.xLarge,
                  { color: Colors.main.primary._500 },
                ]}
              >
                5.000+
              </Text>
              <Text
                style={{
                  color: theme === "dark" ? Colors.others.white : "#212121",
                }}
              >
                years exp...
              </Text>
            </View>

            <View style={{ alignItems: "center", gap: 5 }}>
              <View
                style={{
                  backgroundColor: "rgba(36, 107, 253, 0.1)",
                  borderRadius: 100,
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                }}
              >
                <SvgXml xml={halfTransparentStar} />
              </View>
              <Text
                style={[
                  Typography.bold.xLarge,
                  { color: Colors.main.primary._500 },
                ]}
              >
                5.000+
              </Text>
              <Text
                style={{
                  color: theme === "dark" ? Colors.others.white : "#212121",
                }}
              >
                rating
              </Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <View
                style={{
                  backgroundColor: "rgba(36, 107, 253, 0.1)",
                  borderRadius: 100,
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                }}
              >
                <SvgXml xml={blueMessageIcon} />
              </View>
              <Text
                style={[
                  Typography.bold.large,
                  { color: Colors.main.primary._500 },
                ]}
              >
                5.000+
              </Text>
              <Text
                style={{
                  color: theme === "dark" ? Colors.others.white : "#212121",
                }}
              >
                reviewers
              </Text>
            </View>
          </View>

          <View style={{ gap: 8 }}>
            <Text
              style={[
                Typography.heading._5,
                {
                  color: theme === "dark" ? Colors.others.white : "#212121",
                },
              ]}
            >
              About me
            </Text>
            <Text
              style={[
                Typography.medium.medium,
                {
                  lineHeight: 22,
                  color: theme === "dark" ? Colors.others.white : "#212121",
                  letterSpacing: 0.2,
                },
              ]}
            >
              Dr. Jenny Watson is the top most Immunologists specialist in
              Christ Hospital at London. She achived several awards for her
              wonderful contribution in medical field. She is available for
              private consultation.
              <Text style={{ color: Colors.main.primary._500 }}>view more</Text>
            </Text>
          </View>

          <View style={{ gap: 8 }}>
            <Text
              style={[
                Typography.heading._5,
                {
                  color: theme === "dark" ? Colors.others.white : "#212121",
                },
              ]}
            >
              Working Time
            </Text>
            <Text
              style={{
                color: theme === "dark" ? Colors.others.white : "#212121",
              }}
            >
              Monday - Friday, 08.00 AM - 20.00 PM
            </Text>
          </View>

          <View style={{ gap: 10 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={[
                  Typography.heading._5,
                  {
                    color: theme === "dark" ? Colors.others.white : "#212121",
                  },
                ]}
              >
                Reviews
              </Text>
              <Pressable
                onPress={() =>
                  router.push("/ActionMenu/Booking/DoctorRatingAndReview")
                }
              >
                <Text
                  style={[
                    Typography.heading._5,
                    { color: Colors.main.primary._500 },
                  ]}
                >
                  See All
                </Text>
              </Pressable>
            </View>

            <View>
              <ReviewerCardComponent />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          borderWidth: 1,
          width: 395,
          height: 118,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 24,
          paddingBottom: 36,
          gap: 24,
          backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
          borderColor: theme === "dark" ? "#35383F" : "#F5F5F5",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        <Pressable
          onPress={() => router.push("/ActionMenu/Booking/BookingAppointment")}
          style={{
            backgroundColor: Colors.main.primary._500,
            paddingVertical: 20,
            borderRadius: 100,
            shadowColor: "#246bFD",
            elevation: 7,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 0,
    gap: 28,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
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
    gap: 20,
    alignContent: "center",
    padding: 10,
    borderRadius: 10,
  },

  drName: {
    borderColor: "rgba(83, 83, 83, 0.4)",
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
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
});

export default DoctorDetails;