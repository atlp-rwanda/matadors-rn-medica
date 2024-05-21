import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ColorSchemeName,
    Appearance
  } from "react-native";
  import React, { useContext, useState } from "react";
  import Typography from "@/constants/Typography";
  import { ThemeContext } from "@/ctx/ThemeContext";
  import { backArrowBlack, backArrowWhite } from "@/components/UI/icons/backArrow";
  import { SvgXml } from "react-native-svg";
  import StarRating from "react-native-star-rating-widget";
  import { DivLine } from "@/assets/icons/DivLine";
  import { RadioButton } from "react-native-paper";
  import { StatusBar } from "expo-status-bar";
  import { router } from "expo-router";
  import Popup from "./Popup";
  
  const ReviewBlankform: React.FC = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    changeTheme("light");
    const [rating, setRating] = useState(0);
    const [value, setValue] = useState("first");
    const [showPopup, setShowPopup] = useState(false);
    const ColorScheme = Appearance.getColorScheme(); 
    const submitHandler = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
          gap: 18,
          padding: 20,
        }}
      >
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'}/>
        <View style={{ flexDirection: "row", alignSelf: "flex-start", gap: 12 }}>
  
          <TouchableOpacity onPress={()=> router.back()}>
            <View>
               <SvgXml xml={theme === 'dark' ? backArrowWhite : backArrowBlack} /> 
            </View>
          </TouchableOpacity>
          
          <Text style={[Typography.heading._4, {color: theme === 'dark' ? '#FFFFFF' : '#212121'}]}>
            Write a Review
          </Text>
        </View>
        <View style={{ gap: 24, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("@/assets/images/Drake.png")} />
          <Text
            style={[
              Typography.heading._5,
              { color: theme === "dark" ? "#FFFFFF" : "#212121", width: 260 },
            ]}
          >
            How was your experience with Dr. Drake Boeson?
          </Text>
        </View>
  
        <View>
          <StarRating
            rating={rating}
            onChange={setRating}
            maxStars={5}
            starSize={40}
            color="#246BFD"
            emptyColor="#246BFD"
          />
        </View>
  
        <View>
          <SvgXml xml={DivLine} />
        </View>
  
        <View style={{ alignSelf: "flex-start", gap: 16 }}>
          <Text
            style={[
              Typography.heading._5,
              { color: theme === "dark" ? "#FFFFFF" : "#212121" },
            ]}
          >
            Write Your Review
          </Text>
          <KeyboardAvoidingView
          keyboardVerticalOffset={60}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <TextInput
            multiline={true}
            numberOfLines={7}
            placeholder="Your review here..."
            placeholderTextColor={theme === "dark" ? "#FFFFFF" : "#212121"}
            style={[{
             padding: 20,
              height: 120,
              width: 360,
              borderRadius: 16,
              backgroundColor: theme === "dark" ? "#1F222A" : "#FAFAFA",
              color: theme === "dark" ? "#FFFFFF" : "#212121",
              textAlignVertical:'top',
              gap: 12,
              
            }]}
          />
          </KeyboardAvoidingView>

        </View>
  
        <View style={{ gap: 10, alignSelf: "flex-start" }}>
          <Text
            style={[
              Typography.heading._5,
              { color: theme === "dark" ? "#FFFFFF" : "#212121" },
            ]}
          >
            Would you recommend Dr. Drake Boeson to your friends?
          </Text>
  
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <View style={{ flexDirection: "row", gap: 24 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="first"
                  color="#246BFD"
                  uncheckedColor="#246BFD"
                />
                <Text style={[Typography.semiBold.medium, {color: theme === 'dark' ? '#FFFFFF' : '#212121'}]}>Yes</Text>
              </View>
  
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="second"
                  color="#246BFD"
                  uncheckedColor="#246BFD"
                />
                <Text style={[Typography.semiBold.medium, {color: theme === 'dark' ? '#FFFFFF' : '#212121'}]}>No</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
  
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            style={{
              width: 164,
              height: 58,
              borderRadius: 100,
              padding: 16,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme === "dark" ? "#35383F" : "#E9F0FF",
            }}
            onPress={() => router.push('Appointments')}
          >
            <Text
              style={[
                Typography.bold.large,
                { color: theme === "dark" ? "#FFFFFF" : "#246BFD" },
              ]}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 164,
              height: 58,
              borderRadius: 100,
              padding: 16,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#246BFD",
              shadowColor: '#246BFD',
              elevation: 4
            }}
            onPress={submitHandler}
          >
            <Text style={[Typography.bold.large, { color: "#FFFFFF" }]}>
              Submit
            </Text>
          </TouchableOpacity>
  
          
        </View>
        <Popup message="Review Successful!" bigMessage="Your review has been successfully submitted, thank you very much!" show={showPopup} onClose={closePopup} />
      </View>
    );
  };
  
  export default ReviewBlankform;
  
  const styles = StyleSheet.create({
    darkKeyboard: {
        backgroundColor: '#000000',
        color: '#ffffff',
      },
      lightKeyboard: {
        backgroundColor: '#ffffff',
        color: '#000000',
      },
  });
  