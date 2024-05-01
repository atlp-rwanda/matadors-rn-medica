import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { LeftArrow } from "@/components/UI/icons";

export default function TabOneScreen() {
  return (
    <View style={{ backgroundColor: "royalblue" }}>
      <Text style={{ color: "crimson" }} lightColor="black" darkColor="white">
        Hello
      </Text>
      <Text lightColor="black" darkColor="white">
        Here
      </Text>
      <LeftArrow fillColor="#212121" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
