import React,{ReactElement, useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, Image, View,Animated, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, Pressable,ImageURISource} from 'react-native'
import Typography from '@/constants/Typography';
import { SvgXml } from "react-native-svg"
import { blueheart } from '@/assets/icons/blueHeart';
import { star } from '@/assets/icons/star';
import Removebtn from './Removebtn';
import { overlay } from 'react-native-paper';
import DoctorComponent from './DoctorComponent';

interface imageMapProp{
    [key:string]:ReturnType<typeof require>
}
interface iconMappingProp{
    [key :string]:ReactElement
}


interface RemovefavoritepopProps{
    visible: boolean,
    onClose: () => void,
    cancel: () => void,
    doctor:any
}
export const iconMapping:iconMappingProp = {
    heart: <SvgXml xml={blueheart} />,
    star: <SvgXml xml={star} />,
}
const imageMap: imageMapProp = {
    'doctor1.png': require("../assets/images/Doctors/doctor1.png"),
    'doctor2.png': require("../assets/images/Doctors/doctor2.png"),
    'doctor3.png': require("../assets/images/Doctors/doctor3.png"),
    'doctor4.png': require("../assets/images/Doctors/doctor4.png"),
    'doctor5.png':require("../assets/images/Doctors/doctor5.png")

}


function RemovefavoritePopup({ visible, onClose, cancel, doctor }: RemovefavoritepopProps) {
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
                    <View style={styles.intro}><Text style={styles.introText}>Remove From Favorites?</Text></View>
                    <View style={styles.horizontal}></View>
                    <View style={styles.displayComponent}>
                        
                        <View  style={styles.componentView}>
                                        <DoctorComponent

                                            imageSource={imageMap[doctor.imageSource]}
                                            name={doctor.name}
                                            iconComponent={iconMapping[doctor.iconComponent]}
                                            professionalTitle={doctor.professionalTitle}
                                            hospital={doctor.hospital}
                                            star={iconMapping[doctor.star]}
                                            review={doctor.review}
                                            rate={doctor.rate}
                                            remove={()=>handleRemove(doctor)}

                                        />
                                    </View>
                </View>
                <View style={styles.btnView}>
                    <Removebtn
                        action={cancel} 
                        backColor="#E9F0FF"
                        text="Cancel"
                        textColor="#246BFD"

                    />
                    <Removebtn
                        action={() => console.log("remove")}
                        backColor='#246BFD'
                        text="Yes,Remove"
                        textColor="white"
                    
                    
                    
                    
                    />
                </View>

            </View>
           

        </Animated.View>
        </SafeAreaView>
    );
}

export default RemovefavoritePopup;

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
        flexDirection: 'row',
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