import React,{ReactElement, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, Pressable,ImageURISource} from 'react-native'
import Typography from '@/constants/Typography';
import { SvgXml } from "react-native-svg"
import { search } from '@/assets/icons/search';
import { more } from '@/assets/icons/more';
import { leftArrow } from '@/assets/icons/left';
import { router } from 'expo-router';

interface Headerprops{
    onSearchPressed: () => void,
    headerText:string
}

function HeaderComponent({onSearchPressed,headerText}:Headerprops) {
    return (
        <View style={styles.upperInner}>
            <View style={styles.upperLeft}>
                <Pressable onPress={()=>router.back()}>
                    <SvgXml xml={leftArrow} />
                </Pressable>
                <View style={styles.NotificationView}>
                    <Text style={styles.Headstyle}>{ headerText}</Text>
                 </View>  
              </View>
              <View style={styles.rightView}>
             <Pressable onPress={onSearchPressed} style={styles.searchView}>
              <SvgXml xml={search} />                 
            </Pressable>
             <View style={styles.moreOuter}>
                      
                <SvgXml xml={more} /> 
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
        marginTop: "8%",
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
        color: "#212121",
        fontWeight: "bold",
        fontSize:20
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