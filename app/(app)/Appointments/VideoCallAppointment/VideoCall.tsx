import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Pressable,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { BackArrow, Speaker, Record, hungup,BigVideoIcon,CameraIcon } from "@/components/Icons/Icons";
  import { SvgXml } from "react-native-svg";
  import  Typography  from "@/constants/Typography";
  import { router } from "expo-router";
  const VoiceCallRinging = () => {
    return (
      <>
        <ImageBackground
          style={styles.Background}
          resizeMode="cover"
          source={require("@/assets/images/Dr maria.png")}
        >
          <View style={styles.backArrow}>
            <TouchableOpacity onPress={()=> router.back()}>
               <SvgXml xml={BackArrow} />
            </TouchableOpacity>
           
          </View>
  
          <View style={styles.middlePart}>
            <View style={styles.patient}>
                   <Image source={require('@/assets/images/SinglePatient.png')} style={{width: 120, height: 180, borderRadius: 20}}/>

                   <TouchableOpacity style={{position:'relative', marginTop: '-27%',marginLeft: '72%'}}>
                   <SvgXml xml={CameraIcon} />
                   </TouchableOpacity>
                   
            </View>

            <View style={styles.middleText}>
                <Text style={[Typography.bold.xLarge, { color: "#FFFFFF" }]}>25:38 mins</Text>
                <Text style={[Typography.medium.medium, { color: "#FFFFFF" }]}>Video recording is active...</Text>
            </View>
          <View style={styles.Bottom}>
            <TouchableOpacity style={styles.speaker}>
              <SvgXml xml={Speaker} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.speaker}>
              <SvgXml xml={BigVideoIcon} />
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.Record}>
              <SvgXml xml={Record} />
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.hangup} onPress={()=> router.push('(app)/Appointments/Review/ReviewBlankform')}>
              <SvgXml xml={hungup} />
            </TouchableOpacity>
          </View>

          </View>
  

        </ImageBackground>
      </>
    );
  };
  
  export default VoiceCallRinging;
  
  const styles = StyleSheet.create({
    patient: {
        marginLeft: '70%',
        marginTop: '50%'
    },
    speaker:{
      backgroundColor: '#F0F0F0',
      borderRadius: 100,
      padding: 20,
      opacity: 0.6
    },
    Record:{
      backgroundColor: '#F0F0F0',
      borderRadius: 100,
      padding: 23,
      opacity: 0.6
    },
    hangup:{
      backgroundColor: '#F75555',
      borderRadius: 100,
      padding: 20,
  
    },
    Bottom: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    middlePart: {
      gap: 16,
    },
    middleText: {
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    backArrow: {
      alignSelf: "flex-start",
      marginTop: "5%"
    },
    Background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      gap: 210,
    },
  });