import React from "react";
import { BlackDeleteIcon } from "@/components/UI/icons/deleteIcon"
import { BlackDownloadIcon } from "@/components/UI/icons/downloadIcon"
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SvgXml } from "react-native-svg"

interface MenuComponentProps {
  closeMenu: () => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({closeMenu})=>{

    return(
      <View style={{
        gap: 15,
        backgroundColor:Colors.others.white,
      }}>
        <TouchableOpacity style={styles.iconText}
        onPress={closeMenu}>
          <SvgXml xml={BlackDeleteIcon}/>
          <Text style={Typography.bold.medium}>Clear Chat</Text>
        </TouchableOpacity>
        <View style={{borderColor: "rgba(0, 0, 0,0.2 )", borderWidth: 0.3}}></View>
        <TouchableOpacity style={styles.iconText}
        onPress={closeMenu}>
          <SvgXml xml={BlackDownloadIcon} />
          <Text style={Typography.bold.medium}>Export Chat</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    iconText:{
        flexDirection: "row", 
        alignItems: "center",
        gap: 20
    }
  })

  export default MenuComponent