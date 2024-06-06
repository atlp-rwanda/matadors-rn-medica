import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, View, ScrollView, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { Dropdown } from "react-native-element-dropdown";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { Colors } from "@/constants/Colors";
import {
  CalenderIcon,
  CalenderIconDark,
  DropDownIcon,
  DropDownIconDark,
  MessageIcon,
  MessageIconDark,
} from "@/assets/icons/Profile/Icons";
import Typography from "@/constants/Typography";
import { typedCountries } from "@/constants/Languages";
import { ThemeContext } from "@/ctx/ThemeContext";
import PhoneInput from "react-native-phone-number-input";
import CustomDropdown from "@/components/UI/Dropdown";

interface Props {}

const EditProfile: React.FC<Props> = () => {
  const [country, setCountry] = useState<string>("United States");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);
  const { theme } = useContext(ThemeContext);


  const countryNames: { label: string; value: string }[] = Object.keys(
    typedCountries
  ).map((key: string) => {
    return { label: typedCountries[key].name, value: typedCountries[key].name };
  });
  
  return (
    <ScrollView
      style={{
        backgroundColor:
          theme === "light" ? Colors.others.white : Colors.dark._1,
        height: "100%",
      }}
      contentContainerStyle={{
        height: "100%",
      }}
    >
      <View
        style={{
          gap: 20,
          paddingHorizontal: 20,
          paddingVertical: 20,
          height: "100%",
        }}
      >
        <Input placeholder="First Name" value="Andrew Ainsley" />
        <Input placeholder="Last Name" value="Andrew" />
        <Input
          placeholder="Birth Date"
          value="12/27/1995"
          rightElement={() => {
            return (
              <Pressable>
                <SvgXml
                  xml={theme === "light" ? CalenderIcon : CalenderIconDark}
                />
              </Pressable>
            );
          }}
        />
        <Input
          placeholder="Email"
          value="andrew_ainsley@yourdomain.com"
          rightElement={() => {
            return (
              <Pressable>
                <SvgXml
                  xml={theme === "light" ? MessageIcon : MessageIconDark}
                />
              </Pressable>
            );
          }}
        />
         <CustomDropdown
          placeholder="Select Country"
          items={countryNames}
          selectedValue={country}
          onValueChange={setCountry}
        />
        <View style={{  }}>
          <PhoneInput
            defaultValue={phone}
            defaultCode="US"
            layout="first"
            onChangeFormattedText={text => setPhone(text)}
            containerStyle={{ flexDirection: 'row', 
            alignItems: 'center',
            
            justifyContent:'center',borderRadius: 20,
            backgroundColor:
            theme === "light" ? Colors.grayScale._50 : Colors.dark._2,
            borderWidth: 0,
            width:'auto',
            height:56
            }}
            
          textContainerStyle={{  backgroundColor: 'transparent',
          }}
          codeTextStyle={[Typography.semiBold.medium,{color: theme==='light'? Colors.grayScale._900 : Colors.others.white}]}
          
          textInputStyle={[Typography.semiBold.medium,{color: theme==='light'? Colors.grayScale._900 : Colors.others.white}]}
          textInputProps={{
            placeholderTextColor: theme==='light'? Colors.grayScale._900 : Colors.others.white,
            
          }}
          />
        </View>

        <CustomDropdown
          placeholder="Gender"
          items={[
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
          ]}
          selectedValue={gender}
          onValueChange={setGender}
        />
        <View style={{ marginTop: "auto" }}>
          <Button
            title="Update"
            onPress={() => {}}
            shadowColor={Colors.main.primary._500}
            backgroundColor={Colors.main.primary._500}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  
  
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
