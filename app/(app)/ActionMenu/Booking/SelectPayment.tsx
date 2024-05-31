import React from "react";
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

export default function SelectPayment() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ScrollView
        style={{ backgroundColor: "white" }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          height: "100%",
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
          backgroundColor={
            theme === "light" ? Colors.main.primary._100 : Colors.dark._3
          }
          title="Add New Card"
          textColor={{
            color:
              theme === "light"
                ? Colors.main.primary._500
                : Colors.others.white,
            opacity: 8,
          }}
          onPress={() => router.push('(app)/ActionMenu/Booking/AddNewCard')}
        />
        <Button
          backgroundColor={Colors.main.primary._500}
          title="Next"
          textColor={{ color: Colors.others.white, opacity: 8 }}
          onPress={() => {
            router.push("(app)/ActionMenu/Booking/reviewSummary");
          }}
          shadowColor={Colors.main.primary._500}
          style={{ marginTop: "auto" }}
        />
      </ScrollView>
    </>
  );
}
