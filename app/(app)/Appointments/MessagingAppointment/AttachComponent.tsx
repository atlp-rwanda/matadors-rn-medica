import Typography from '@/constants/Typography'
import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const AttachComponent = () => {
  return (
    <View style={{flexDirection: "row", gap: 20, alignItems: 'center', justifyContent: "center"}}>
      <View style={styles.card}>
        <Image source={require("@/assets/images/documentImg.png")}/>
        <Text style={[Typography.semiBold.large,styles.text]} >Document</Text>
      </View>
      <View style={styles.card}>
        <Image source={require("@/assets/images/garellyImg.png")}/>
        <Text style={[Typography.semiBold.large,styles.text]} >Gallery</Text>
      </View>
      <View style={styles.card}>
        <Image source={require("@/assets/images/audioImg.png")}/>
        <Text style={[Typography.semiBold.large,styles.text]} >Audio</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    gap: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  }
})

export default AttachComponent
