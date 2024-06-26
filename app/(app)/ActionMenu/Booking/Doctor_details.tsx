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
import { useEffect,useState } from "react";
import { View } from "react-native";
import Typography from "@/constants/Typography";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { router,useLocalSearchParams, useNavigation } from "expo-router";
import { fullSmallBlueStar } from "@/components/UI/icons/star";
import { moreGrayIcon } from "@/components/UI/icons/circleWithDots";
import { blueHeart } from "@/components/UI/icons/blueHeart";
import { bluePeopleIcon } from "@/components/UI/icons/bluePeople";
import { statisticIcon } from "@/components/UI/icons/statistics";
import { halfTransparentStar } from "@/components/UI/icons/halfTransparentStart";
import { blueMessageIcon } from "@/components/UI/icons/blueMessage";
import { ThemeContext } from "@/ctx/ThemeContext";
import { WhiteThreeDots } from "@/components/UI/icons/WhiteThreeDots";
import Button from "@/components/UI/Button";
import { supabase } from "@/lib/supabase";
import HeaderComponent from "@/components/HeaderComponent";

interface Doctor{
    id: number,
    first_name: string,
    last_name: string,
    hospital_name: string,
    rate: string,
    review: string,
    specialization: string,
  about: string,
  image:string
}

export const ReviewerCardComponent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [likes, setLikes] = React.useState(0);
  const [doctor,setDoctors]=useState<Doctor|null>(null)
  const { id } = useLocalSearchParams()
  console.log("this is id:",id)
 const tableName='doctors'
 useEffect(() => {
        async function fetchData() {
          const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq("id", id)
             .single()

  if (error) {
    console.error('Error fetching data:', error);
    return;
            }
            setDoctors(data)
           
  console.log('Fetched data:', data);
}

fetchData();
 }, [id])
  
  
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
              source={{uri:doctor?.image}}
            />
          </View>
          <Text
            style={[
              Typography.bold.large,
              {
                color:
                  theme === "dark" ? Colors.others.white : Colors.dark._1,
              },
            ]}
          >
           {doctor?.first_name} {doctor?.last_name}
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
                xml={theme === "dark" ? WhiteThreeDots : moreGrayIcon}
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
  const [doctor,setDoctors]=useState<Doctor|null>(null)
  const { id } = useLocalSearchParams()
  const navigation=useNavigation()
  console.log("this is id:",id)
 const tableName='doctors'
 useEffect(() => {
        async function fetchData() {
          const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq("id", id)
             .single()

  if (error) {
    console.error('Error fetching data:', error);
    return;
            }
          setDoctors(data)
          navigation.setOptions({headerTitle:`${data?.first_name} ${data?.last_name}`})
           
  console.log('Fetched data:', data);
}

fetchData();
 }, [id])
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
          <HeaderComponent
          headerText={doctor?.first_name??"Doctor"}
          />

          <View
            style={[
              styles.individualCard,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FFFFFF" },
            ]}
          >
            <View style={{ width: 100, height: 100 }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri:doctor?.image}}
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
                {doctor?.first_name} {doctor?.last_name}
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
                   {doctor?.specialization} 
                </Text>
                <Text
                  style={[
                    Typography.medium.small,
                    {
                      color: theme === "dark" ? Colors.others.white : "#212121",
                    },
                  ]}
                >
                    {doctor?.hospital_name}
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
              {doctor?.about}
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
          height: 118,
          padding: 24,
        }}
      >
        <Button
          title="Book Appointment"
          onPress={() => router.push({ pathname:"/ActionMenu/Booking/BookingAppointment",params:{id:id}})}
        />
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
