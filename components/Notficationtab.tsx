import React,{ReactElement, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, Pressable} from 'react-native'
import Typography from "@/constants/Typography";


interface notificatioTabProps{
        IconComponet?: ReactElement,
       viewBackground?: string,
       notificationStatus?: string,
    timeFrame?: string,
    time?: string,
    sentenceOne?: string,
    sentenceTwo?: string,
    sentenceThree?: string,
    btnVisibility?:string
    

    }

function Notficationtab({IconComponet,viewBackground,notificationStatus,timeFrame,time, sentenceOne,sentenceTwo,sentenceThree,btnVisibility}:notificatioTabProps) {
    
    return (
        <SafeAreaView>
            <View style={styles.outer}>
             <View style={styles.LeftView}>
              <View style={[styles.IconView, { backgroundColor:viewBackground}]}>
                {IconComponet}    
              </View>
              <View>
                    <Text style={styles.notificationStyle}>{notificationStatus }</Text>
                    <View style={styles.TimeView}><Text style={styles.timeStyle}>{timeFrame}</Text><View style={styles.separateView}></View><Text style={styles.timeStyle}>{time}</Text></View>
              </View>   
            </View>
            
             <View style={styles.btnView}>
                    <Pressable style={[styles.btn,{display:btnVisibility}]}>
                        <Text style={styles.btnText}>New</Text>
                  </Pressable>
             </View>
            </View>
             <View>
                        <Text style={styles.textStyle}>{sentenceOne}</Text>
                        <Text style={styles.textStyle}  >{sentenceTwo}</Text>
                        <Text  style={styles.textStyle} >{sentenceThree}</Text>
            </View>
       </SafeAreaView>
    );
}

export default Notficationtab;
const styles = StyleSheet.create({
    outer: {
        display: "flex",
        flexDirection: "row", 
        marginBottom: "6%",
        justifyContent:"space-between"
    },
    TimeView: {
        marginTop:9,
        display: 'flex',
        flexDirection: "row",
        gap:10,
        width: "70%",
        alignItems:"baseline"
    },
    LeftView: {
        width: "80%",
        height:60,
        display: "flex",
        flexDirection: 'row',
        gap: 13,
        
    },
    notificationStyle: {
        color: "#212121",
        fontSize: 18,
        fontWeight:'bold'
    },
    IconView: {
        width: 50,
        height: 50,
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
        
    },
    separateView: {
        height: 15,
        width: 2,
       backgroundColor:"#616161"
    },

    timeStyle: {
        color: "#616161",
        fontWeight: "300",
        fontSize:16
        
    },
    textStyle: {
        color:"#424242",
        fontFamily: "Regular",
        fontSize:12.7
       
    },
    btn: {
        backgroundColor: "#246BFD",
        borderRadius:10,
        width: 50,
        height: 30,
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    btnView: {
        width: "20%",
        height: 60,
        display: "flex",
        flexDirection:"row",
        justifyContent: "flex-end",
        alignItems:"center"
    },
    btnText: {
        color:"white"
    }
})