import FriendsListing from "@/components/Profile/FriendsListing";
import { ScrollView, View } from "react-native";

export default function InviteFriends() {
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "white",
          height: "100%",
        }}
        contentContainerStyle={{}}
      >
        <View
          style={{
            gap: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
            height: "100%",
          }}
        >
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-1.png")}
            name="Alfonzo Schuessler"
            phone="+1-300-555-0119"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse.png")}
            name="Annabel Rohan"
            phone="+1-202-555-0136"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-2.png")}
            name="Augustina Midgett"
            phone="+1-300-555-0161"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-3.png")}
            name="Augustina Midgett"
            phone="+1-300-555-0161"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-4.png")}
            name="Freida Varnes"
            phone="+1-300-555-0136"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-5.png")}
            name="Geoffrey Mott"
            phone="+1-202-555-0119"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-4.png")}
            name="Freida Varnes"
            phone="+1-300-555-0136"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-5.png")}
            name="Geoffrey Mott"
            phone="+1-202-555-0119"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-2.png")}
            name="Augustina Midgett"
            phone="+1-300-555-0161"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-3.png")}
            name="Augustina Midgett"
            phone="+1-300-555-0161"
          />
          <FriendsListing
            imageUrl={require("@/assets/images/Friends/Ellipse-4.png")}
            name="Freida Varnes"
            phone="+1-300-555-0136"
          />
        </View>
      </ScrollView>
    </>
  );
}
