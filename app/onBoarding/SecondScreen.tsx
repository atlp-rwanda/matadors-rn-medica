import React, {useContext, useState} from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { Colors } from '@/constants/Colors'
import OnboardingComponent from '@/components/OnBoarding/OnboardingComponent';
import { ThemeContext } from '@/ctx/ThemeContext';

const darkImg = require("../../assets/images/OnBoardingImages/secondLightImg.png")
const image = require("../../assets/images/OnBoardingImages/secondDarkImg.png")

const FirstScreen = () => {
    const {theme, changeTheme} = useContext(ThemeContext)

   return (
    <View style={styles.container}>
          <OnboardingComponent 
        image={theme === "dark" ? darkImg : image}
        text="Health checks & consultations easily anywhere anytime"
        action="Next"
        direction="/onBoarding/ThirdScreen"
    >
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
    },

    dots: {
        width: 10,
        height: 10,
        backgroundColor: Colors.grayScale._300,
        borderRadius: 100,
        marginHorizontal: 3
    },
})

export default FirstScreen
