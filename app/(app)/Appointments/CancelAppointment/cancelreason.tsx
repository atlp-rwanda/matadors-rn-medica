import { useContext, useState } from "react";
import { ThemeContext } from "@/ctx/ThemeContext";
import { Pressable, View, StyleSheet,TextInput, TouchableOpacity,Image } from "react-native";
import { Text } from "@/components/Themed";
import { LeftArrow } from "@/components/UI/Icons";
import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { router } from "expo-router";
import { RadioButton } from 'react-native-paper';
import { useModal } from "@/ctx/ModalContext";
import React from "react";


export default function Selectreason(){
    const { theme, changeTheme } = useContext(ThemeContext);
    const [selectedValue, setSelectedValue] = useState('option1');
    const modal = useModal();
    
  function handlebackhome(){
    modal.hide();
    router.push('/(app)/Appointments');

  }


  async function handlemodal() {
    modal.show({
      children: (
        <View
          style={{
            padding: 40,
            alignItems: "center",
            gap: 20,
            borderRadius: 48,
            backgroundColor:
              theme === "light" ? Colors.others.white : Colors.dark._2,
          }}
        >
          <Image source={require("@/assets/images/cancelimg.png")} />
          <View
            style={{
              gap: 20,
              backgroundColor:
                theme === "light" ? Colors.others.white : Colors.dark._2,
            }}
          >
            <Text
              style={[
                Typography.heading._4,
                {
                  color: Colors.main.primary._500,
                  textAlign: "center",
                },
              ]}
            >
              Cancel Appointment Success!
            </Text>
            <Text
              style={[
                Typography.regular.large,
                {
                  textAlign: "center",
                  color:
                    theme === "light"
                      ? Colors.grayScale._900
                      : Colors.others.white,
                },
              ]}
            >
              We are very sad that you have canceled your appointment. We will always improve our service to satisfy you in the next appointment.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handlebackhome}>
              <Text
                style={[Typography.bold.large, { color: Colors.others.white }]}
              >
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  }
    return(
        <>
      <View style={theme === "dark" ? styles.containerdark : styles.container}>
      <Pressable onPress={()=> router.back()}
        style={theme === "dark" ? styles.headerdark : styles.header}>
          <LeftArrow
            fillColor={
              theme === "dark" ? Colors.others.white : Colors.grayScale._900
            }
          />
          <Text
            style={[
              Typography.heading._4,
              {
                color:
                  theme === "dark"
                    ? Colors.others.white
                    : Colors.grayScale._900,
              },
            ]}
          >
            Cancel Appointment
          </Text>
        </Pressable>
        <Text style={[Typography.heading._5,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white,alignSelf:"flex-start"}]}>Reason for Schedule Change</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option1"
        status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option1')}
        color={selectedValue === 'option1' ? Colors.main.primary._500 : Colors.main.primary._500}
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>I want to change to another doctor</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option2"
        status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option2')}
        color={ Colors.main.primary._500 }
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>I want to change package</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option3"
        status={selectedValue === 'option3' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option3')}
        color={ Colors.main.primary._500}
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>I don't want to consult</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option4"
        status={selectedValue === 'option4' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option4')}
        color={ Colors.main.primary._500}
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>I have recovered from the disease</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option5"
        status={selectedValue === 'option5' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option5')}
        color={ Colors.main.primary._500}
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>I have found a suitable medicine</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option6"
        status={selectedValue === 'option6' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option6')}
        color={ Colors.main.primary._500}
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>I just want to cancel</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option7"
        status={selectedValue === 'option7' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option7')}
        color={ Colors.main.primary._500}
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>I don't want to tell</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton 
        value="option8"
        status={selectedValue === 'option8' ? 'checked' : 'unchecked'}
        onPress={() => setSelectedValue('option8')}
        color={ Colors.main.primary._500}
        /><Text style={[Typography.medium.xLarge,{color: theme==='light'?  Colors.grayScale._900: Colors.others.white}]}>Others</Text>
      </View>
      {  selectedValue==='option8'? <TextInput
    multiline={true}
    numberOfLines={5}
    style={[Typography.semiBold.medium,{ width: '100%',height:200,backgroundColor: theme==='light'? Colors.grayScale._100: Colors.dark._2,borderRadius:16, }]}
    placeholder="Write Your other reason"
    placeholderTextColor={theme==='light'?  Colors.grayScale._900: Colors.others.white}
    

    /> :<></>}
      
      <TouchableOpacity
        onPress={handlemodal}
          style={{
            width: '100%',
            height: 58,
            borderRadius: 100,
            backgroundColor: Colors.main.primary._500,
            alignItems: "center",
            justifyContent: "center",
            
            
          }}
        >
          <Text style={[Typography.bold.large, { color: Colors.others.white }]} >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
        
        </>
    );
}
const styles = StyleSheet.create({
    itemcontainer: {},
  
    header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 20,
      alignItems: "center",
      marginTop: 60,
      backgroundColor: "transparent",
    },
    container: {
      
      gap: 20,
      alignItems: "flex-start",
      backgroundColor: Colors.grayScale._50,
      flex: 1,
      padding: 20,
    },
  
    headerdark: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 20,
      alignItems: "center",
      marginTop: 60,
      backgroundColor: "transparent",
    },
    containerdark: {
      gap: 20,
      backgroundColor: Colors.dark._1,
      alignItems: "flex-start",
      flex: 1,
      padding: 20,
    },
    btn: {
        backgroundColor: Colors.main.primary._500,
        textAlign: "center",
        alignItems: "center",
        padding: 18,
        borderRadius: 100,
        marginTop: 10,
      },
      btnText: {
        textAlign: "center",
        color: "white",
      },
  });
  