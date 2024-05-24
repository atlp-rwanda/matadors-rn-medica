import SwitchNotificationListing from "@/components/Profile/SwitchNotificationListing";
import { ScrollView, View } from "react-native";

export default function Notification() {
  return (
    <>
      <ScrollView
        style={{ backgroundColor: "white" }}
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          style={{
            gap: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
            height: "100%",
          }}
        >
          <SwitchNotificationListing
            title="General Notification"
            value={true}
          />
          <SwitchNotificationListing title="Sound" value={true} />
          <SwitchNotificationListing title="Special Offers" />
          <SwitchNotificationListing title="Proms & Discount" value={true} />
          <SwitchNotificationListing title="Payment" />
          <SwitchNotificationListing title="Cashback" value={true} />
          <SwitchNotificationListing title="App Updates" />
          <SwitchNotificationListing
            title="New Service Available"
            value={true}
          />
          <SwitchNotificationListing title="New Tips Available" value={true} />
        </View>
      </ScrollView>
    </>
  );
}
