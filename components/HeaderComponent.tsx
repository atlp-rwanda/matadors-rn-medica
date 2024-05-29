import React,{ReactElement, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, Pressable,ImageURISource} from 'react-native'
import Typography from '@/constants/Typography';
import { SvgXml } from "react-native-svg"
import { search } from '@/assets/icons/search';
import { more } from '@/assets/icons/more';
import { leftArrow } from '@/assets/icons/left';
import { router } from 'expo-router';
import { ThemeContext } from '@/ctx/ThemeContext';
import { useContext } from 'react';
import { searchWhiteIcon } from '@/assets/icons/SearchWhiteIcon';
import { LeftArrowWhite } from '@/assets/icons/LeftArrowWhite';
import { moreWhiteIcon } from '@/assets/icons/MoreWhite';

interface Headerprops{
    onSearchPressed: () => void,
    headerText:string
}

function HeaderComponent({ onSearchPressed, headerText }: Headerprops) {
    const { theme, changeTheme } = useContext(ThemeContext)
    changeTheme("light")
    const leftArrowIcon = theme === "dark" ? LeftArrowWhite : leftArrow
    const searchIcon = theme === "dark" ? searchWhiteIcon : search
    const moreIcon = theme === "dark" ? moreWhiteIcon : more
    const headerColor=theme==="dark"?styles.whiteHeader:styles.greyHeader
    
    return (
        <View style={styles.upperInner}>
            <View style={styles.upperLeft}>
                <Pressable onPress={()=>router.back()}>
                    <SvgXml xml={leftArrowIcon} />
                </Pressable>
                <View style={styles.NotificationView}>
                    <Text style={[styles.Headstyle,headerColor]}>{ headerText}</Text>
                 </View>  
              </View>
              <View style={styles.rightView}>
             <Pressable onPress={onSearchPressed} style={styles.searchView}>
              <SvgXml xml={searchIcon} />                 
            </Pressable>
             <View style={styles.moreOuter}>
                      
                <SvgXml xml={moreIcon} /> 
                 </View>                   
              </View>         
               
               </View>     
    );
}

export default HeaderComponent;

const styles = StyleSheet.create({
    
    upper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
         marginBottom: "5%",
        marginTop: "12%",
    },
    searchComponent: {
        
    },
    upperInner: {
        width: "95%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    upperLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "70%",
        height:"100%",
    },
    searchView: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    moreOuter: {
       display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    Headstyle: {
        fontWeight: "bold",
        fontSize:20
    },
    whiteHeader: {
        color:"white"
        
    },
    greyHeader: {
        color:"#212121"
        
    },
    NotificationView: {
        width:"80%"
    },
    rightView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width:"25%"
    },
   
    
})