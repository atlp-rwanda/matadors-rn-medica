import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, ScrollView} from 'react-native'
import { Feather } from '@expo/vector-icons';
import Notficationtab from '@/components/Notficationtab';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
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
              <View style={styles.more}>
                    <Feather name="more-horizontal" size={24} color="black" />
                    </View>  
               </View>     
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
             style={styles.scroll}
              contentContainerStyle={{
            alignItems: "center", // Centers items vertically in the ScrollView
            justifyContent:"center"
          }}
                    
            >
            <View style={styles.body}>
               
                <View style={styles.componentView}>
                    <Notficationtab
                        IconComponet={<AntDesign name="closesquare" size={24} color="#FF6078" />}
                        viewBackground='#FEF1F1'
                        timeFrame="Today"
                        time="15:36 PM"
                        notificationStatus="Appointment Canceled"
                        sentenceOne='You have successfully canceled your appointment with Dr.'
                        sentenceTwo='Alan Watson on December 24, 2024, 13:00 p.m.80% of the'
                        sentenceThree='funds will be returned to your account.'
                    />
                </View>
                <View style={styles.componentView}>
                    <Notficationtab
                        IconComponet={<MaterialCommunityIcons name="calendar-month-outline" size={24} color="#25C1A2" />}
                        viewBackground='#F1F9F1'
                        timeFrame="Yesterday "
                        time=" 15:36 PM"
                        notificationStatus="Schedule Changed"
                        sentenceOne='You have successfully changed schedule an appointment'
                        sentenceTwo=' with Dr. Alan Watson on December 24, 2024, 13:00 pm.'
                        sentenceThree='Dont forget to activate your reminder.'      
                    />
                </View>
                <View style={styles.componentView}>
                    <Notficationtab
                        IconComponet={<MaterialCommunityIcons name="calendar-month-outline" size={24} color="#2E72FD" />}
                        viewBackground='#EDF3FF'
                        timeFrame="19 Dec .2022"
                        time=" 18:35 PM"
                        notificationStatus="Appointment Success"
                        sentenceOne='You have successfully canceled your appoin'
                        sentenceTwo='Alan Watson on December 24, 2024, 13:00 p.m.80% of the'
                        sentenceThree='funds will be returned to your account.'
                        btnVisibility='none' 
                    />
                </View>
                <View style={styles.componentView}>
                    <Notficationtab
                        IconComponet={<MaterialCommunityIcons name="calendar-month-outline" size={24} color="#2E72FD" />}
                        viewBackground='#FFF7EB'
                        timeFrame="19 Dec .2022"
                        time=" 18:35 PM"
                        notificationStatus="New Services Available!"
                        sentenceOne='You have successfully canceled your appoin'
                        sentenceTwo='Alan Watson on December 24, 2024, 13:00 p.m.80% of the'
                        btnVisibility='none'
                        
                    />
                </View>
                 <View style={styles.componentView}>
                    <Notficationtab
                        IconComponet={<Octicons name="credit-card" size={24} color="#3E7DFE" />}
                        viewBackground='#EDF3FF'
                        timeFrame="19 Dec .2022"
                        time=" 18:35 PM"
                        notificationStatus="Credit Card Connected"
                        sentenceOne='You have successfully canceled your appoin'
                        sentenceTwo='Alan Watson on December 24, 2024, 13:00 p.m.80% of the'
                        btnVisibility='none'
                        
                    />
                </View>
            </View>
            </ScrollView>
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
    }
    
})