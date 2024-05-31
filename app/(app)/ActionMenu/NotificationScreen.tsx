import React, { ReactElement } from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, ScrollView, Pressable} from 'react-native'
import { Feather } from '@expo/vector-icons';
import Notficationtab from '@/components/Notficationtab';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
 import { SvgXml } from "react-native-svg"
import Typography from '@/constants/Typography';
import { close } from '@/assets/icons/close';
import { calendar } from '@/assets/icons/calendar1';
import { calendar2 } from '@/assets/icons/calendar2';
import { service } from '@/assets/icons/service';
import { wallet } from '@/assets/icons/wallet';
import data from "../../../data.json"
import { more } from '@/assets/icons/more';
import { MorewhiteIcon } from '@/assets/icons/MorewhiteIcon';
import { router } from 'expo-router';
import { ThemeContext } from '@/ctx/ThemeContext';
import { useContext } from 'react';

type iconName = 'close' | 'calendar' | 'calendar2' | 'service' | 'wallet'
interface iconMapping{
    [key :string]:ReactElement
}

export const iconMapping:iconMapping = {
    close: <SvgXml xml={close} />,
    calendar: <SvgXml xml={calendar} />,
    calendar2: <SvgXml xml={calendar2} />,
    service: <SvgXml xml={service} />,
    wallet:<SvgXml xml={wallet} />
};



function NotificationScreen() {
    const { theme, changeTheme } = useContext(ThemeContext)
    const containerStyle = theme === "dark" ? styles.containerDark : styles.containerLight
    const textColor = theme === "dark" ? styles.textDark : styles.textLight
    const iconColor = theme === 'dark' ? '#FFFFFF' : 'black'
    const moreIcon=theme==='dark'?MorewhiteIcon:more
    
    return (
        <SafeAreaView style={[styles.container,containerStyle]}>
            <View>
             <View style={styles.upper}>
            <View style={styles.upperInner}>
                        <View style={styles.upperLeft}>
                
                <Pressable onPress={()=>router.back()}>
                    <Ionicons name="arrow-back" size={24} color={iconColor} />
                </Pressable>
                <View style={styles.NotificationView}>
                    <Text style={[styles.Headstyle,textColor]}>Notification</Text>
                </View>
                 </View>
                        
              <View style={styles.moreView}>
                <SvgXml xml={moreIcon} />          
              </View>
              
               </View>     
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
             style={styles.scroll}
              contentContainerStyle={{
           
            // justifyContent: "center",
            // alignItems: 'center',
          }}
                    
            >
            <View style={styles.body}>
               <View style={styles.bodyInner}>
                            {data.notification.map((Notification, index) => {
                                const background=theme==="dark"?Notification.viewBackgroundDark:Notification.viewBackground
                                
                        return(
                 
                 <View key={index} style={styles.componentView}>
                                    <Notficationtab
                                        IconComponet={iconMapping[Notification.IconComponent]}
                                        viewBackground={background}
                                        timeFrame={Notification.timeFrame}
                                        time={Notification.time}
                                        notificationStatus={Notification.notificationStatus}
                                        sentenceOne={Notification.sentenceOne}
                                        sentenceTwo={Notification.sentenceTwo}
                                        sentenceThree={Notification.sentenceThree}
                                        btnVisibility={Notification.btnVisibility}
                                    />
                                </View>)
                   
            
                             } )}
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
        justifyContent: "center",
       
    },
    containerDark: {
        backgroundColor:"#181A20"
        
    },
    containerLight: {
         backgroundColor:"white"
    },
    textDark: {
        color:"white"
        
    },
    textLight: {
         color: "#212121",
        
        
    },
    upper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        marginBottom: "7%",
        marginTop: "18%",
    },
    upperInner: {
        width: "93%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    upperLeft: {
        display: "flex",
        flexDirection: "row",
        gap:15,
        width:"80%"  
    },
    body: {
        width: "100%",
        display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: 'center',
    },
    bodyInner: {
        width:"93%"
    },
    scroll: {
        width: "100%",    
    },
    moreView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        height: "100%",
    },
    more: {
        width: 30,
        height: 30,
        borderRadius:100,
        borderWidth: 2, 
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    Headstyle: {
        fontWeight: "bold",
        fontSize:20
    },
    NotificationView: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        height: "100%",
    },
    componentView: {
        marginBottom: "10%",
        width: "100%",
    }
    
})