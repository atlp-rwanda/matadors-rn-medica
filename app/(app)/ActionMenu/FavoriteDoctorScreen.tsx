import React,{ReactElement, useEffect, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, Dimensions,TextInput, ScrollView, Pressable} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DoctorComponent from '@/components/DoctorComponent';
import { FontAwesome } from '@expo/vector-icons';
 import { SvgXml } from "react-native-svg"
import { blueheart } from '@/assets/icons/blueHeart';
import { star } from '@/assets/icons/star';
import { search } from '@/assets/icons/search';
import { more } from '@/assets/icons/more';
import { leftArrow } from '@/assets/icons/left';
import data from "../../doctors.json"
import HeaderComponent from '@/components/HeaderComponent';
import SearchComponent from '@/components/SearchComponent';
import FoundDoctorCount from '@/components/FoundDoctorCount';
import NofoundComponent from '@/components/NofoundComponent';
import RemovefavoritePopup from '@/components/RemovefavoritePopup';
import FilterPopup from '@/components/FilterSearchComponent';
import { StatusBar } from 'expo-status-bar';
import NotFoundScreen from '@/app/+not-found';
import { ThemeContext } from '@/ctx/ThemeContext';
import { useContext } from 'react';
import { supabase } from '@/lib/supabase';


const tableName = 'doctors'




interface imageMapProp{
    [key:string]:ReturnType<typeof require>
}

const imageMap:imageMapProp = {
    'doctor1.png': require("../../../assets/images/Doctors/doctor1.png"),
    'doctor2.png': require("../../../assets/images/Doctors/doctor2.png"),
    'doctor3.png': require("../../../assets/images/Doctors/doctor3.png"),
    'doctor4.png': require("../../../assets/images/Doctors/doctor4.png"),
    'doctor5.png':require("../../../assets/images/Doctors/doctor5.png")

}
interface iconMappingProp{
    [key :string]:ReactElement
}


interface Doctor{
    id: number,
    first_name: string,
    last_name: string,
    hospital: string,
    rate: string,
    review: string,
    specialization: string,
    about:string
}
interface categoryProp{
    name: string,
    Doctors:Doctor[]
}

export const iconMapping:iconMappingProp = {
    heart: <SvgXml xml={blueheart} />,
    star: <SvgXml xml={star} />,
}



