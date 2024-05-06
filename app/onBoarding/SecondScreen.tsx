import React, { useContext, useRef, useState } from 'react'
import { View, StyleSheet, FlatList, Animated, Image, Pressable, Text, SafeAreaView } from 'react-native'
import { Colors } from '@/constants/Colors'
import OnboardingComponent from '@/components/OnBoarding/OnboardingComponent';
import { ThemeContext } from '@/ctx/ThemeContext';

const  image = require("../../assets/images/OnBoardingImages/secondLightImg.png")
const darkImg = require("../../assets/images/OnBoardingImages/secondDarkImg.png")

const SecondScreen = () => {
    const {theme, changeTheme} = useContext(ThemeContext)

   return (
    <View>
        <OnboardingComponent 
        image={theme === "dark" ? darkImg : image}
        text="Health checks & consultations easily anywhere anytime"
        action="Next"
        direction="/onBoarding/ThirdScreen">

        <Text style={styles.dots}></Text>
        <Text style={[styles.dots, {width: 30, backgroundColor: Colors.main.primary._500}]}></Text>
        <Text style={styles.dots}></Text>
    </OnboardingComponent>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },
    dots: {
        width: 10,
        height: 10,
        backgroundColor: Colors.grayScale._300,
        borderRadius: 100,
        marginHorizontal: 3
    },
    
})

export default SecondScreen
