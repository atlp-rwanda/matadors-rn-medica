import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { SearchIcon } from "@/assets/icons/SearchSvg";
import { MoreIcon } from "@/assets/icons/MoreCircleSvg";
import Line from "@/components/Line";
import Typography from "@/constants/Typography";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";


export default function UpcomingAppointment() {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [headerWidth, setHeaderWidth] = useState(0);
  const [activeIcon, setActiveIcon] = useState("Appointment");
  const [text, setText] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const updateHeaderWidth = () => {
      const screenWidth = Dimensions.get("window").width;
      const headerPadding = 20 * 2;
      const headerAvailableWidth = screenWidth - headerPadding;
      setHeaderWidth(headerAvailableWidth);
    };

    updateHeaderWidth();
  }, []);

  const handleTabPress = (screen: "Upcoming" | "Completed" | "Cancelled") => {
    setActiveTab(screen);

    if (screen === "Upcoming") {
      navigation.navigate("Appointments/ScheduledAppointments/AppointmentUpcoming" as never);
    } else if (screen === "Completed") {
      navigation.navigate("Appointments/ScheduledAppointments/AppointmentCompleted" as never);
    } else if (screen === "Cancelled") {
      navigation.navigate("Appointments/ScheduledAppointments/AppointmentCancelledScreen" as never);
    }
  };

  const activeTabLinePosition = {
    width: headerWidth / 3,
    left:
      activeTab === "Upcoming"
        ? 0
        : activeTab === "Completed"
        ? headerWidth / 3
        : (headerWidth * 2) / 3,
  };

  const renderTab = (
    screen: "Upcoming" | "Completed" | "Cancelled",
    label: string
  ) => {
    const isActive = activeTab === screen;
    return (
      <TouchableOpacity
        key={screen}
        style={[
          styles.tab,
          isActive && styles.activeTab,
          { borderBottomColor: isActive ? "#246BFD" : "#D3D3D3" },
        ]}
        onPress={() => handleTabPress(screen)}
      >
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark"/>
      <ImageBackground style={styles.header}>
        <View style={styles.heading}>
          <Image
            style={styles.headerLogo}
            source={require("@/assets/images/DefaultLogo.png")}
          ></Image>
          <Text style={styles.headerTitle}>My Appointment </Text>
          <TouchableOpacity>
            <SvgXml xml={SearchIcon} style={[styles.SearchIcon]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={MoreIcon} style={[styles.MoreIcon]} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerNav}>
          <TouchableOpacity onPress={() => handleTabPress("Upcoming")}>
            <Text>{renderTab("Upcoming", "Upcoming")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress("Completed")}>
            <Text>{renderTab("Completed", "Completed")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress("Cancelled")}>
            <Text>{renderTab("Cancelled", "Cancelled")}</Text>
          </TouchableOpacity>
          <View style={[styles.activeTabLine, activeTabLinePosition]} />
        </View>
      </ImageBackground>

      <ScrollView>
        <ImageBackground style={styles.cardContainer}>
          {/* 1st Card*/}
          <ImageBackground style={styles.card}>
            <View style={styles.upperSection}>
              <Image
                style={styles.cardImage}
                source={require("@/assets/images/Randy.png")}
              ></Image>
              <ImageBackground style={styles.DocDescription}>
                <View style={styles.CardHeader}>
                  <Text style={[styles.DocName, Typography.bold.xLarge]}> Dr. Drake Boeson</Text>
                </View>
                <View style={styles.DocStatus}>
                  <Text>Messaging - </Text>
                  <View
                    style={{
                      backgroundColor: "#ffffff",
                      padding: 2,
                      paddingHorizontal: 10,
                      borderColor: "#246BFD",
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#246BFD",
                        fontSize: 12,
                      }}
                    >
                      Upcoming
                    </Text>
                  </View>
                  <Image
                    style={{ marginBottom: 10, marginLeft: "6%" }}
                    source={require("@/assets/images/Messaging.png")}
                  ></Image>
                </View>
                <Text style={styles.Date}>Today | 16:00 PM</Text>
              </ImageBackground>
            </View>
            <Line
              color="#EEEEEE"
              thickness={2}
              style={{ marginLeft: 10, marginTop: 20, width: "90%" }}
            />
            <View style={styles.CardButtons}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  marginLeft: 10,
                  padding: 5,
                  paddingHorizontal: 10,
                  borderColor: "#246BFD",
                  borderWidth: 2,
                  borderRadius: 20,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{  color: "#246BFD" }}
                >
                  Cancel Appointment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#246BFD",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  justifyContent: "center",
                  width: 150,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{  color: "white" }}
                >
                  Reschedule
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* 2nd Card*/}
          <ImageBackground style={styles.card}>
            <View style={styles.upperSection}>
              <Image
                style={styles.cardImage}
                source={require("@/assets/images/Dr jenny.png")}
              ></Image>
              <ImageBackground style={styles.DocDescription}>
                <View style={styles.CardHeader}>
                  <Text style={styles.DocName}> Dr. Jenny Watson</Text>
                </View>
                <View style={styles.DocStatus}>
                  <Text>Voice call - </Text>
                  <View
                    style={{
                      backgroundColor: "#ffffff",
                      padding: 2,
                      paddingHorizontal: 10,
                      borderColor: "#246BFD",
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#246BFD",
                        fontSize: 12,
                      }}
                    >
                      Upcoming
                    </Text>
                  </View>
                  <TouchableOpacity onPress={()=> router.push('/(app)/Appointments/VoiceCallAppointment/MyAppointmentVoiceCall')}>
                  <Image
                    style={{ marginBottom: 10, marginLeft: "6%" }}
                    source={require("@/assets/images/VoiceCall.png")}
                  />
                  </TouchableOpacity>

                </View>
                <Text style={styles.Date}>Today | 14:00 PM</Text>
              </ImageBackground>
            </View>
            <Line
              color="#EEEEEE"
              thickness={2}
              style={{ marginLeft: 10, marginTop: 20, width: "90%" }}
            />
            <View style={styles.CardButtons}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  marginLeft: 10,
                  padding: 5,
                  paddingHorizontal: 10,
                  borderColor: "#246BFD",
                  borderWidth: 2,
                  borderRadius: 20,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{  color: "#246BFD" }}
                >
                  Cancel Appointment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#246BFD",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  justifyContent: "center",
                  width: 150,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white" }}
                >
                  Reschedule
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* 3rd Card*/}
          <ImageBackground style={styles.card}>
            <View style={styles.upperSection}>
              <Image
                style={styles.cardImage}
                source={require("@/assets/images/Dr maria.png")}
              ></Image>
              <ImageBackground style={styles.DocDescription}>
                <View style={styles.CardHeader}>
                  <Text style={styles.DocName}> Dr. Maria Foose</Text>
                </View>
                <View style={styles.DocStatus}>
                  <Text>Messaging - </Text>
                  <View
                    style={{
                      backgroundColor: "#ffffff",
                      padding: 2,
                      paddingHorizontal: 10,
                      borderColor: "#246BFD",
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#246BFD",
                        fontSize: 12,
                      }}
                    >
                      Upcoming
                    </Text>
                  </View>
                  <Image
                    style={{ marginBottom: 10, marginLeft: "6%" }}
                    source={require("@/assets/images/VideoCall.png")}
                  ></Image>
                </View>
                <Text style={styles.Date}>Today | 10:00 AM</Text>
              </ImageBackground>
            </View>
            <Line
              color="#EEEEEE"
              thickness={2}
              style={{ marginLeft: 10, marginTop: 20, width: "90%" }}
            />
            <View style={styles.CardButtons}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  marginLeft: 10,
                  padding: 5,
                  paddingHorizontal: 10,
                  borderColor: "#246BFD",
                  borderWidth: 2,
                  borderRadius: 20,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#246BFD" }}
                >
                  Cancel Appointment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#246BFD",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  justifyContent: "center",
                  width: 150,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{  color: "white" }}
                >
                  Reschedule
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* 4th Card*/}
          <ImageBackground style={styles.card}>
            <View style={styles.upperSection}>
              <Image
                style={styles.cardImage}
                source={require("@/assets/images/Randy.png")}
              ></Image>
              <ImageBackground style={styles.DocDescription}>
                <View style={styles.CardHeader}>
                  <Text style={styles.DocName}> Dr. Drake Boeson</Text>
                </View>
                <View style={styles.DocStatus}>
                  <Text>Messaging - </Text>
                  <View
                    style={{
                      backgroundColor: "#ffffff",
                      padding: 2,
                      paddingHorizontal: 10,
                      borderColor: "#246BFD",
                      borderWidth: 2,
                      borderRadius: 10,
                      height: 30,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#246BFD",
                        fontSize: 12,
                      }}
                    >
                      Upcoming
                    </Text>
                  </View>
                  <Image
                    style={{ marginBottom: 10, marginLeft: "6%" }}
                    source={require("@/assets/images/Messaging.png")}
                  ></Image>
                </View>
                <Text style={styles.Date}>Today | 16:00 PM</Text>
              </ImageBackground>
            </View>
            <Line
              color="#EEEEEE"
              thickness={2}
              style={{ marginLeft: 10, marginTop: 20, width: "90%" }}
            />
            <View style={styles.CardButtons}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  marginLeft: 10,
                  padding: 5,
                  paddingHorizontal: 10,
                  borderColor: "#246BFD",
                  borderWidth: 2,
                  borderRadius: 20,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{  color: "#246BFD" }}
                >
                  Cancel Appointment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#246BFD",
                  padding: 5,
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  justifyContent: "center",
                  width: 150,
                  height: 34,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{  color: "white" }}
                >
                  Reschedule
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    padding: 0,
    height: "100%",
  },
  header: {
    padding: 20,
  },

  heading: {
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
    marginBottom: "0%",
    marginTop: "5%",
    padding: 10,
  },

  headerLogo: {
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontSize: 22,
    marginLeft: "3%",
  },
  SearchIcon: {
    marginLeft: 75,
  },
  MoreIcon: {
    marginLeft: 25,
  },

  headerNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#D3D3D3",
    paddingBottom: 10,
    position: "relative",
  },
  tab: {
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    marginTop: "4%",
    color: "#9E9E9E",
  },
  activeTab: {
    // Define styles for active tab if needed
  },
  activeTabText: {
    color: "#246BFD",
    fontWeight: "bold",
  },
  activeTabLine: {
    position: "absolute",
    bottom: 0,
    height: 3,
    backgroundColor: "#246BFD",
    zIndex: 1,
  },

  Body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5F5F5",
  },

  Footer: {
    backgroundColor: "#FFFFFF",
    height: 90,
    width: "100%",
    marginTop: "0%",
    marginLeft: "0%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: "0%",
    flexDirection: "row",
    gap: 45,
    //position:'absolute'
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    marginLeft: "0%",
  },
  iconText: {
    color: "#000000",
    fontSize: 12,
    marginLeft: "0%",
  },
  activeIcon: {
    color: "#246BFD", // Example: change color for active icon
  },
  activeText: {
    color: "#246BFD", // Example: change color for active text
    fontWeight: "bold", // Example: apply font weight for active text
  },
  iconsBox: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
    padding: 5,
  },
  card: {
    width: "95%",
    height: 210,
    marginTop: 20,
    marginLeft: "2%",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    padding: 15,
    flexDirection: "column",
  },
  cardImage: {
    height: 110,
    width: "30%",
    borderRadius: 20,
    //backgroundColor:'black'
  },

  upperSection: {
    flexDirection: "row",
  },

  CardButtons: {
    flexDirection: "row",
    gap: 20,
    marginLeft: "1%",
    marginTop: "4%",
  },

  DocName: {
    color: "#000000",
    marginLeft: "3%",
    marginRight: "18%",
    marginTop: "1%",
    fontSize: 20,
    padding: 0,
  },
  DocDescription: {
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  DocHeart: {
    marginTop: "3%",
  },
  CardHeader: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  Date: {
    backgroundColor: "transparent",
    color: "#424242",
    fontSize: 12,
    marginLeft: "5%",
    marginTop: "0%",
  },
  DocStatus: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginLeft: "5%",
    marginTop: "0%",
    justifyContent: "center",
    alignItems: "center",
  },
});
