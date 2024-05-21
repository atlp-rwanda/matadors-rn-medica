import { BlueDownIcon } from "@/assets/icons/Profile/Icons";
import Accordion from "@/components/UI/Accordion";
import Search from "@/components/UI/Search";
import TagsContainer from "@/components/UI/Tags";
import Tag from "@/components/UI/Tags/Tag";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { useState } from "react";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export default function FAQ() {
  const [tags, setTags] = useState([
    "General",
    "Account",
    "Service",
    "Payment",
  ]);

  const [faqs, setFaqs] = useState([
    {
      title: "What is Medica?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "How to use Medica?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "How do I cancel an appointment?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "How do I save the recording?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "How do I exit the app?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "white",
          height: "100%",
        }}
        contentContainerStyle={{
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 20,
          paddingVertical: 20,
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 15, paddingHorizontal: 20 }}
        >
          <TagsContainer data={tags} />
        </ScrollView>

        <View
          style={{
            paddingHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Search onchange={() => {}} />
        </View>

        <View style={{ paddingHorizontal: 20, gap: 20 }}>
          {faqs.map((faq) => {
            return (
              <Accordion title={faq.title} description={faq.description} />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
