import { MoreIcon } from "@/assets/icons/MoreCircleSvg";
import {
  backArrowBlack,
} from "@/components/UI/icons/backArrow";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, Text, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import DoctorComponent from "../CardComponent";
import { BlueRightIconWithBg } from "@/components/UI/icons/rigthIcon";
import HistoryMenu from "../HistoryMenu";


const Ddata = {
    id: "1",
    image: require("@/assets/images/Dr maria.png"),
    method: "voice call",
    name: "dr Drake",
    message: "my pleasure all the best for your carrier life",
    day: "Today",
    time: "10:00 AM",
  };

const IndividualCall = () => {
const [menu, setMenu] = useState(false)
const [playBtn, setPlayBtn] = useState(false)

const handlePlayAudio = ()=> {
  setPlayBtn(!playBtn)
}

const handleMenu =()=> {
  setMenu(!menu)
}


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.others.white,
        flexDirection: "column",
        padding: 20,
        position: "relative"
      }}
    >
      <StatusBar style="dark" />
      <View style={{ paddingTop: 20, gap: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => router.back()}>
            <SvgXml xml={backArrowBlack} />
          </Pressable>
          <TouchableOpacity onPress={handleMenu}>
            <SvgXml xml={MoreIcon} />
          </TouchableOpacity>
        </View>
        {menu && (
          <View
            style={[
              {
                backgroundColor: Colors.others.white,
                borderRadius: 10,
                padding: 20,
                position: "absolute",
                right: 20,
                top: 50,
                zIndex: 1
              },
            ]}
          >
            <HistoryMenu closeMenu={handleMenu} method="Audio"/>
          </View>
        )}
        <View>
          <DoctorComponent
            imageSource={Ddata.image}
            name={Ddata.name}
            iconComponent={<SvgXml xml={BlueRightIconWithBg} />}
            method={Ddata.method}
            day={Ddata.day}
            time={Ddata.time}
          />
        </View>
        <Text>30 minutes of voice calls have been recorded.</Text>
        {
          !playBtn ? (
          <TouchableOpacity
            onPress={handlePlayAudio}
            style={{flexDirection: "row",gap: 20,alignItems: "center", justifyContent: "center", backgroundColor: Colors.main.primary._500, borderRadius: 100. }}>
            <SvgXml xml={BlueRightIconWithBg}/>
            <Text style={[Typography.bold.large,{color: Colors.others.white}]}>Play audio recording</Text>
        </TouchableOpacity>) : (
        <View style={{alignItems: "center", justifyContent: "space-between", gap: 20}}>
              <View style={{backgroundColor: Colors.main.primary._300, height: 100, width: 100}}></View>
              <View style={{flexDirection: "row", alignItems: "center", gap: 20}}>
                <TouchableWithoutFeedback>
                  <Text style={{paddingVertical: 20,paddingHorizontal: 70,backgroundColor: Colors.transparent.blue, color: Colors.main.primary._500, borderRadius: 100}}>Stop</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Text style={{paddingVertical: 20,paddingHorizontal: 70,backgroundColor: Colors.main.primary._500, color: Colors.others.white,borderRadius: 100}}>Pause</Text>
                </TouchableWithoutFeedback>
              </View>
        </View>)
        }
      </View>
    </View>
  );
};

export default IndividualCall;
