import { View, Text } from "@/components/Themed";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useFonts as useFontsExpo } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Line from "@/components/Line";
import { router } from "expo-router";
import { SvgXml } from "react-native-svg";
import {
  NotificationIcon,
  NotificationIconDark,
} from "@/assets/icons/Profile/Icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { blackHeart, whiteHeart } from "@/components/UI/icons/blackHeart";
import Chips from "@/components/UI/ChipsComponent";
import {
  fullSmallBlueStar,
  fullSmallWhiteStar,
} from "@/components/UI/icons/star";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import {
  getUserImageUrl,
  fetchPatientData,
  getPatientData,
} from "@/utils/LoggedInUser";
import { Doctor } from "@/constants/Types";
import DoctorDetails from "./Booking/Doctor_details";
import DoctorComponent from "@/components/DoctorComponent";
import { star } from "@/assets/icons/star";
import NofoundComponent from "@/components/NofoundComponent";
import { useAuth } from "@/ctx/AuthContext";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [userData, setUserData] = useState<[]>([]);
  const [patientData, setPatientData] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);
  const [activeIcon, setActiveIcon] = useState("Home");
  const [profilePhoto, setProfilePhoto] = useState("");
  const { theme, changeTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [greeting, setGreeting] = useState("");
  const { authType, imageUrl: otherAuthImageUrl } = useAuth();
  const [showpopUp, setShowPopup] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();

  const [fontsLoaded] = useFontsExpo({
    "Urbanist-regular": require("@/assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-bold": require("@/assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-Semibold": require("@/assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Medium": require("@/assets/fonts/Urbanist-Medium.ttf"),
  });
  const CDNURL =
    "https://vbwbfflzxuhktdvpbspd.supabase.co/storage/v1/object/public/patients/";
  const scrollbackColor =
    theme === "dark" ? styles.scrollDark : styles.scrollLight;

  useEffect(() => {
    getPatientData(supabase, setUserData);
  }, []);

  useEffect(() => {
    if (userData?.id) {
      fetchPatientData(userData?.id, setPatientData);
      getUserImageUrl("patients", userData, setImageUrl);
    }
  }, [userData]);

  useEffect(() => {
    if (imageUrl.length > 0) {
      setProfilePhoto(imageUrl[0]?.name);
    }
  }, [imageUrl]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("doctors").select("*");

      if (error) {
        setIsLoading(false);
        throw new Error("Error fetching data:" + error.message);
      }
      setIsLoading(true);
      setDoctors(data);
    }
    fetchData();
  }, [doctors]);

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 12 && hours < 17) {
        setGreeting("Good Afternoon");
      } else if (hours >= 17 || hours < 1) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Morning");
      }
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleIconPress = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const isIconActive = (iconName: string) => {
    return activeIcon === iconName;
  };
  const handleRemove = (doctor:any) => {
        setSelectedDoctor(doctor)
        
        setShowPopup(true)
    }


  if (!fontsLoaded) {
    return null;
  }
  const filteredDoctors =
    searchTerm.length > 0
      ? doctors.filter((doctor) =>
          doctor.last_name.toLowerCase().includes(searchTerm)
        )
      : doctors;

  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
        padding: 2,
        paddingTop: 40,
      }}
    >
      {patientData && (
        <FlatList
          data={patientData}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
                marginLeft: "3%",
                marginTop: "5%",
              }}
            >
              <View style={{ borderRadius: 100, width: 70, height: 70 }}>
                <Image
                  style={{ width: "100%", height: "100%", borderRadius: 100 }}
                  source={{
                    uri:
                      authType !== "email"
                        ? authType
                          ? otherAuthImageUrl
                          : `${CDNURL + userData?.id + "/" + profilePhoto}`
                        : `${CDNURL + userData?.id + "/" + profilePhoto}`,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
                  marginLeft: "2%",
                }}
              >
                <Text
                  style={{
                    color: theme === "dark" ? "#E0E0E0" : "#757575",
                    fontFamily: "Urbanist-regular",
                  }}
                >
                  {" "}
                  {greeting} 👋
                </Text>
                <Text
                  style={{
                    color: theme === "dark" ? "#FFFFFF" : "#000000",
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "Urbanist-bold",
                  }}
                >
                  {item?.first_name + " " + item?.last_name}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
                  flexDirection: "row",
                  paddingLeft: "27%",
                }}
              >
                <TouchableOpacity
                  onPress={() => router.push("/ActionMenu/NotificationScreen")}
                >
                  <SvgXml
                    xml={
                      theme === "dark" ? NotificationIconDark : NotificationIcon
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    router.push("/ActionMenu/FavoriteDoctorScreen")
                  }
                  style={styles.heart}
                >
                  <SvgXml xml={theme === "dark" ? whiteHeart : blackHeart} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        contentContainerStyle={{ height: "150%" }}
      >
        <View
          style={{
            backgroundColor: theme === "dark" ? "#35383F" : "#F5F5F5",
            width: "90%",
            flexDirection: "row",
            gap: 18,
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "7%",
            marginLeft: "5%",
            marginRight: 30,
            padding: 15,
            borderRadius: 12,
            position: "relative",
          }}
        >
          <Image source={require("../../../assets/images/search.png")} />
          <TextInput
            placeholder="Search"
            onChangeText={(newText) => setText(newText)}
            style={styles.searchinput}
            placeholderTextColor={
              theme === "dark" ? "#757575" : "rgba(45,45,45,0.4)"
            }
          />
          <TouchableOpacity style={styles.filter}>
            <Image source={require("../../../assets/images/filter.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.frame}>
          <ImageBackground
            style={styles.FrameImage}
            source={require("../../../assets/images/Frame.png")}
          >
            <View style={styles.FrameText}>
              <Text style={styles.h1}>Medical Checks!</Text>
              <Text style={styles.body}>
                Check your health condition regularly to minimize the incidence
                of disease in the future.{" "}
              </Text>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate("" as never)}
              >
                <Text style={styles.buttontext2}> Check Now </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.TxtContainer}>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontFamily: "Urbanist-bold",
              fontSize: 19,
              marginLeft: "4%",
            }}
          >
            Doctor Speciality
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/ActionMenu/FavoriteDoctorScreen")}
          >
            <Text style={styles.seeTxt}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.specialityContainer1}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/GeneralDoctor.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Dentist.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Optician.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Nutritionist.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.NameTxt}>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            General..
          </Text>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            Dentist
          </Text>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            Ophthal..
          </Text>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            Nutrition..
          </Text>
        </View>
        <View style={styles.specialityContainer1}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Neurologist.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Pediatric.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/images/Radiologist.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../assets/images/More.png")}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.NameTxt}>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            Neurolo..
          </Text>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            Pediatric
          </Text>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            Radiolo..
          </Text>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontSize: 14,
              marginLeft: "2%",
              fontFamily: "Urbanist-bold",
            }}
          >
            More
          </Text>
        </View>
        <View style={styles.TopDocs}>
          <Text
            style={{
              color: theme === "dark" ? "#FFFFFF" : "#000000",
              fontFamily: "Urbanist-bold",
              fontSize: 19,
              marginLeft: "4%",
            }}
          >
            Top Doctors
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/ActionMenu/AllDoctorScreen")}
          >
            <Text style={styles.seeTxt}>See All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            marginTop: 5,
            padding: 5,
            marginLeft: 10,
            marginBottom: 20,
            backgroundColor: theme === "dark" ? "#181A20" : "#ffffff",
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: "#246BFD",
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
                justifyContent: "center",
                width: 65,
                height: 34,
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Urbanist-regular", color: "white" }}>
                All
              </Text>
            </View>
            <View
              style={{
                backgroundColor: theme === "dark" ? "#181A20" : "#ffffff",
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
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                General
              </Text>
            </View>
            <View
              style={{
                backgroundColor: theme === "dark" ? "#181A20" : "#ffffff",
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
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                Dentist
              </Text>
            </View>
            <View
              style={{
                backgroundColor: theme === "dark" ? "#181A20" : "#ffffff",
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
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                Nutritionist
              </Text>
            </View>
            <View
              style={{
                backgroundColor: theme === "dark" ? "#181A20" : "#ffffff",
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
                style={{ fontFamily: "Urbanist-regular", color: "#246BFD" }}
              >
                Neurologist
              </Text>
            </View>
          </ScrollView>
        </View>

        <ImageBackground
          style={{
            backgroundColor: theme === "dark" ? "#181A20" : "#EEEEEE",
            width: "100%",
            padding: 5,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.scroll, scrollbackColor]}
            contentContainerStyle={{
              justifyContent: "center",
              paddingBottom: 100,
              paddingTop: 20,
            }}
          >
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor: any, index: any) => (
                <View
                  key={index}
                  style={{
                    marginBottom: "5%",
                    width: "100%",
                    height: 150,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: theme === "dark" ? "#181A20" : "#EEEEEE",
                  }}
                >
                  <DoctorComponent
                    path={() => router.push({ pathname: "/ActionMenu/Booking/Doctor_details",params:{id:doctor.id} }) }
                    imageSource={{ uri: doctor.image }}
                    name={`${doctor.first_name} ${doctor.last_name}`}
                    iconComponent={<SvgXml xml={whiteHeart} />}
                    professionalTitle={doctor.specialization}
                    hospital={doctor?.hospital_name}
                    star={<SvgXml xml={star} />}
                    review={doctor.review}
                    rate={doctor.rate}
                    remove={() => handleRemove(doctor)}
                  />
                </View>
              ))
            ) : (
              <NofoundComponent />
            )}
          </ScrollView>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    backgroundColor: "#181A20",
    padding: 2,
    paddingTop: 40,
  },

  userImage: {
    width: 45,
    height: 45,
  },
  filter: {
    marginLeft: "3%",
  },
  heart: {
    marginLeft: 25,
  },
  searchinput: {
    color: "#757575",
    fontFamily: "Urbanist-regular",
    fontSize: 18,
    flex: 1,
  },
  frame: {
    backgroundColor: "transparent",
    marginRight: "0%",
    padding: 0,
    width: "100%",
    height: 200,
    marginLeft: "0%",
    alignItems: "center",
  },
  scroll: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  scrollDark: {
    backgroundColor: "#181A20",
  },
  scrollLight: {
    backgroundColor: "#F7F7F7",
  },
  FrameImage: {
    width: "101%",
    padding: 0,
    height: "100%",
    marginTop: "5%",
    marginLeft: "3%",
    shadowColor: "#A7C4FE",
    shadowOpacity: 5,
    flexDirection: "row",
  },
  FrameText: {
    backgroundColor: "transparent",
  },
  button2: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: 100,
    height: 30,
    marginTop: "5%",
    marginLeft: "13%",
  },
  buttontext2: {
    color: "#246BFD",
    fontFamily: "Urbanist-Semibold",
    fontSize: 13,
  },

  h1: {
    marginTop: "10%",
    marginLeft: "13%",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Urbanist-bold",
    fontSize: 25,
    width: 185,
  },
  body: {
    fontFamily: "Urbanist-regular",
    fontSize: 12,
    backgroundColor: "transparent",
    color: "#FFFFFF",
    width: 194,
    marginTop: "5%",
    marginLeft: "13%",
  },
  TxtContainer: {
    flexDirection: "row",
    gap: 180,
    backgroundColor: "transparent",
    marginTop: "6%",
  },
  seeTxt: {
    color: "#246BFD",
    fontFamily: "Urbanist-bold",
    fontSize: 15,
  },
  specialityContainer1: {
    backgroundColor: "transparent",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    gap: 40,
  },
  NameTxt: {
    backgroundColor: "transparent",
    marginLeft: "5%",
    marginTop: "2%",
    flexDirection: "row",
    gap: 40,
  },

  TopDocs: {
    flexDirection: "row",
    gap: 220,
    backgroundColor: "transparent",
    marginTop: "8%",
    marginBottom: "4%",
  },

  cardImage: {
    height: "93%",
    width: "30%",
    borderRadius: 20,
    //backgroundColor:'black'
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

  DocRating: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginLeft: "5%",
    marginTop: "6%",
  },
});
