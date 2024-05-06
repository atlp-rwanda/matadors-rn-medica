import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, ScrollView} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DoctorComponent from '@/components/DoctorComponent';
import { FontAwesome } from '@expo/vector-icons';
function NotificationScreen() {
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
             <View style={styles.upper}>
            <View style={styles.upperInner}>
            <View style={styles.upperLeft}>
                <View>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </View>
                <View style={styles.NotificationView}>
                    <Text style={styles.Headstyle}>Notification</Text>
                </View>
              </View>
              <View style={styles.rightView}>
             <View>
              <AntDesign name="search1" size={24} color="black" />                  
            </View>            
              <View style={styles.more}>
                    <Feather name="more-horizontal" size={24} color="black" />
               </View>           
              </View>         
               
               </View>     
                </View>
                <View>
                    <DoctorComponent
                        
                     imageSource={{uri:"../../../assets/images/Doctor1.png"}}
                        name="Dr. Travis Westaby"
                        iconComponent={<FontAwesome name="heart" size={24} color="black" />}
                        professionalTitle="Cardiologist"
                        hospital="Alka Hospital"
                        star={<FontAwesome name="star-half-o" size={24} color="black" />}
                        review="(4,5050 Reviews)"
                        rate="4.5"
   
                    />

                </View>
            
           </View>
        </SafeAreaView>
        
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height:"100%",
        display: "flex",
        flexDirection: "row",
        justifyContent:"center"
    },
    upper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
         marginBottom: "6%",
        marginTop:"8%"
    },
    upperInner: {
        width: "98%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    upperLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width:"80%"  
    },
    body: {
        width:"98%",
    },
    scroll: {
        width: "100%",
    },
    more: {
        width: 30,
        height: 30,
        borderRadius:100,
        marginTop: 10,
        borderWidth:2
        
    },
    Headstyle: {
        color: "#212121",
        fontWeight: "bold",
        fontSize:20
    },
    NotificationView: {
        width:"80%"
    },
    componentView: {
       marginBottom:"10%" 
    },
    rightView: {
        display: "flex",
        flexDirection:"row"
    }
    
})