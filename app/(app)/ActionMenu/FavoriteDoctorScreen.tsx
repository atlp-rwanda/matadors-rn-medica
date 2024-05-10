import React,{ReactElement, useState} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions,TextInput, ScrollView, Pressable} from 'react-native'
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


interface Doctor {
  imageSource: string;
  name: string;
  iconComponent: ReactElement;
  professionalTitle: string;
  hospital: string;
  star: number;
  review: number;
  rate: number;
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

    const handleSearchPressed = () => {
        setShowSearch(true)
    }
    const handleSearchSubmit = (text: string) => {
        setSearchTerm(text.toLowerCase())
    }
    
    const handleCategoryChange = (category:any) => {
        setSelectedCategory(category),
            setSearchTerm('')
    }

    const filteredDoctors=searchTerm.length>0 ? selectedCategory.Doctors.filter(doctor=>doctor.name.toLowerCase().includes(searchTerm)):selectedCategory.Doctors
    return (
        <SafeAreaView style={styles.container}>
            <View>
                
                <View style={styles.upper}>
                    {
                        !showSearch ? (
                            <HeaderComponent
                                onSearchPressed={handleSearchPressed}
                                headerText="Notification"
                            
                            />
                        ) : (
                               
                                <SearchComponent
                                    onSearchSubmit={handleSearchSubmit}
                                
                                
                                />
                        )
                    }
                    
                    
            
                </View>
                <View style={styles.categoryBtnView}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoryScroll}
                    contentContainerStyle={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems:'center'

                    }}>
                    
                    {data.categories.map((category, index) =>
                    <Pressable key={index} onPress={()=>handleCategoryChange(category)} style={[styles.categoryBtn,index==0?styles.firstCategoryBtn:{}]}>
                            
                           <Text style={[styles.categoryBtnText,index===0?styles.firstCategoryBtnText:{}]}>{category.name}</Text>  
                            
                    </Pressable>
                        )}
                   

                    </ScrollView>
                </View>
                <View>
                <ScrollView
                showsVerticalScrollIndicator={false}
             style={styles.scroll}
              contentContainerStyle={{
            justifyContent: "center",
             alignItems: 'center',
            paddingBottom: 150,
            paddingTop:20
          }}
                >
                    {filteredDoctors.map((doctor:any,index:any) =>
                        
                        <View key={index } style={styles.componentView}>
                     <DoctorComponent

                        imageSource={imageMap[doctor.imageSource]}
                        name={doctor.name}
                        iconComponent={iconMapping[doctor.iconComponent]}
                        professionalTitle={doctor.professionalTitle}
                        hospital={doctor.hospital}
                        star={iconMapping[doctor.star]}
                        review={doctor.review}
                        rate={doctor.rate}

                        />
                    </View>
                        
                        )}
                        
                      

                    
                     

                </ScrollView>
                </View>
                   
            
            </View>
             
        </SafeAreaView>
        
    );
}

export default DoctorScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height:"100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        zIndex:1
    },
    upper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
         marginBottom: "5%",
        marginTop: "8%",
        backgroundColor:"white"
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
        backgroundColor:"white"
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
        backgroundColor: "#F7F7F7",
    },
    scroll: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        backgroundColor: "#F7F7F7",
        
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