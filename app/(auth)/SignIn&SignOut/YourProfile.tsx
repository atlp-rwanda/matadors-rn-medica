import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView, TextInput, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



const YourProfile = () =>{

    const [fullName, setFullName] = useState('');
    const [nickname, setNickname] = useState("");
    const [date, setDate] = useState('');
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState('');

    const handleFullNameChange = (text: string) => {
        setFullName(text);
      };
      const handleNicknameChange = (text: string) => {
        setNickname(text);
      };
    const handleDateChange = (text: string) => {
        setDate(text);
      };
    const handleEmailChange = (text: string) => {
        setEmail(text);
      };
      const handleGenderChange = (text: string) => {
        setGender(text);
      }; 
    
    return(
        <>
        <View style={styles.container}>
            <View style={styles.main}>
                <MaterialIcons name="arrow-back" size={25} style={styles.icon}/>
                <Text style={styles.fill}>Fill Your profile</Text>
            </View>
            <View style={styles.image}>
            <Image source={require('../../../assets/images/Edit-avatar.png')} style={styles.img}>
            </Image>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.inputs1}>
            <TextInput
                style={styles.email}
                placeholder="Full Name"
                keyboardType="default"
                placeholderTextColor="#9E9E9E"
                value={fullName}
                onChangeText={handleFullNameChange}
              />
              </View>
                <View style={styles.inputs1}>
            <TextInput
                style={styles.email}
                placeholder="Nickname"
                keyboardType="default"
                placeholderTextColor="#9E9E9E"
                value={nickname}
                onChangeText={handleNicknameChange}
              />
              </View>
                <View style={styles.inputs1}>
            <TextInput
                style={styles.email}
                value={date}
                keyboardType="numeric"
                placeholder="Date of Birth"
                placeholderTextColor="#9E9E9E"
                onChangeText={handleDateChange}
              />
              <Icon name="calendar" size={20} style={styles.icon} />
              </View>
                <View style={styles.inputs1}>
            <TextInput
                style={styles.email}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#9E9E9E"
                value={email}
                onChangeText={handleEmailChange}
              />
              <Icon name="envelope" size={20} style={styles.icon} />
              </View>
                <View style={styles.inputs1}>
            <TextInput
                style={styles.email}
                placeholder="Gender"
                keyboardType="email-address"
                placeholderTextColor="#9E9E9E"
                value={gender}
                onChangeText={handleGenderChange}
              />
              <Icon name="caret-down" size={25} style={styles.icon} />
              </View>
          <View style={styles.btn}>
            <TouchableOpacity
            onPress={()=> router.push("/(auth)/SignIn&SignOut/Create-NewPin")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
            </ScrollView>
        </View>
        </>
    )
};

export default YourProfile;

const styles = StyleSheet.create ({
    body:{
        padding: 0,
        margin: 0,
    },
    container:{
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        padding:20,
    },
    main:{
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "50%",
        height: "7%"
    },
    inputsFocused: {
      borderColor: "#246BFD",
      borderWidth: 2,
    },
    emailFocused: {
      color: "#ccc",
      fontSize: 16
    },
    scroll:{
      height: "70%"
    },
    icon:{
      alignSelf: "center",
        color: "#212121",
    },
    fill:{
        fontSize: 20,
        fontWeight: "500"
    },
    image:{
      top: 10,
      height: 215,
      width: '95%'
    },
    img:{
        alignSelf: "center",
        height: "90%",
        width: "55%"
    },
    inputs1: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#FAFAFA",
      margin: 10,
      marginTop: 30,
      marginBottom: 0,
      padding: 8,
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    email: {
      height: 40,
      // paddingLeft: 5,
      fontSize: 16,
    },
    btn: {
      marginTop: 48
    },
    button: {
      width: 350,
      alignSelf: "center",
      backgroundColor: "#246BFD",
      paddingTop: 18,
      paddingBottom: 18,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 100
    },
    buttonText: {
      alignSelf: "center",
      color: "#fff",
      fontWeight: "bold"
    },
})