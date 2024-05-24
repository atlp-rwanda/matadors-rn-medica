import SelectPaymentCardListing from "@/components/Profile/SelectedPaymentCardListing";
import Button from "@/components/UI/Button";
import {
  applePayLight,
  googlePay,
  masterCardDark,
  masterCardLight,
  paypal,
} from "@/components/UI/Icons";
import PaymentChooseContainer from "@/components/UI/PaymentChooseContainer/Index";
import { Colors } from "@/constants/Colors";
import { PaymentMethods } from "@/constants/PaymentMethods";
import { ScrollView, View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function Payment() {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        paddingHorizontal: 20,
        height: "100%",
        backgroundColor: Colors.others.white,
        paddingVertical: 20,
      }}
    >
      <View style={{ height: "100%", gap: 20 }}>
        <SelectPaymentCardListing
          icon={() => {
            return <SvgXml xml={paypal} />;
          }}
          title="Paypal"
        />
        <SelectPaymentCardListing
          icon={() => {
            return <SvgXml xml={googlePay} />;
          }}
          title="Google Pay"
        />
        <SelectPaymentCardListing
          icon={() => {
            return <SvgXml xml={applePayLight} />;
          }}
          title="Apple Pay"
        />
        <SelectPaymentCardListing
          icon={() => {
            return <SvgXml xml={masterCardLight} />;
          }}
          title="•••• •••• •••• •••• 4679"
        />
        <SelectPaymentCardListing
          icon={() => {
            return <SvgXml xml={masterCardLight} />;
          }}
          title="•••• •••• •••• •••• 2766"
        />
        <SelectPaymentCardListing
          icon={() => {
            return <SvgXml xml={masterCardLight} />;
          }}
          title="•••• •••• •••• •••• 3892"
        />
        <Button
          title="Add New Card"
          onPress={() => {}}
          backgroundColor={Colors.main.primary._500}
          shadowColor={Colors.main.primary._500}
          style={{ marginTop: "auto" }}
        />
      </View>
    </ScrollView>
  );
}
