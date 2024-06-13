import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeContext } from "@/ctx/ThemeContext";
import DropDown from "@/components/UI/DropDown";
import Input from "@/components/UI/Input";
import Typography from "@/constants/Typography";
import TextArea from "@/components/UI/TextArea";
import Button from "@/components/UI/Button";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { err } from "react-native-svg";

const PatientDetails = () => {
  const [text, setText] = useState("");
  const [height, setHeight] = useState(40);
  const { theme, changeTheme } = useContext(ThemeContext);
  const {Doctor_id,hour,date,packageTitle,packagePrice} = useLocalSearchParams()
  const [loggeduser, setLoggedUser] = useState<string>()
  const [profile, setProfile] = useState<any>(null)
  const [patient_id,setPatient_id]=useState<string>()

  useEffect(() => {
    const fetchUser = async () => {
      
      const { data: { user },error } = await supabase.auth.getUser()
      if (error) {
        console.error("error fetching user")
      } else {
        setLoggedUser(user?.id)
      }
    }
    fetchUser()
   
  }, [loggeduser])
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (loggeduser) {
        const { data, error } = await supabase
          .from("patients")
          .select("*")
          .eq('auth_id', loggeduser)
          .single()
        if (error) {
          console.error("error while retrieving profile",error)
        } else {
          setProfile(data)
          setPatient_id(data.id)
          console.log(data)
         
        }
        
        
      }
    }
    fetchUserProfile()
  }, [loggeduser])
  console.log("this is profile:",profile)
  console.log("this is logged user:", loggeduser)
  console.log("this is patient_id:",patient_id)
  const handleInputChange = (name: string, value: string) => {
    setProfile({ ...profile, [name]: value });
  }

  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ScrollView
        style={{
          backgroundColor: theme === "light" ? "#FFFFFF" : "#181A20",
          width: "100%",
          padding: 20,
          flex: 1,
        }}
        contentContainerStyle={{
          gap: 20,
          flexGrow: 1,
        }}
      >
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Full Name
          </Text>
          <Input onChange={handleInputChange} placeholder="Full Names" value={`${profile?.first_name} ${profile?.last_name}`} name={`${profile?.first_name} ${profile?.last_name}`} />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Gender
          </Text>
          <DropDown
            data={[
               { value: `${profile?.gender}`, label:`${profile?.gender} ` },
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            defaultvalue={profile?.Gender}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Your Age
          </Text>
          <DropDown
            data={[
              { value: `${profile?.age} Years`, label:`${profile?.age} Years` },
              { value: "27 years", label: "27 years" },
              { value: "28 years", label: "28 years" },
             
            ]}
            defaultvalue={profile?.age}
          />
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text
            style={[
              Typography.bold.xLarge,
              {
                color:
                  theme === "light"
                    ? Colors.grayScale._900
                    : Colors.others.white,
              },
            ]}
          >
            Write Your Problem
          </Text>
          {/* <Input placeholder="Describe how you are feeling here ..."  /> */}
          <TextArea text={text} onChangeText={setText} />
        </View>

        <View
          style={{
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Button
            title="Next"
            onPress={() => {
              router.push({ pathname: "/(app)/ActionMenu/Booking/SelectPayment",params:{doctor_id:Doctor_id,hour:hour,date:date,packageTitle:packageTitle,packagePrice:packagePrice,problem:text,user_id:loggeduser,patient_id:patient_id} });
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({});
