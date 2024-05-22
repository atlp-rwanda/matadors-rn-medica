import {
  FacebookBlueIcon,
  HeadSetBlueIcon,
  InstagramBlueIcon,
  TwitterBlueIcon,
  WebsiteBlueIcon,
  WhatsappBlueIcon,
} from "@/assets/icons/Profile/Icons";
import ContactsListing from "@/components/Profile/ContactsListing";
import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/ctx/ThemeContext";
import { useContext } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

export default function ContactUs() {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView
      style={{
        backgroundColor:
          theme === "light" ? Colors.others.white : Colors.dark._1,
        height: "100%",
      }}
      contentContainerStyle={{
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ paddingHorizontal: 20, gap: 20 }}>
        <ContactsListing
          onPress={() => {}}
          icon={() => <SvgXml xml={HeadSetBlueIcon} />}
          title="Customer Service"
        />
        <ContactsListing
          onPress={() => {}}
          icon={() => <SvgXml xml={WhatsappBlueIcon} />}
          title="Whatsapp"
        />
        <ContactsListing
          onPress={() => {}}
          icon={() => <SvgXml xml={WebsiteBlueIcon} />}
          title="Website"
        />
        <ContactsListing
          onPress={() => {}}
          icon={() => <SvgXml xml={FacebookBlueIcon} />}
          title="Facebook"
        />
        <ContactsListing
          onPress={() => {}}
          icon={() => <SvgXml xml={TwitterBlueIcon} />}
          title="Twitter"
        />
        <ContactsListing
          onPress={() => {}}
          icon={() => <SvgXml xml={InstagramBlueIcon} />}
          title="Instagram"
        />
      </View>
    </ScrollView>
  );
}
