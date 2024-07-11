import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { backSmallGrayIcon, forwardSmallBlueIcon } from "@/constants/icon";
import { ThemeContext } from "@/ctx/ThemeContext";
import React, { useContext, useEffect, useState } from "react";
import { Pressable, Text, View, FlatList } from "react-native";
import { SvgXml } from "react-native-svg";
import DateElement from "./Date";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function DatePicker({ onChange }: Props) {
  let [dates, setDates] = useState<React.JSX.Element[]>([]);
  const [currentMonth, setCurrentMonth] = useState(6); // Initialize currentMonth to June (0-based index)
  const [currentYear, setCurrentYear] = useState(2024); // Initialize currentYear to 2024
  const { theme } = useContext(ThemeContext); // Get theme context

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]; // Weekday names

  const [selectedDate, setSelectedDate] = useState(0); // Initialize selectedDate to 0 (no date selected)

  // Function to calculate the index of the day for a given date
  function dayOfWeek(firstDayIndex: number, date: number): number {
    if (firstDayIndex < 0 || firstDayIndex > 6) {
      throw new Error("Invalid first day index. It should be between 0 and 6.");
    }
    if (date < 1) {
      throw new Error("Invalid date. Date should be greater than or equal to 1.");
    }
    return (firstDayIndex + (date - 1)) % 7; 
  }

  
  useEffect(() => {
    let datesArr = [];

    const daysInMonth = getDaysInMonth(currentMonth + 1, currentYear); 
    const firstDayOfWeek = getFirstDayOfWeek(currentMonth + 1, currentYear); 

    
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const prevMonthDays = getDaysInMonth(currentMonth, currentYear); 
      datesArr.push(<DateElement key={`prev-${i}`} item={`${prevMonthDays - i}`} disabled />);
    }

    
    for (let j = 1; j <= daysInMonth; j++) {
      if (j === selectedDate) {
        onChange(`${currentYear}-${(currentMonth + 1).toString().padStart(2, "0")}-${j.toString().padStart(2, "0")}`);
      }
      datesArr.push(
        <DateElement
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
          key={j}
          item={`${j}`}
        />
      );
    }

    setDates(datesArr); 
  }, [currentMonth, currentYear, selectedDate, onChange]);

  
  function nextMonth() {
    if (currentMonth + 1 >= 12) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevVal) => prevVal + 1);
    }
  }

  
  function prevMonth() {
    if (currentMonth <= 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevVal) => prevVal - 1);
    }
  }

  
  function getDaysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

 
  function getFirstDayOfWeek(month: number, year: number): number {
    return new Date(year, month - 1, 1).getDay();
  }

  return (
    <View
      style={{
        padding: 20,
        gap: 15,
        backgroundColor: theme === "light" ? Colors.background.blue : Colors.dark._2,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            Typography.semiBold.xLarge,
            {
              color: theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            },
          ]}
        >
          {`${new Date(currentYear, currentMonth).toLocaleString("en-US", {
            month: "long",
          })} ${currentYear}`}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => prevMonth()}>
            <SvgXml xml={backSmallGrayIcon} />
          </Pressable>

          <Pressable onPress={() => nextMonth()}>
            <SvgXml xml={forwardSmallBlueIcon} />
          </Pressable>
        </View>
      </View>

      <View>
        <View>
          <FlatList
            data={days}
            renderItem={(item) => (
              <Pressable style={{ flex: 1 / 7, padding: 10 }}>
                <Text
                  style={[
                    Typography.bold.small,
                    {
                      color: theme === "light" ? Colors.grayScale._900 : Colors.others.white,
                    },
                  ]}
                >
                  {item.item}
                </Text>
              </Pressable>
            )}
            numColumns={7}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <FlatList
            data={dates}
            renderItem={(item) => <>{item.item}</>}
            numColumns={7}
          />
        </View>
      </View>
    </View>
  );
}
