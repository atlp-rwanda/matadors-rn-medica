import React from "react"
import { BlackDeleteIcon } from "@/components/UI/icons/deleteIcon"
import { BlackDownloadIcon } from "@/components/UI/icons/downloadIcon"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SvgXml } from "react-native-svg"
import {Colors} from "@/constants/Colors"

interface MenuComponentProps {
  closeMenu: () => void;
  method: string
}

const HistoryMenu: React.FC<MenuComponentProps> = ({closeMenu, method})=>{

    return(
      <View style={{
        gap: 15,
      }}>
         <TouchableOpacity style={styles.iconText}
        onPress={closeMenu}>
          <SvgXml xml={BlackDownloadIcon} />
          <Text>Download {method}</Text>
        </TouchableOpacity>
        <View style={{borderColor: "rgba(0, 0, 0,0.2 )", borderWidth: 0.3}}></View>
        <TouchableOpacity style={styles.iconText}
        onPress={closeMenu}>
          <SvgXml xml={BlackDeleteIcon}/>
          <Text style={{color: Colors.others.red}}>Delete {method}</Text>
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

  export default HistoryMenu