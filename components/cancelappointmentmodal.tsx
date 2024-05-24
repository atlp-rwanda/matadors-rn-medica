import React,{ReactElement, useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, Image, View,Animated, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, Pressable,ImageURISource} from 'react-native'
import Typography from '@/constants/Typography';
import { SvgXml } from "react-native-svg"
import { blueheart } from '@/assets/icons/blueHeart';
import { star } from '@/assets/icons/star';
import Removebtn from './Removebtn';
import { overlay } from 'react-native-paper';
import DoctorComponent from './DoctorComponent';
import { Colors } from '@/constants/Colors';
import { router } from "expo-router";
interface CancelProps{
    visible: boolean,

    cancel: () => void,

}

function Cancelappointment({ visible,  cancel }: CancelProps) {
    const [showpopUp, setShowPopup] = useState(false)
    const [selectedDoctor,setSelectedDoctor]=useState()
     const handleRemove = (doctor:any) => {
        setSelectedDoctor(doctor)
        
        setShowPopup(true)
    }
    const translateY = useRef(new Animated.Value(0)).current
    useEffect(() => {
        if (visible) {
            Animated.timing(translateY, {
                toValue: -1,
                duration: 300,
                useNativeDriver:true
            }).start()
        } else {
            Animated.timing(translateY, {
                toValue: 1,
                duration: 300,
                useNativeDriver:true
            }).start()
        }
    }, [visible])
    if(!visible) return null
    return (
        <SafeAreaView style={styles.overlay}>
        <Animated.View style={[styles.outer,{ transform: [{ translateY: translateY.interpolate({ inputRange: [-1, 1], outputRange: [0, 300] }) }] }]}>
            <View style={styles.inner}>
                    <View style={styles.intro}><Text style={[Typography.heading._4,{color:'#F75555'}]}>Cancel appointment</Text></View>
                    <View style={styles.horizontal}></View>
                    <View style={styles.displayComponent}>
                        
                        <View  style={styles.componentView}>
                                       <Text style={[Typography.medium.xLarge,{color: Colors.grayScale._900,textAlign:'center'}]}>
                                       Are you sure you want to cancel your appointment?
                                      
                                       </Text>
                                       <Text style={[Typography.medium.xLarge,{color: Colors.grayScale._900,textAlign:'center'}]}>

                                       Only 50% of the funds will be returned to your account.
                                       </Text>
                                    </View>
                </View>
                <View style={styles.btnView}>
                    <Removebtn
                        action={cancel} 
                        backColor="#E9F0FF"
                        text="Back"
                        textColor="#246BFD"

                    />
                    <Removebtn
                        action={() => router.push('/(app)/Appointments/CancelAppointment/cancelreason')}
                        backColor='#246BFD'
                        text="Yes,Cancel"
                        textColor="white"
                    
                    
                    
                    
                    />
                </View>

            </View>
           

        </Animated.View>
        </SafeAreaView>
    );
}

export default Cancelappointment;

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(80, 85, 94, 0.8)',
        justifyContent: 'flex-end',
         zIndex: 1000,
        
    },
    outer: {
        width: "100%",
        height: "40%",
        zIndex:1000,
        backgroundColor: '#FAFAFA',
        borderTopLeftRadius: 20,
         borderTopRightRadius: 20,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
       elevation: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        
    },
    intro: {
        width: "100%",
        height: 40,
        marginBottom:"5%",
        marginTop:"5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    introText: {
        color: "#212121",
        fontWeight: "bold",
        fontSize:20
    },
    inner: {  
        width: "90%",
        backgroundColor:"#FAFAFA"
    },
    displayComponent: {
        
    },
    btnView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center'      
    },
    componentView: {
        backgroundColor:"#FDFDFD",
        marginBottom: "5%",
        width: "100%",
        height: 150,
        borderRadius:20,
       display: "flex",
        textAlign:'center',
        gap:20,
        justifyContent: "center",
        alignItems: "center",
        zIndex:10000
    },
    horizontal: {
        width: "100%",
        borderWidth: 1,
        borderColor:"#EEEEEE",
        marginBottom: "6%",
         backgroundColor:"#EEEEEE"
    }

})