import React,{ReactElement, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, Pressable,ImageSourcePropType} from 'react-native'

interface DoctorComponentProps{
    imageSource: ImageSourcePropType
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
                    <View style={styles.upperRightView}>
                        <View style={styles.nameView}>
                            <Text>{ name}</Text>

                        </View>
                        <View style={styles.heartIconView}>
                            { iconComponent}


                        </View>
                    </View>
                    <View style={styles.lowerView}>
                        <View style={styles.professionalView}>
                            <View style={styles.proNameView}>
                                <Text>{ professionalTitle}</Text>


                            </View>
                            <View style={styles.separateView}>

                            </View>
                            <View style={styles.hospitalView}>
                                <Text>{ hospital}</Text>

                            </View>
               
                        </View>
                        <View style={styles.reviewView}>
                            <View style={styles.starView}>
                                {star}

                            </View>
                            <View style={styles.rateView}>
                                <Text>{rate}</Text>
                                

                            </View>
                            <View style={styles.allReviewView}>
                                <Text>{review}</Text>
                                

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
        width: "80%",
        backgroundColor: "white",
        height:"40%"
    },
    inner: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:"center"
        
    },
    profileView: {
        
    },
    rightView: {
        
    },
    upperRightView: {
        display: "flex",
        flexDirection: "row",
        justifyContent:'center'
    },
    nameView: {
        
    },
    heartIconView: {
        
    },
    lowerView: {
        
    },
    professionalView: {
       display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:"center"  
    },
    proNameView: {
        
    },
    separateView: {
        
    },
    hospitalView: {
        
    },
    reviewView: {
       display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:"center"  
    },
    starView: {
        
    },
    rateView: {
        
    },
    allReviewView: {
        
    }
})