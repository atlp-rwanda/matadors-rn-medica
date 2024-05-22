import React from 'react';

import { MoreIcon } from "@/assets/icons/MoreCircleSvg";
import { SearchIcon } from "@/assets/icons/SearchSvg";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, TouchableOpacity } from "react-native";
import { Image, ImageBackground, Text, View, FlatList } from "react-native";
import { SvgXml } from "react-native-svg";
import NofoundComponent from "@/components/NofoundComponent";
import SearchComponent from "@/components/SearchComponent";

interface header{
    onSearchPressed: () => void,
    
}


function Historyheader({onSearchPressed}:header) {
    return (
        <View style={{ paddingTop: 20, gap: 30,width:"100%"}}>
        <View
          style={{
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{ backgroundColor: "transparent" }}
              source={require("@/assets/images/DefaultLogo.png")}
            />
            <Text
              style={[
                Typography.bold.large,
                { fontSize: 22, marginLeft: "3%" },
              ]}
            >
              History
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <TouchableOpacity onPress={onSearchPressed}>
              <SvgXml xml={SearchIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgXml xml={MoreIcon} />
            </TouchableOpacity>
          </View>
           
  

            </View>
           </View>
      
    );
}

export default Historyheader;