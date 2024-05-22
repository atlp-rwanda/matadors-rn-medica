import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { LeftArrow } from "@/components/UI/Icons";
import Typography from "@/constants/Typography";
import { StatusBar } from "expo-status-bar";
import { Calendar, CalendarProps } from "react-native-calendars";
import DateTimePicker, {
  Event,
  AndroidEvent,
} from "@react-native-community/datetimepicker";
import { ThemeContext } from "@/ctx/ThemeContext";

export default function AddNewCard() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [textColor, setTextColor] = useState("black");

  const onDateChange = (event: Event | AndroidEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (text: string) => {
    const numericText = text.replace(/\s/g, "");

    let formattedText = "";
    for (let i = 0; i < numericText.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedText += " ";
      }
      formattedText += numericText[i];
    }

    setCardNumber(formattedText);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "black" : "white" },
      ]}
    >
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <View style={styles.overThreeComp}>
        <View style={styles.twoComp}>
          <TouchableOpacity>
            <LeftArrow fillColor={theme === "dark" ? "white" : "black"} />
          </TouchableOpacity>

          <Text
            style={[
              Typography.heading._4,
              { color: theme === "dark" ? "white" : "black" },
            ]}
          >
            Add New Card
          </Text>
        </View>

        <Image source={require("@/assets/icons/Scan.png")} />
      </View>

      <Image
        source={require("@/assets/icons/Mocard.png")}
        style={{ width: 380, height: 239 }}
      />

      <View style={styles.middlePart}>
        <Text
          style={[
            Typography.bold.xLarge,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Card Name
        </Text>
        <View
          style={[
            styles.outerBack,
            { backgroundColor: theme === "dark" ? "#1F222A" : "#FAFAFA" },
          ]}
        >
          <TextInput
            placeholder="Andrew Ainsley"
            placeholderTextColor={theme === "dark" ? "white" : "black"}
            style={[
              Typography.bold.xLarge,
              { color: theme === "dark" ? "white" : "black" },
            ]}
            keyboardAppearance={theme === "dark" ? "dark" : "default"}
          />
        </View>
        <Text
          style={[
            Typography.bold.xLarge,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        >
          Card Number
        </Text>

        <View
          style={[
            styles.outerBack,
            { backgroundColor: theme === "dark" ? "#1F222A" : "#FAFAFA" },
          ]}
        >
          <TextInput
            value={cardNumber}
            onChangeText={handleCardNumberChange}
            maxLength={19}
            placeholder="2672 4738 7837 7285"
            placeholderTextColor={theme === "dark" ? "white" : "black"}
            keyboardType="number-pad"
            style={[
              Typography.bold.xLarge,
              { color: theme === "dark" ? "white" : "black" },
            ]}
            keyboardAppearance={theme === "dark" ? "dark" : "default"}
          />
        </View>
      </View>

      <View style={styles.belowMiddle}>
        <View style={styles.twoBelowMiddle}>
          <Text
            style={[
              Typography.bold.xLarge,
              { color: theme === "dark" ? "white" : "black" },
            ]}
          >
            Expiry Date
          </Text>

          <View
            style={[
              styles.DateBorder,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FAFAFA" },
            ]}
          >
            <Text
              style={[
                Typography.semiBold.medium,
                { color: theme === "dark" ? "white" : "black" },
              ]}
            >
              {date.toLocaleDateString()}
            </Text>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onDateChange}
                style={{
                  backgroundColor: theme === "dark" ? "black" : "white",
                }}
              />
            )}

            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Image
                source={
                  theme === "dark"
                    ? require("@/assets/icons/CalendarWhite.png")
                    : require("@/assets/icons/Calendar.png")
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.twoBelowMiddle}>
          <Text
            style={[
              Typography.bold.xLarge,
              { color: theme === "dark" ? "white" : "black" },
            ]}
          >
            CVV
          </Text>
          <View
            style={[
              styles.outerBorder,
              { backgroundColor: theme === "dark" ? "#1F222A" : "#FAFAFA" },
            ]}
          >
            <TextInput
              placeholder="699"
              keyboardType="number-pad"
              style={[Typography.bold.xLarge, { color: "#212121" }]}
              placeholderTextColor={theme === "dark" ? "white" : "black"}
            />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: "10%", alignItems: "center" }}>
        <TouchableOpacity style={styles.Button}>
          <Text style={[Typography.bold.large, { color: "#FFFFFF" }]}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DateBorder: {
    width: 170,
    height: 56,
    paddingLeft: 20,
    paddingTop: 20,
    borderRadius: 16,
    flexDirection: "row",
    gap: 15,
  },
  outerBorder: {
    width: 170,
    height: 56,
    justifyContent: "center",
    paddingLeft: 20,
    borderRadius: 16,
  },
  outerBack: {
    width: 360,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    paddingLeft: 20,
  },
  Button: {
    width: 380,
    height: 58,
    borderRadius: 100,
    backgroundColor: "#246BFD",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#246BFD",
    elevation: 7,
  },
  twoBelowMiddle: {
    gap: 24,
  },
  belowMiddle: {
    alignSelf: "flex-start",
    gap: 15,
    flexDirection: "row",
  },
  middlePart: {
    gap: 24,
    alignSelf: "flex-start",
  },
  overThreeComp: {
    flexDirection: "row",
    gap: 95,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingLeft: 24,
    paddingBottom: 0,
    paddingRight: 24,
    paddingTop: 34,
    gap: 16,
  },

  twoComp: {
    flexDirection: "row",
    gap: 20,
    alignSelf: "flex-start",
  },
});
