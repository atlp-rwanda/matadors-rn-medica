import React,{ReactElement, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, Pressable,ImageURISource} from 'react-native'
import Typography from '@/constants/Typography';
 import { SvgXml } from "react-native-svg"
interface DoctorComponentProps{
    imageSource: ImageURISource|number
    name: string,
    iconComponent: ReactElement,
    professionalTitle: string,
    hospital: string,
    star: ReactElement,
    rate: string,
    review:string
}
function DoctorComponent({imageSource,name,iconComponent,professionalTitle,hospital,star,rate,review}:DoctorComponentProps) {
    return (
        <View style={styles.outer}>
            <View style={styles.inner}>
                <View style={styles.profileView}>
                    <Image source={imageSource } />
                </View>
                <View style={styles.rightView}>
                    <View style={styles.rightViewInner}>
                    <View style={styles.upperRightView}>
                        <View style={styles.nameView}>
                            <Text  style={Typography.bold.xLarge}   >{ name}</Text>

                        </View>
                        <View style={styles.heartIconView}>
                            { iconComponent}


                        </View>
                    </View>
                    <View style={styles.horizontal}></View>
                    <View style={styles.lowerView}>
                        <View style={styles.professionalView}>
                            <View style={styles.proNameView}>
                                <Text style={styles.professionalTitle}>{ professionalTitle}</Text>


                            </View>
                            <View style={styles.separateView}>

                            </View>
                            <View style={styles.hospitalView}>
                                <Text style={styles.hospitalText}>{ hospital}</Text>

                            </View>
               
                        </View>
                        <View style={styles.reviewView}>
                            <View style={styles.starView}>
                                {star}

                            </View>
                            <View style={styles.rateView}>
                                <Text style={styles.rateText} >{rate}</Text>
                                

                            </View>
                            <View style={styles.allReviewView}>
                                <Text style={styles.allReviewText} >{review}</Text>
                                

                            </View>
                            

                        </View>

                    </View>
                    </View>

                </View>
           </View>
        </View>
    );
}

export default DoctorComponent;
const styles = StyleSheet.create({
    outer: {
        width: "95%",
        backgroundColor: "white",
        height: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor:"white",
        zIndex:1000
        
    },
    inner: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems:"center",
        height: "100%",
    },
    profileView: {
         width: "35%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems:"center"
    },
    rightView: {
        width: "60%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
        
    },
    rightViewInner: {
       width:"100%" 
    },
    upperRightView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom:"5%"
    },
    nameView: {
        
    },
    professionalTitle: {
        color: "#424242",
        fontWeight: "300",
        fontSize:16
    },
    hospitalText: {
        color: "#424242",
        fontWeight: "300",
        fontSize: 16
    },
    name: {
        color: "#212121",
        fontWeight: "bold",
        fontSize: 18,
        
    },
    heartIconView: {
        
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    lowerView: {
        
    },
    professionalView: {
       display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        marginBottom: "5%",
    },
    proNameView: {
        
    },
    separateView: {
        height: 15,
        width: 2,
        backgroundColor:"#616161"
    },
    hospitalView: {
        
    },
    horizontal: {
        width: "100%",
        borderWidth: 1,
        borderColor:"#EEEEEE",
        marginBottom: "5%",
         backgroundColor:"#EEEEEE"
    },
    reviewView: {
       display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width:"80%"
    },
    
    starView: {
        
    },
    rateText: {
      color:"#424242"  
    },
    rateView: {
        
    },
    allReviewText: {
         color:"#424242"
    },
    allReviewView: {
        
    }
})