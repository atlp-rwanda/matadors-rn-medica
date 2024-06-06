import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useState } from "react";
import { Image, Pressable, ScrollView } from "react-native";
import { Text } from "react-native";
import { ThemeContext } from "@/ctx/ThemeContext";
import { SvgXml, Use } from "react-native-svg";
import Typography from "@/constants/Typography";
import { View } from "react-native";
import Button from "@/components/UI/Button";
import {
  applePayDark,
  applePayLight,
  googlePay,
  masterCardDark,
  masterCardLight,
  paypal,
} from "@/components/UI/Icons";
import PaymentChooseInputCard from "@/components/UI/PaymentChooseContainer/PaymentChooseInputCard";
import { PaymentMethods } from "@/constants/PaymentMethods";
import PaymentChooseContainer from "@/components/UI/PaymentChooseContainer/Index";
import { router } from "expo-router";
import React from "react";

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
          title="Add New Card"
          onPress={() => router.push("(app)/ActionMenu/Booking/AddNewCard")}
          type="light"
        />
        <Button
          title="Next"
          onPress={() => {
            router.push("(app)/ActionMenu/Booking/reviewSummary");
          }}
          style={{ marginTop: "auto" }}
        />
      </ScrollView>
    </>
  );
}
