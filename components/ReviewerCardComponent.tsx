import React, { useContext } from "react";
import Typography from "@/constants/Typography";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { blueHeart, fullyColoredBlueHeart } from "./UI/icons/blueHeart";
import { fullSmallBlueStar } from "./UI/icons/star";
import { moreGrayIcon } from "./UI/icons/circleWithDots";
import { Colors } from "@/constants/Colors";
import Chips from "./UI/ChipsComponent";
import { ThemeContext } from "@/ctx/ThemeContext";

interface ReviewType {
  id: string;
  name: string;
  image: any;
  reviewMsg: string;
  likes: number;
  stars: string;
}

const unLike = <SvgXml xml={blueHeart} />;

const ReviewerCardComponent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const [isLike, setIsLike] = useState(false);
  function handleLike() {
    setIsLike(!isLike);
  }

  const reviewData: ReviewType[] = [
    {
      id: "1",
      name: "Charlot Hanlin",
      image: require("../assets/images/jenny_watson.png"),
      reviewMsg:
        "    Dr. Jenny is very professional in her work and responsive. I haveconsulted and my problem is solved. 😍😍",
      likes: 5,
      stars: "4",
    },
    {
      id: "2",
      name: "Charlot Hanlin",
      image: require("../assets/images/jenny_watson.png"),
      reviewMsg:
        "Dr. Jenny is very professional in her work and responsive. I haveconsulted and my problem is solved. 😍😍",
      likes: 5,
      stars: "4",
    },
    {
      id: "3",
      name: "Charlot Hanlin",
      image: require("../assets/images/jenny_watson.png"),
      reviewMsg:
        "Dr. Jenny is very professional in her work and responsive. I haveconsulted and my problem is solved. 😍😍",
      likes: 5,
      stars: "4",
    },
    {
      id: "4",
      name: "Charlot Hanlin",
      image: require("../assets/images/jenny_watson.png"),
      reviewMsg:
        "Dr. Jenny is very professional in her work and responsive. I haveconsulted and my problem is solved. 😍😍",
      likes: 5,
      stars: "3",
    },
    {
      id: "5",
      name: "Charlot Hanlin",
      image: require("../assets/images/jenny_watson.png"),
      reviewMsg:
        "Dr. Jenny is very professional in her work and responsive. I haveconsulted and my problem is solved. 😍😍",
      likes: 5,
      stars: "4",
    },
    {
      id: "6",
      name: "Charlot Hanlin",
      image: require("../assets/images/jenny_watson.png"),
      reviewMsg:
        "Dr. Jenny is very professional in her work and responsive. I haveconsulted and my problem is solved. 😍😍",
      likes: 5,
      stars: "4",
    },
    {
      id: "7",
      name: "Charlot Hanlin",
      image: require("../assets/images/jenny_watson.png"),
      reviewMsg:
        "Dr. Jenny is very professional in her work and responsive. I haveconsulted and my problem is solved. 😍😍",
      likes: 5,
      stars: "4",
    },
  ];
  return (
    <>
      {reviewData &&
        reviewData.map((item, index) => {
          return (
            <View key={index} style={{ gap: 10, marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View style={{ width: 50, height: 50 }}>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                      }}
                      source={item?.image}
                    />
                  </View>
                  <Text
                    style={[
                      Typography.bold.large,
                      { color: theme === "dark" ? "white" : "black" },
                    ]}
                  >
                    {item?.name}
                  </Text>
                  <Text
                    style={[
                      Typography.bold.large,
                      { color: theme === "dark" ? "white" : "black" },
                    ]}
                  >
                    {item?.name}
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
                  <Chips
                    text={item?.stars}
                    type="border"
                    size="medium"
                    leftIcon={() => <SvgXml xml={fullSmallBlueStar} />}
                    style={{ marginLeft: 10 }}
                  />
                  <View>
                    <SvgXml xml={moreGrayIcon} />
                  </View>
                </View>
              </View>
              <View style={{ gap: 10 }}>
                <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                  {item?.reviewMsg}
                </Text>
                <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                  {item?.reviewMsg}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 40,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <Pressable onPress={handleLike}>
                      <SvgXml
                        xml={isLike ? blueHeart : fullyColoredBlueHeart}
                      />
                    </Pressable>
                    <Text
                      style={[
                        Typography.medium.small,
                        { color: theme === "dark" ? "white" : "black" },
                      ]}
                    >
                      {item?.likes}
                    </Text>
                    <Text
                      style={[
                        Typography.medium.small,
                        { color: theme === "dark" ? "white" : "black" },
                      ]}
                    >
                      {item?.likes}
                    </Text>
                  </View>
                  <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                    6 days ago
                  </Text>
                  <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                    6 days ago
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
    </>
  );
};

const styles = StyleSheet.create({
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

export default ReviewerCardComponent;
