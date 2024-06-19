import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import {  useContext, useState } from "react";
import {  ScrollView } from "react-native";
import { Text } from "react-native";
import { ThemeContext } from "@/ctx/ThemeContext";
import Typography from "@/constants/Typography";
import Button from "@/components/UI/Button";
import { PaymentMethods } from "@/constants/PaymentMethods";
import PaymentChooseContainer from "@/components/UI/PaymentChooseContainer/Index";
import { router } from "expo-router";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function SelectPayment() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(false);
const {doctor_id,hour,date,packageTitle,packagePrice,problem,user_id,patient_id}=useLocalSearchParams()

  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ScrollView
        style={{ backgroundColor: "white", flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          backgroundColor:
            theme === "light" ? Colors.others.white : Colors.dark._1,
          gap: 20,
          paddingBottom: 20,
        }}
      >
        <Text
          style={[
            Typography.regular.large,
            {
              color:
                theme === "light" ? Colors.grayScale._900 : Colors.others.white,
            },
          ]}
        >
          Select the payment method you want to use.
        </Text>

        <PaymentChooseContainer data={PaymentMethods} />

        <Button
          title="Add New Card"
          onPress={() => router.push("(app)/ActionMenu/Booking/AddNewCard")}
          type={theme === "light" ? "light" : "gray"}
        />
        <Button
          title="Next"
          onPress={() => {
            router.push({ pathname: "(app)/ActionMenu/Booking/reviewSummary",params: {doctor_id:doctor_id,hour:hour,date:date,packageTitle:packageTitle,packagePrice:packagePrice,problem:problem,user_id:user_id,patient_id:patient_id}});
          }}
          style={{ marginTop: "auto" }}
        />
      </ScrollView>
    </>
  );
}
