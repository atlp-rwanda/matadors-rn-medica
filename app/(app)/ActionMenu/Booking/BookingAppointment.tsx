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
    <View
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
      }}
    >
      <StatusBar style={theme === "dark" ? "light" : "dark"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 20,
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <View style={{ gap: 24 }}>
            <Text
              style={[
                Typography.bold.xLarge,
                { color: theme === "dark" ? "#FFFFFF" : "#212121" },
              ]}
            >
              Select Date
            </Text>
            <View style={{ borderRadius: 20 }}>
              <DatePicker
                onSelectedChange={(date) => handleDate(date)}
                mode="calendar"
                options={{
                  backgroundColor:
                    theme === "dark" ? "#1F222A" : Colors.transparent.blue,
                  textHeaderColor: theme === "dark" ? "#FFFFFF" : "#212121",
                  textDefaultColor: theme === "dark" ? "#FFFFFF" : "#212121",
                  selectedTextColor: "#fff",
                  mainColor: "#246BFD",
                  textSecondaryColor: theme === "dark" ? "#FFFFFF" : "#212121",
                  borderColor: "rgba(122, 146, 165, 0.1)",
                }}
                current="2020-07-13"
                style={{
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text
                style={[
                  Typography.bold.xLarge,
                  { color: theme === "dark" ? "#FFFFFF" : "#212121" },
                ]}
              >
                Select Date
              </Text>
              <View style={styles.change}>{generateTimeSlots()}</View>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={() =>
                router.push("(app)/ActionMenu/Booking/Select-package")
              }
              style={styles.btn}
            >
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    borderRadius: 100,
    paddingHorizontal: 1,
    paddingVertical: 2,
    marginVertical: 8,
    marginHorizontal: 5,
    flexWrap: "nowrap",
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
    shadowColor: "#246BFD",
    elevation: 7,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});

export default BookingAppointment;