function DoctorScreen() {
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [selectedCategory, setSelectedCategory] = useState(data.categories[0])
    const [showpopUp, setShowPopup] = useState(false)
    const [selectedDoctor, setSelectedDoctor] = useState()
    const [showFilter, setShowfilter] = useState(false)
    const [doctors,setDoctors]=useState<Doctor[]>([])
    const { theme, changeTheme } = useContext(ThemeContext)
    const containerStyle = theme === "dark" ? styles.outerDark : styles.outerLight
    const scrollbackColor = theme === "dark" ? styles.scrollDark : styles.scrollLight
    
    useEffect(() => {
        async function fetchData() {
  const { data, error } = await supabase.from(tableName).select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return;
            }
            setDoctors(data)
           
}

fetchData();
    },[])

    const handleSearchPressed = () => {
        setShowSearch(true)
    }
    const handleSearchSubmit = (text: string) => {
        setSearchTerm(text.toLowerCase())
    }
    
    const handleFilter = () => {
        setShowfilter(true)
    }
    const handleRemove = (doctor:any) => {
        setSelectedDoctor(doctor)
        
        setShowPopup(true)
    }

    const filteredDoctors=searchTerm.length>0 ? doctors.filter(doctor=>doctor.last_name.toLowerCase().includes(searchTerm)):doctors
    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
           <StatusBar style={theme === "dark" ? "light" : "dark"} />
            <View>
                
                <View style={[styles.upper,containerStyle]}>
                    {
                        !showSearch ? (
                            <HeaderComponent
                                onSearchPressed={handleSearchPressed}
                                headerText="Top Doctor"
                            
                            />
                        ) : (
                               
                            <SearchComponent
                                    onSearchSubmit={handleSearchSubmit}
                                    filterAction={handleFilter}
                                
                                
                            />
                        )
                    }
                </View>
                <View style={[styles.categoryBtnView,containerStyle]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryScroll}
                    contentContainerStyle={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems:'center'

                    }}>
                    
                    {data.categories.map((category, index) =>
                        <Pressable key={index} style={[styles.categoryBtn,
                            selectedCategory === category ? styles.firstCategoryBtn : {},
                            ]}>
                            
                            <Text style={[
                                styles.categoryBtnText,
                                selectedCategory === category ? styles.firstCategoryBtnText : {},
                                ]}>{category.name}</Text>  
                            
                    </Pressable>
                        )}
                    </ScrollView>
                    
                </View>
                <View style={styles.foundDoctorView}>
                    {showSearch && (
                        <FoundDoctorCount count={filteredDoctors.length } />
                    )}
                </View>
                <View>
                <ScrollView
                showsVerticalScrollIndicator={false}
             style={[styles.scroll,scrollbackColor]}
              contentContainerStyle={{
            justifyContent: "center",
            paddingBottom: 150,
            paddingTop:20
          }}
                    >
                        {filteredDoctors.length > 0 ? (
                            
                                filteredDoctors.map((doctor: any, index: any) =>
                        
                                    <View key={index} style={styles.componentView}>
                                        <DoctorComponent

                                            imageSource={{uri:doctor.image}}
                                            name={`${doctor.first_name} ${doctor.last_name}`}
                                            iconComponent={<SvgXml xml={blueheart} />}
                                            professionalTitle={doctor.specialization}
                                            hospital={doctor.hospital}
                                            star={<SvgXml xml={star} />}
                                            review={doctor.review}
                                            rate={doctor.rate}
                                            remove={()=>handleRemove(doctor)}

                                        />
                                    </View>
                        
                                )
                            
                        ) : (
                             <NofoundComponent/>   
                    )}
                         

                    </ScrollView>
                     
                </View>
               
                   
            
            </View>
            <RemovefavoritePopup
                cancel={()=>setShowPopup(false)}
                visible={showpopUp}
                onClose={() => setShowPopup(false)}
                doctor={selectedDoctor}
            
            
            />
            <FilterPopup
                cancel={()=>setShowfilter(false)}
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
        zIndex:1
    },
    outerDark: {
        backgroundColor:"#181A20"
        
    },
    outerLight: {
     backgroundColor: "white",
        
    },
    upper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
         marginBottom: "7%",
        marginTop: "18%",
    },
    foundDoctorView: {
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    searchComponent: {
        
    },
    upperInner: {
        width: "95%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    upperLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "70%",
        height:"100%",
    },
    categoryScroll: {
    
    },
    categoryBtnView: {
        display:"flex",
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: "5%",
        backgroundColor: "white",
    },
    categoryBtn: {
        borderWidth: 2,
        borderColor: "#246BFD",
        height: 40,
        paddingHorizontal: 20,
        paddingVertical:7,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        marginLeft:10
    },
    firstCategoryBtn: {
      backgroundColor:  "#246BFD"
    },
    firstCategoryBtnText: {
      color:"white"  
    },
    categoryBtnText: {
        color: "#246BFD",
        fontSize:16    
    },
    body: {
        width: "98%",
        backgroundColor:"#F7F7F7",
    },
    scroll: {
        width: "100%",
        height: "100%",
        zIndex: 1, 
    },
    scrollDark: {
        backgroundColor:"#181A20"
        
    },
    scrollLight: {
        backgroundColor: "#F7F7F7"
        
    },
    searchView: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    moreOuter: {
       display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    Headstyle: {
        color: "#212121",
        fontWeight: "bold",
        fontSize:20
    },
    NotificationView: {
        width:"80%"
    },
    componentView: {
        marginBottom: "5%",
        width: "100%",
        height:150,
       display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    rightView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width:"25%"
    },
   
    
})