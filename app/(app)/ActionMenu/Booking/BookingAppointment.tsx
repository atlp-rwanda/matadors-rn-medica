import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { ThemeContext } from "@/ctx/ThemeContext";
import Typography from "@/constants/Typography";
import DatePicker from "@/components/UI/DatePicker";
import Tag from "@/components/UI/Tags/Tag";
import { FlatList } from "react-native";
import Button from "@/components/UI/Button";
import Chips from "@/components/UI/ChipsComponent";
import SelectHour from "@/components/SelectHour";
import { useLocalSearchParams } from "expo-router";

export default function BookingAppointment() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [timeSlots, setTimeSlots] = useState([""]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const { id } = useLocalSearchParams()
 
  console.log("this is id from BookAppointment:", id)

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

  console.log("this is slected hour:", selectedHour)
  console.log("this is selected date:",selectedDate)

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
            <DatePicker onChange={setSelectedDate} />
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
            <SelectHour timeSlots={timeSlots} onChange={setSelectedHour} />
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
            router.push({ pathname:"(app)/ActionMenu/Booking/Select-package",params:{Doctor_id:id,hour:selectedHour,date:selectedDate}});
          }}
        />
      </View>
    </ScrollView>
  );
}
