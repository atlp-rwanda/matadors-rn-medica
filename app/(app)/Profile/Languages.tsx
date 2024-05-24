import LanguagesList from "@/components/Profile/LanguagesList";
import { countries } from "countries-list";
import {  ScrollView } from "react-native";
import { View } from "react-native";

export default function Languages() {
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
          <LanguagesList />
        </View>
      </ScrollView>
    </>
  );
}
