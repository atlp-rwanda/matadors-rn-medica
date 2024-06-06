import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { backSmallGrayIcon, forwardSmallBlueIcon } from "@/constants/icon";
import { ThemeContext } from "@/ctx/ThemeContext";
import React, { useContext, useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import { SvgXml } from "react-native-svg";

function DateElement({ item, disabled }: { item: string; disabled?: boolean }) {
  const [isPressed, setIsPressed] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <Pressable
      style={{
        flex: 1 / 7,
        padding: 4,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        !disabled && setIsPressed((prevVal) => !prevVal);
      }}
    >
      <View
        style={{
          backgroundColor: isPressed ? Colors.main.primary._500 : "transparent",
          height: 30,
          width: 30,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          key={item}
          style={[
            Typography.medium.medium,
            {
              color: isPressed
                ? Colors.others.white
                : !disabled
                ? theme === "light"
                  ? Colors.grayScale._900
                  : Colors.grayScale._300
                : Colors.grayScale._500,
              textAlign: "center",
            },
          ]}
        >
          {item}
        </Text>
      </View>
    </Pressable>
  );
}

export default function DatePicker() {
  let [dates, setDates] = useState<React.JSX.Element[]>([]);
  const [currentMonth, setCurrentMonth] = useState(6);
  const [currentYear, setCurrentYear] = useState(2024);
  const { theme, changeTheme } = useContext(ThemeContext);

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  useEffect(() => {
    let datesArr = [];

    const daysInMonth = getDaysInMonth(currentMonth, currentYear) + 1;
    const firstDayOfWeek = getFirstDayOfWeek(currentMonth, currentYear);

    for (let i = firstDayOfWeek - 1; i < days.length; i++) {
      if (i < firstDayOfWeek) {
        const prevMonthDays = getDaysInMonth(currentMonth - 1, currentYear);
        const prevMonthfirstDayOfWeek = getFirstDayOfWeek(
          currentMonth,
          currentYear
        );
        for (
          let j = prevMonthDays - prevMonthfirstDayOfWeek;
          j < prevMonthDays;
          j++
        ) {
          datesArr.push(<DateElement item={`${j}`} disabled />);
        }
      }
      break;
    }

    for (let i = firstDayOfWeek; i < days.length; i++) {
      if (i === firstDayOfWeek) {
        for (let j = 1; j < daysInMonth; j++) {
          datesArr.push(<DateElement item={`${j}`} />);
        }
        break;
      }
    }

    // for (let i = firstDayOfWeek; i < days.length; i++) {
    //   if (i >= firstDayOfWeek) {
    //     const nextMonthDays = getDaysInMonth(currentMonth + 1, currentYear);
    //     const nextMonthfirstDayOfWeek = getFirstDayOfWeek(
    //       currentMonth + 1,
    //       currentYear
    //     );

    //     for (
    //       let j = 0;
    //       j < nextMonthDays;
    //       j++
    //     ) {
    //       datesArr.push(<DateElement item={`${j}`} disabled />);
    //       console.log("next", j);
    //     }
    //   }
    // }

    setDates(datesArr);
  }, [currentMonth, currentYear]);

  function nextMonth() {
    console.log("currentMonth", currentMonth);
    if (currentMonth + 1 >= 12) {
      setCurrentMonth(1);
      setCurrentYear((prevYear) => prevYear + 1);
      return;
    }
    setCurrentMonth((prevVal) => prevVal + 1);
  }

  function prevMonth() {
    if (currentMonth + 1 <= 1) {
      setCurrentMonth(12);
      setCurrentYear((prevYear) => prevYear - 1);
    }
    setCurrentMonth((prevVal) => prevVal - 1);
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
        backgroundColor:
          theme === "light" ? Colors.background.blue : Colors.dark._2,
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
              color:
                theme === "light" ? Colors.grayScale._900 : Colors.others.white,
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
        <View style={{}}>
          <FlatList
            data={days}
            renderItem={(item) => (
              <Pressable style={{ flex: 1 / 7, padding: 10 }}>
                <Text
                  style={[
                    Typography.bold.small,
                    {
                      color:
                        theme === "light"
                          ? Colors.grayScale._900
                          : Colors.others.white,
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
