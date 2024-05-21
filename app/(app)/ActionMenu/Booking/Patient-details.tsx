import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PatientDetails = () => {
  const [text, setText] = useState("");
  const [height, setHeight] = useState(40);
  return (
    <>
      <ScrollView style={styles.Main}>
        <Pressable onPress={() => router.back()} style={styles.container}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={23} />
          </TouchableOpacity>
          <Text style={styles.fill}>Patient details</Text>
        </Pressable>
        <View style={styles.middle}>
          <Text style={styles.select}>Full Name</Text>
          <View style={styles.inputs11}>
            <TextInput
              style={styles.email1}
              placeholder="Andrew Ainsley"
              keyboardType="default"
              placeholderTextColor="#212121"
            />
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.select}>Gender</Text>
          {/* <Text>Gender</Text> */}

          <View style={styles.inputs1}>
            <TextInput
              style={styles.email}
              placeholder="Male"
              keyboardType="default"
              placeholderTextColor="#212121"
            />
            <Icon name="caret-down" size={20} style={styles.icon1} />
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.select}>Your Age</Text>
          {/* <Text>Gender</Text> */}

          <View style={styles.inputs1}>
            <TextInput
              style={styles.email}
              placeholder="27 years"
              keyboardType="default"
              placeholderTextColor="#212121"
            />
            <Icon name="caret-down" size={20} style={styles.icon1} />
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.select}>Write Your Problem</Text>
          {/* <Text>Gender</Text> */}

          <View style={styles.inputs1}>
            <TextInput
              value={text}
              onChangeText={(text) => setText(text)}
              style={styles.email}
              placeholder="type in your info"
              keyboardType="default"
              placeholderTextColor="#212121"
              multiline={true}
              numberOfLines={9}
              onContentSizeChange={(event) => {
                setHeight(event.nativeEvent.contentSize.height);
              }}
            />
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() =>
              router.push("(app)/ActionMenu/Booking/SelectPayment")
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: Colors.others.white,
    width: "100%",
    height: 900,
    padding: 20,
  },
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    height: 60,
  },
  icon1: {
    alignSelf: "center",
  },
  fill: {
    fontSize: 24,
    fontWeight: "600",
  },
  select: {
    fontSize: 16,
    fontWeight: "500",
  },
  middle: {
    marginTop: 10,
  },
  inputs11: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.grayScale._50,
    margin: 10,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email1: {
    fontSize: 15,
    color: Colors.grayScale._900,
    fontWeight: "400",
  },
  inputs1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.grayScale._50,
    margin: 10,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email: {
    fontSize: 15,
    color: Colors.grayScale._900,
    fontWeight: "400",
  },
  btn: {
    height: 150,
    justifyContent: "flex-end",
  },
  button: {
    width: 350,
    alignSelf: "center",
    backgroundColor: Colors.main.primary._500,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
  },
  buttonText: {
    alignSelf: "center",
    color: Colors.others.white,
    fontWeight: "bold",
  },
});
