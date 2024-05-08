import { View, Text  } from "@/components/Themed";
import { Image,StyleSheet,TouchableOpacity, TextInput,ImageBackground,ScrollView , } from "react-native";
import React , { useState } from "react";
import { useFonts as useFontsExpo } from 'expo-font'; 
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import {HomeIcon} from "../../../assets/icons/HomeSvg";
import {HistoryIcon} from "../../../assets/icons/HistorySvg";
import {AppointmentIcon} from "../../../assets/icons/AppointmentSvg";
import {ArticleIcon} from "../../../assets/icons/ArticleSvg";
import {ProfileIcon} from "../../../assets/icons/ProfileSvg";
import Line from "@/components/Line";
//import { HomeIcon, HistoryIcon, AppointmentIcon, ArticleIcon, ProfileIcon } from '../../../assets/icons';


export default function HomeScreen() {
    //const {user, isLoading}=useUser();
    const [activeIcon, setActiveIcon] = useState('Home'); 
    const handleNavigation = (direction: string)=> {
      router.push(direction)
    }

    const handleIconPress = (iconName: string, direction: string) => {
      setActiveIcon(iconName); // Update active icon state when an icon is pressed
      handleNavigation(direction)
    };
    const isIconActive = (iconName: string) => {
      return activeIcon === iconName;
    };
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const [fontsLoaded] = useFontsExpo({ 
      'Urbanist-regular': require('../../../assets/fonts/Urbanist-Regular.ttf'),
      'Urbanist-bold': require('../../../assets/fonts/Urbanist-Bold.ttf'),
      'Urbanist-Semibold': require('../../../assets/fonts/Urbanist-SemiBold.ttf'),
      'Urbanist-Medium': require('../../../assets/fonts/Urbanist-Medium.ttf'),
    });
    if (!fontsLoaded) {
      return null; 
    }

  return (
    <View style={styles.container} >
      <ScrollView>
      <View  style={styles.header} >
        <Image source={require('../../../assets/images/Ellipse.png')}></Image>
        <View style={styles.heading}>
         <Text style={styles.greetings}> Good Morning👋</Text>
         <Text style={styles.userName}>Andrew Ainsley</Text>
        </View>
        <View style={styles.Icons}>
          <TouchableOpacity><Image source={require('../../../assets/images/Notification.png')}></Image></TouchableOpacity>
          <TouchableOpacity><Image style={styles.heart} source={require('../../../assets/images/Heart.png')}></Image></TouchableOpacity> 
        </View>
      </View>
      
      <View style={styles.search}>
        <Image source={require('../../../assets/images/search.png')}/>
        <TextInput  
        placeholder='Search'
        onChangeText={newText => setText(newText)}
        style={styles.searchinput}
        placeholderTextColor='rgba(45,45,45,0.4)'
        
        />
        <TouchableOpacity ><Image style={styles.filter} source={require('../../../assets/images/filter.png')}/></TouchableOpacity>
        
      </View>
     
      <View style={styles.frame}>
        <ImageBackground style={styles.FrameImage} source={require('../../../assets/images/Frame.png')}>
           
           <View style={styles.FrameText}>
             <Text style={styles.h1}>Medical Checks!</Text>
             <Text style={styles.body}>Check your health condition regularly to minimize the incidence of disease in the future. </Text> 
             <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('' as never)}>
              <Text style={styles.buttontext2}> Check Now </Text>
          </TouchableOpacity>
           </View>
            
        </ImageBackground>
      </View>
      <View style={styles.TxtContainer}>
        <Text style={styles.specialityTxt}>Doctor Speciality</Text>
        <TouchableOpacity><Text style={styles.seeTxt}>See All</Text></TouchableOpacity>
      </View>
      <View style={styles.specialityContainer1}>
        <TouchableOpacity><Image source={require('../../../assets/images/GeneralDoctor.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/images/Dentist.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/images/Optician.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/images/Nutritionist.png')}></Image></TouchableOpacity>
      </View>
      <View style={styles.NameTxt}>
        <Text style={styles.DocSpeciality}>General..</Text>
        <Text style={styles.DocSpeciality}>Dentist</Text>
        <Text style={styles.DocSpeciality}>Ophthal..</Text>
        <Text style={styles.DocSpeciality}>Nutrition..</Text>
      </View>
      <View style={styles.specialityContainer1}>
        <TouchableOpacity><Image source={require('../../../assets/images/Neurologist.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/images/Pediatric.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/images/Radiologist.png')}></Image></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../../assets/images/More.png')}></Image></TouchableOpacity>
      </View>
      <View style={styles.NameTxt}>
        <Text style={styles.DocSpeciality}>Neurolo..</Text>
        <Text style={styles.DocSpeciality}>Pediatric</Text>
        <Text style={styles.DocSpeciality}>Radiolo..</Text>
        <Text style={styles.DocSpeciality}>More</Text>
      </View>
      <View style={styles.TopDocs}>
        <Text style={styles.specialityTxt}>Top Doctors</Text>
        <TouchableOpacity><Text style={styles.seeTxt}>See All</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={{ flexDirection: "row", gap: 20, marginTop:5, marginLeft: 10, backgroundColor:'#ffffff' }}>
          <View style={{ backgroundColor: "#246BFD", padding: 5, paddingHorizontal: 10, borderRadius: 20, justifyContent: "center",width:65,height:34,alignItems:'center' }}>
            <Text style={{ fontFamily: "Urbanist-regular", color: "white" }}>All</Text>
          </View>
          <View style={{ backgroundColor: "#ffffff", padding: 5, paddingHorizontal: 10, borderColor:'#246BFD',borderWidth:2 ,borderRadius: 20,height:34,alignItems:'center' }}>
            <Text style={{ fontFamily: "Urbanist-regular", color: '#246BFD' }}>General</Text>
          </View>
          <View style={{ backgroundColor: "#ffffff", padding: 5, paddingHorizontal: 10,borderColor:'#246BFD',borderWidth:2 , borderRadius: 20 ,height:34,alignItems:'center'}}>
            <Text style={{ fontFamily: "Urbanist-regular", color: '#246BFD' }}>Dentist</Text>
          </View>
          <View style={{ backgroundColor: "#ffffff", padding: 5, paddingHorizontal: 10,borderColor:'#246BFD',borderWidth:2 , borderRadius: 20,height:34,alignItems:'center' }}>
            <Text style={{ fontFamily: "Urbanist-regular", color: '#246BFD' }}>Nutritionist</Text>
          </View>
          <View style={{ backgroundColor: "#ffffff", padding: 5, paddingHorizontal: 10,borderColor:'#246BFD',borderWidth:2 , borderRadius: 20,height:34,alignItems:'center' }}>
            <Text style={{ fontFamily: "Urbanist-regular", color: '#246BFD' }}>Neurologist</Text>
          </View>
        </View>
      </ScrollView>
      <ImageBackground style={styles.cardContainer}>
         <ImageBackground style={styles.card}>
           <Image style={styles.cardImage} source={require('../../../assets/images/Randy.png')}></Image>
           <ImageBackground style={styles.DocDescription}>
             <View style={styles.CardHeader}>
               <Text style={styles.DocName}> Dr. Randy Wigham</Text>
               <Image style={styles.DocHeart} source={require('../../../assets/images/BlueHeart.png')}></Image>
             </View>
             <Line color='#EEEEEE' thickness={2} style={{ marginLeft:10,marginTop: 20, width: '90%' }} />
             
             <Text style={styles.DocProfession}>Cardiologist   |   The Valley Hospital</Text>
             <View style={styles.DocRating}>
              <Image source={require('../../../assets/images/HalfStar.png')}></Image>
              <Text style={styles.Ratings}>4.8  (3,379 reviews)</Text>
             </View>
             
            
           </ImageBackground>
           
           
           
         </ImageBackground>
      </ImageBackground>
     </ScrollView>
     <View style={styles.Footer}>
        <TouchableOpacity onPress={() => handleIconPress('Home')}>
          <SvgXml xml={HomeIcon} style={[styles.icon, isIconActive('Home') && styles.activeIcon]} />
          <Text style={[styles.iconText, isIconActive('Home') && styles.activeText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('Appointment', "(app)/Booking/Doctor_details")}>
          <SvgXml xml={AppointmentIcon} style={[styles.icon, isIconActive('Appointment') && styles.activeIcon]} />
          <Text style={[styles.iconText, isIconActive('Appointment') && styles.activeText]}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('History')}>
          <SvgXml xml={HistoryIcon} style={[styles.icon, isIconActive('History') && styles.activeIcon]} />
          <Text style={[styles.iconText, isIconActive('History') && styles.activeText]}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('Article')}>
          <SvgXml xml={ArticleIcon} style={[styles.icon, isIconActive('Article') && styles.activeIcon]} />
          <Text style={[styles.iconText, isIconActive('Article') && styles.activeText]}>Articles</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('Profile')}>
          <SvgXml xml={ProfileIcon} style={[styles.icon, isIconActive('Profile') && styles.activeIcon]} />
          <Text style={[styles.iconText, isIconActive('Profile') && styles.activeText]}>Profile</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  backgroundColor: '#FFFFFF',
  padding:2,
  paddingTop:40,
  },
  containerDark:{
  backgroundColor: '#181A20',
  padding:2,
  paddingTop:40,
 
  },
  header:{
    flexDirection: 'row' ,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginLeft: '3%'
  },
   userImage:{
    width: 45,
    height: 45,
    
   },
   heading:{
    backgroundColor: '#FFFFFF',
    marginLeft: '2%'
   },
   greetings: {
     color: '#757575',
     fontFamily: 'Urbanist-regular'
   },
   Icons:{ 
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingLeft:'27%',
   },



   filter:{
    marginLeft: '3%',
    
   },
   heart:{
    marginLeft: '36%',
   },
   userName:{
     color: '#000000',
     fontSize: 20,
     fontWeight: 'bold',
     fontFamily:'Urbanist-bold'
   },
   
   searchinput:{
    color:'#757575',
    fontFamily:'Urbanist-regular',
    fontSize:18,
    flex: 1, 
},
search:{
    backgroundColor:'#F5F5F5',
    width:'90%',
    flexDirection:'row',
    gap:18,
    color:'#757575',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:'7%',
    marginLeft:'5%', 
    marginRight:30, 
    padding:15,
    borderRadius:12,
    position: 'relative',
 },
 frame:{
   backgroundColor: 'transparent',
   marginRight:'0%',
   padding:0,
   width:'100%',
   height: 200,
   marginLeft: '0%',
   alignItems: 'center'
 },
 FrameImage:{
  width: '101%',
  padding: 0,
  height: '100%',
  marginTop: '2%',
  marginLeft: '3%',
  shadowColor: '#A7C4FE',
  shadowOpacity:5,
  flexDirection:'row',
  
 },
 FrameText:{
  backgroundColor:'transparent'
 },
 button2:{
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:20,
  width:100,
  height:30,
  marginTop:'5%',
  marginLeft: '13%'
 },
 buttontext2:{
  color:'#246BFD',
  fontFamily:'Urbanist-Semibold',
  fontSize:13
},
  
 h1:{
  marginTop: '10%',
  marginLeft: '13%',
  backgroundColor: 'transparent',
  fontFamily:'Urbanist-bold',
  fontSize: 25,
  width: 185,
 },
 body:{
  fontFamily:'Urbanist-regular' ,
  fontSize: 12,
  backgroundColor: 'transparent',
  width: 194,
  marginTop: '5%',
  marginLeft: '13%'
 },
 TxtContainer:{
  flexDirection: 'row',
  gap:180,
  backgroundColor: 'transparent',
  marginTop: '6%',

 },
 specialityTxt:{
  color: '#000000',
  fontFamily: 'Urbanist-bold',
  fontSize:19,
  marginLeft: '4%',

 },
 seeTxt:{
  color: '#246BFD',
  fontFamily: 'Urbanist-bold',
  fontSize:15
 },
 specialityContainer1:{
  backgroundColor: 'transparent',
  marginTop:'5%',
  marginLeft:'5%',
  marginRight:'5%',
  flexDirection:'row',
  gap:40,
 },
 NameTxt:{
  backgroundColor: 'transparent',
  marginLeft:'5%',
  marginTop:'2%',
  flexDirection:'row',
  gap:40,
 },
 DocSpeciality:{
  color: '#000000',
  fontSize: 14,
  marginLeft:'2%',
  fontFamily: 'Urbanist-bold',
 },
 TopDocs:{
  flexDirection: 'row',
  gap:220,
  backgroundColor: 'transparent',
  marginTop: '3%',
  marginBottom: '4%'
 },
 Footer:{
  backgroundColor:'#FFFFFF',
  height:50,
  marginTop:'1%',
  marginLeft:'6%',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginBottom:'5%',
  flexDirection:'row',
  gap:28
 },
 icon:{
  marginLeft:'6%'
 },
 iconText:{
  color:'#000000',
  fontSize:12,
  marginLeft:'0%',
 
 },
 activeIcon: {
  color: '#246BFD', // Example: change color for active icon
},
activeText: {
  color: '#246BFD', // Example: change color for active text
  fontWeight: 'bold', // Example: apply font weight for active text
},
cardContainer:{
  backgroundColor:'#E5E5E5',
  width:'100%',
  height:'50%'
},
card:{
  width:'95%',
  height:'40%',
  marginTop:'2%',
  marginLeft:'2%',
  borderRadius:20,
  backgroundColor:'#FFFFFF',
  padding:15,
  flexDirection:'row'

},
cardImage:{
  height:'93%',
  width:'30%',
  borderRadius:20,
  //backgroundColor:'black'

},
DocName:{
 fontFamily:'Urbanist-bold',
 //backgroundColor:'',
 color:'#000000',
 marginLeft:'3%',
 marginRight:'18%',
 marginTop:'1%',
 fontSize:20,
 padding:0,

},
DocDescription:{
  flexDirection:'column',
  backgroundColor:'transparent'
},
DocHeart:{
  marginTop:'3%'
},
CardHeader:{
  flexDirection:'row',
  backgroundColor:'transparent'
},
DocProfession:{
 backgroundColor:'transparent',
 color:'#424242',
 fontFamily:'Urbanist-regular',
 fontSize:15,
 marginLeft:'5%',
 marginTop:'5%'
},
DocRating:{
  backgroundColor:'transparent',
  flexDirection:'row',
  marginLeft:'5%',
  marginTop:'6%'


},
Ratings:{
  color:'#000000',
  backgroundColor:'transparent',
  fontSize:15,
  marginLeft:'5%'
}

});