import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "@/ctx/ThemeContext";
import { StatusBar } from "expo-status-bar";
import Typography from "@/constants/Typography";

function BookingAppointment() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleTimeSlotPress = ({ time }: { time: any }) => {
    setSelectedTime(time === selectedTime ? null : time);
    console.log(time);
  };
  console.log(selectedTime);
  changeTheme("light");
  //  documentation : https://hosseinshabani.github.io/react-native-modern-datepicker/?ref=retool-blog
  // Function to generate time slots from 9:00 AM to 15:00 PM
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 9; hour <= 14; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const hourFormat = hour < 12 ? "AM" : "PM";
        const formattedHour = hour <= 12 ? hour : hour + 1;
        const time = `${formattedHour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")} ${hourFormat}`;
        timeSlots.push(
          <TouchableOpacity
            key={time}
            style={[
              styles.button,
              selectedTime === time && styles.buttonSelected,
            ]}
            onPress={(time: any) => handleTimeSlotPress(time)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedTime === time && styles.buttonTextSelected,
                Typography.bold.xLarge,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        );
      }
    }
    return timeSlots;
  };

  function handleDate(select: string) {
    setSelectedDate(select);
    console.log(select);
  }
  const ios = Platform.OS === "ios";
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ marginBottom: ios ? 10 : 50 }}>
        <StatusBar style="dark" />
      </SafeAreaView>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View
          style={{
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.others.black,
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 30,
              paddingLeft: 20,
              backgroundColor:
                theme === "light" ? Colors.others.white : Colors.others.black,
            }}
          >
            <MaterialIcons
              name="arrow-back"
              size={25}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
              }}
            >
              Book Appointment
            </Text>
          </Pressable>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 30}}>

          <View
            style={{
              padding: 20,
              justifyContent: "space-between",
            }}
          >
              <View style={{ gap: 10 }}>
                <Text style={Typography.bold.xLarge}>Select Date</Text>
                <View style={{ borderRadius: 20 }}>
                  <DatePicker
                    onSelectedChange={(date) => handleDate(date)}
                    mode="calendar"
                    options={{
                      backgroundColor: Colors.transparent.blue,
                      textHeaderColor: "#000",
                      textDefaultColor: "#000",
                      selectedTextColor: "#fff",
                      mainColor: "#246BFD",
                      textSecondaryColor: "#000",
                      borderColor: "rgba(122, 146, 165, 0.1)",
                    }}
                    current="2020-07-13"
                    style={{
                      borderRadius: 20,
                    }}
                  />
                </View>
                <View style={{ gap: 10 }}>
                  <Text style={Typography.bold.xLarge}>Select Date</Text>
                  <View style={styles.change}>{generateTimeSlots()}</View>
                </View>
              </View>

              <TouchableOpacity 
              onPress={()=> router.push("(app)/ActionMenu/Booking/Select-package")}
              style={styles.btn}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    </View>
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
    padding: 5,
    borderRadius: 100,
    marginVertical: 10,
    marginHorizontal: "1%",
  },
  buttonSelected: {
    backgroundColor: Colors.main.primary._500,
    borderWidth: 0,
    color: "white",
  },
  buttonText: {
    color: Colors.main.primary._500,
    fontSize: 16,
    padding: 5,
    alignSelf: "center",
  },

  buttonTextSelected: {
    color: "white",
  },
  btn: {
    backgroundColor: Colors.main.primary._500,
    textAlign: "center",
    padding: 18,
    borderRadius: 100,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});

export default BookingAppointment;
