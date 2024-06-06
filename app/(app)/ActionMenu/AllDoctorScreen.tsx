import React, { ReactElement, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import DoctorComponent from "@/components/DoctorComponent";
import { SvgXml } from "react-native-svg";
import { WhiteHeart } from "@/components/UI/icons/WhiteHeart";
import { star } from "@/assets/icons/star";
import data from "../../doctors.json";
import HeaderComponent from "@/components/HeaderComponent";
import SearchComponent from "@/components/SearchComponent";
import FoundDoctorCount from "@/components/FoundDoctorCount";
import NofoundComponent from "@/components/NofoundComponent";
import RemovefavoritePopup from "@/components/RemovefavoritePopup";
import FilterPopup from "@/components/FilterSearchComponent";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "@/ctx/ThemeContext";
import { useContext } from "react";
import { supabase } from "@/lib/supabase";
import { Doctor } from "@/constants/Types";

const tableName = "doctors";

interface imageMapProp {
  [key: string]: ReturnType<typeof require>;
}

interface iconMappingProp {
  [key: string]: ReactElement;
}

interface categoryProp {
  name: string;
  Doctors: Doctor[];
}

export const iconMapping: iconMappingProp = {
  heart: <SvgXml xml={WhiteHeart} />,
  star: <SvgXml xml={star} />,
};

function DoctorScreen() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState(data.categories[0]);
  const [showpopUp, setShowPopup] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [showFilter, setShowfilter] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const { theme, changeTheme } = useContext(ThemeContext);
  const containerStyle =
    theme === "dark" ? styles.outerDark : styles.outerLight;
  const scrollbackColor =
    theme === "dark" ? styles.scrollDark : styles.scrollLight;

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from(tableName).select("*");

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }
      setDoctors(data);

      // console.log("Fetched data:", data);
    }

    fetchData();
  }, []);

  const handleSearchPressed = () => {
    setShowSearch(true);
  };
  const handleSearchSubmit = (text: string) => {
    setSearchTerm(text.toLowerCase());
  };

  const handleFilter = () => {
    setShowfilter(true);
  };
  const handleRemove = (doctor: any) => {
    setSelectedDoctor(doctor);

    setShowPopup(true);
  };

  const filteredDoctors =
    searchTerm.length > 0
      ? doctors.filter((doctor) =>
          doctor.last_name.toLowerCase().includes(searchTerm)
        )
      : doctors;
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <View>
        <View style={[styles.upper, containerStyle]}>
          {!showSearch ? (
            <HeaderComponent
              onSearchPressed={handleSearchPressed}
              headerText="Top Doctor"
            />
          ) : (
            <SearchComponent
              onSearchSubmit={handleSearchSubmit}
              filterAction={handleFilter}
            />
          )}
        </View>
        <View style={[styles.categoryBtnView, containerStyle]}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {data.categories.map((category, index) => (
              <Pressable
                key={index}
                style={[
                  styles.categoryBtn,
                  selectedCategory === category ? styles.firstCategoryBtn : {},
                ]}
              >
                <Text
                  style={[
                    styles.categoryBtnText,
                    selectedCategory === category
                      ? styles.firstCategoryBtnText
                      : {},
                  ]}
                >
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View style={styles.foundDoctorView}>
          {showSearch && <FoundDoctorCount count={filteredDoctors.length} />}
        </View>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[styles.scroll, scrollbackColor]}
            contentContainerStyle={{
              justifyContent: "center",
              //  alignItems: 'center',
              paddingBottom: 150,
              paddingTop: 20,
            }}
          >
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor: any, index: any) => (
                <View key={index} style={styles.componentView}>
                  <DoctorComponent
                    imageSource={{ uri: doctor.image }}
                    name={`${doctor.first_name} ${doctor.last_name}`}
                    iconComponent={<SvgXml xml={WhiteHeart} />}
                    professionalTitle={doctor.specialization}
                    hospital={doctor.hospital}
                    star={<SvgXml xml={star} />}
                    review={doctor.review}
                    rate={doctor.rate}
                    remove={() => handleRemove(doctor)}
                  />
                </View>
              ))
            ) : (
              <NofoundComponent />
            )}
          </ScrollView>
        </View>
      </View>
      <RemovefavoritePopup
        cancel={() => setShowPopup(false)}
        visible={showpopUp}
        onClose={() => setShowPopup(false)}
        doctor={selectedDoctor}
      />
      <FilterPopup
        cancel={() => setShowfilter(false)}
        visible={showFilter}
        onClose={() => setShowfilter(false)}
      />
    </SafeAreaView>
  );
}

export default DoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  outerDark: {
    backgroundColor: "#181A20",
  },
  outerLight: {
    backgroundColor: "white",
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: "7%",
    marginTop: "18%",
  },
  foundDoctorView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchComponent: {},
  upperInner: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    height: "100%",
  },
  categoryScroll: {},
  categoryBtnView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
    backgroundColor: "white",
  },
  categoryBtn: {
    borderWidth: 2,
    borderColor: "#246BFD",
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginLeft: 10,
  },
  firstCategoryBtn: {
    backgroundColor: "#246BFD",
  },
  firstCategoryBtnText: {
    color: "white",
  },
  categoryBtnText: {
    color: "#246BFD",
    fontSize: 16,
  },
  body: {
    width: "98%",
    backgroundColor: "#F7F7F7",
  },
  scroll: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  scrollDark: {
    backgroundColor: "#181A20",
  },
  scrollLight: {
    backgroundColor: "#F7F7F7",
  },
  searchView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  moreOuter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Headstyle: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 20,
  },
  NotificationView: {
    width: "80%",
  },
  componentView: {
    marginBottom: "5%",
    width: "100%",
    height: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rightView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
});
