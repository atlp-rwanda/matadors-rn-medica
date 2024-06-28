










import React, { useContext, useState, useEffect } from "react";
import { Pressable, StyleSheet, View, ScrollView, Text, FlatList, Platform } from "react-native";
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
import { supabase } from "@/lib/supabase";
import { fetchPatientData, getPatientData } from "@/utils/LoggedInUser";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateInputPicker from "@/components/UI/DateInputPicker";

interface PatientData {
  id?: string;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  email?: string;
  country?: string;
  phone?: string;
  gender?: string;
}

function EditProfile() {
  const [value, setValue] = useState<string>("____United States");
  const [isFocus, setIsFocus] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [userData, setUserData] = useState<any[]>([]);
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("");


  useEffect(() => {
    getPatientData(supabase, setUserData);
  }, []);

  useEffect(() => {
    const id: string = userData?.id;
    if (id) {
      fetchPatientData(id, setPatientData);
    }
  }, [userData]);

  useEffect(() => {
    if (patientData?.date_of_birth) {
      setDate(new Date(patientData.date_of_birth));
    }
  }, [patientData]);

  const handleInputChange = (name: string, value: string) => {
    setPatientData((prevPatientData) => ({
      ...prevPatientData,
      [name]: value,
    }));
  };
  const handleFirst_nameChange = (name: string, value: string) => {
    setPatientData((prevFirst_name) => ({
      ...prevFirst_name,
      [name]: value,
    }));
  };

  const handlelast_nameChange = (name: string, value: string) => {
    setPatientData((prevlast_name) => ({
      ...prevlast_name,
      [name]: value,
    }));
  };

  const updatePatientData = async () => {
    if (!patientData || !userData) return;

    const { id } = userData;
    const { data, error } = await supabase
      .from("patients")
      .update({
        first_name: patientData.first_name || "",
        last_name: patientData.last_name || "",
        date_of_birth: new Date(patientData.date_of_birth || ""),
        country: patientData.country || "United States",
        phone: patientData.phone || "",
        gender: patientData.gender || "",
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating patient data:", error);
    } else {
      console.log("Patient data updated:", data);
    }
  };

  console.log(patientData);
  const countryNames: { label: string; value: string }[] = Object.keys(
    typedCountries
  ).map((key: string) => {
    return { label: typedCountries[key].name, value: typedCountries[key].name };
  });

  if (!patientData) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {patientData && userData && (
        <FlatList
          data={patientData}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor:
                  theme === "light" ? Colors.others.white : Colors.dark._1,
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
                <Input
                  placeholder="First Name"
                  value={item?.first_name}
                  name="first_name"
                  onChange={handleFirst_nameChange}
                /><Input
                  placeholder="Last Name"
                  value={item?.last_name}
                  name="last_name"
                  onChange={handlelast_nameChange}
                />
                <DateInputPicker />
                {/* <View>
                  <Pressable onPress={showDatepicker}>
                    <Input
                      placeholder="Birth Date"
                      name="date_of_birth"
                      value={formatDate(date)}
                      onChange={(item) => {
                        handleInputChange("date_of_bibrth", item?.date_of_birth)
                        setIsFocus(false);
                      }}
                      editable={false}
                      rightElement={() => (
                        <SvgXml xml={theme === "light" ? CalenderIcon : CalenderIconDark} />
                      )}
                    />
                  </Pressable>
                  {show && (
                    <DateTimePicker
                      value={date}
                      mode="date"
                      display="default"
                      onChange={onChange}
                    />
                  )}
                </View> */}
                <Input
                  placeholder="Email"
                  value={userData?.email}
                  name="email"
                  onChange={handleInputChange}
                  rightElement={() => {
                    return (
                      <Pressable>
                        <SvgXml
                          xml={
                            theme === "light" ? MessageIcon : MessageIconDark
                          }
                        />
                      </Pressable>
                    );
                  }}
                />
                <Dropdown
                  style={{
                    backgroundColor:
                      theme === "light" ? Colors.grayScale._50 : Colors.dark._2,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 20,
                  }}
                  placeholderStyle={[Typography.semiBold.medium]}
                  selectedTextStyle={[
                    Typography.semiBold.medium,
                    {
                      color:
                        theme === "light"
                          ? Colors.grayScale._900
                          : Colors.others.white,
                    },
                  ]}
                  containerStyle={{
                    borderRadius: 20,
                    backgroundColor:
                      theme === "light" ? Colors.others.white : Colors.dark._2,
                    borderWidth: 0,
                  }}
                  inputSearchStyle={{
                    height: 40,
                    fontSize: 16,
                    borderRadius: 10,
                  }}
                  data={countryNames}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select item" : "..."}
                  searchPlaceholder="Search..."
                  value={item?.country}
                  search
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    handleInputChange("country", item.value)
                    setIsFocus(false);
                  }}
                  renderRightIcon={() => (
                    <SvgXml
                      xml={theme === "light" ? DropDownIcon : DropDownIconDark}
                    />
                  )}
                  itemTextStyle={{
                    color:
                      theme === "light"
                        ? Colors.grayScale._900
                        : Colors.others.white,
                  }}
                />
                <Input
                  placeholder="+250"
                  value={item?.phone}
                  name="phone"
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Gender"
                  value={item?.gender}
                  name="gender"
                  onChange={handleInputChange}
                />
                <View style={{ marginTop: "auto" }}>
                  <Button
                    title="Update"
                    onPress={updatePatientData}
                    shadowColor={Colors.main.primary._500}
                    backgroundColor={Colors.main.primary._500}
                  />
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={{
            height: "100%",
          }}
        />
      )}
    </>
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