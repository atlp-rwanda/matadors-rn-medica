import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { StatusBar } from "expo-status-bar";
import Typography from "@/constants/Typography";
import DatePicker from "@/components/UI/DatePicker";
import Tag from "@/components/UI/Tags/Tag";
import { FlatList } from "react-native";
import Button from "@/components/UI/Button";
import Chips from "@/components/UI/ChipsComponent";

export default function BookingAppointment() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [timeSlots, setTimeSlots] = useState([""]);
  const [selected, setSelected] = useState("");

  const generateTimeSlots = () => {
    let times = [];
    for (let hour = 9; hour <= 14; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const hourFormat = hour < 12 ? "AM" : "PM";
        const formattedHour = hour <= 12 ? hour : hour - 12;
        const time = `${formattedHour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")} ${hourFormat}`;
        times.push(time);
      }
    }
    return setTimeSlots(times);
  };

  useEffect(() => {
    generateTimeSlots();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:
          theme === "light" ? Colors.others.white : Colors.dark._1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View style={{}}>
        <View
          style={{
            gap: 20,
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 10 }}>
            <Text
              style={[
                Typography.bold.xLarge,
                {
                  color:
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white,
                },
              ]}
            >
              Select Date
            </Text>
            <DatePicker />
          </View>

          <View style={{ gap: 10 }}>
            <Text
              style={[
                Typography.bold.xLarge,
                {
                  color:
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white,
                },
              ]}
            >
              Select Hour
            </Text>
            <FlatList
              data={timeSlots}
              renderItem={(item) => {
                return (
                  <>
                   
                  <Chips text={item.item} type= "border"size="large" style={{ paddingHorizontal:5, width:'32%',marginRight:5}} />
                  </>
                 
                  
                );
              }}
               numColumns={3}
              contentContainerStyle={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'space-between',
                
                gap: 10,
                flexWrap: "wrap",
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: "auto",
          marginBottom: 20,
        }}
      >
        <Button
          title="Next"
          onPress={() => {
            router.push("(app)/ActionMenu/Booking/Select-package");
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hour: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingBottom: 20,
  },
  change: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    flexWrap: "wrap",
  },
  button: {
    flexBasis: "30%",
    borderColor: Colors.main.primary._500,
    borderWidth: 2,
    backgroundColor: "transparent",
    borderRadius: 100,
    marginVertical: 10,
    marginHorizontal: "1%",
    width:118,
    height:45
  },
  buttonSelected: {
    backgroundColor: Colors.main.primary._500,
    borderWidth: 0,
    color: "white",
  },
  buttonText: {
    color: Colors.main.primary._500,
    padding: 3,
    alignSelf: "center",
  },

  buttonTextSelected: {
    color: "white",
  },
  btn: {
    backgroundColor: Colors.main.primary._500,
    textAlign: "center",
    alignItems: "center",
    padding: 18,
    borderRadius: 100,
    marginTop: 10,
    shadowColor: "#246BFD",
    elevation: 7,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});
