import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image , Dimensions, ImageBackground } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';
import { SvgXml } from "react-native-svg";
import { SearchIcon } from '@/assets/icons/SearchSvg';
import { MoreIcon } from '@/assets/icons/MoreCircleSvg';
import { HomeIcon } from '@/assets/icons/HomeSvg';
import { HistoryIcon } from '@/assets/icons/HistorySvg';
import { ProfileIcon } from '@/assets/icons/ProfileSvg';
import { ArticleIcon } from '@/assets/icons/ArticleSvg';
import { AppointmentIcon } from '@/assets/icons/AppointmentSvg';
import { useNavigation } from '@react-navigation/native';


export default function EmptyAppointment() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [headerWidth, setHeaderWidth] = useState(0);
  const [activeIcon, setActiveIcon] = useState('Appointment');
  const [text, setText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const updateHeaderWidth = () => {
      const screenWidth = Dimensions.get('window').width;
      const headerPadding = 20 * 2;
      const headerAvailableWidth = screenWidth - headerPadding;
      setHeaderWidth(headerAvailableWidth);
    };

    updateHeaderWidth();
  }, []);

  const handleTabPress = (screen: 'Upcoming' | 'Completed' | 'Cancelled') => {
    setActiveTab(screen);

    if (screen === 'Upcoming') {
      navigation.navigate('AppointmentUpcoming' as never) ;
    } else if (screen === 'Completed') {
      navigation.navigate('AppointmentCompleted'as never);
    } else if (screen === 'Cancelled') {
      navigation.navigate('AppointmentCancelled' as never);
    }
  };

  const isIconActive = (iconName: string) => {
    return activeIcon === iconName;
  };

  const handleIconPress = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const activeTabLinePosition = {
    width: headerWidth / 3,
    left: activeTab === 'Upcoming'
      ? 0
      : activeTab === 'Completed'
        ? headerWidth / 3
        : (headerWidth * 2) / 3,
  };

  const renderTab = (screen: 'Upcoming' | 'Completed' | 'Cancelled', label: string) => {
    const isActive = activeTab === screen;
    return (
      <TouchableOpacity
        key={screen}
        style={[
          styles.tab,
          isActive && styles.activeTab,
          { borderBottomColor: isActive ? '#246BFD' : '#D3D3D3' },
        ]}
        onPress={() => handleTabPress(screen)}
      >
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>{label}</Text>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header}>
      <View style={styles.heading}>
        <Image style={styles.headerLogo} source={require('../../../../assets/images/DefaultLogo.png')}></Image>
        <Text style={styles.headerTitle}>My Appointment </Text>
        <TouchableOpacity >
          <SvgXml xml={SearchIcon} style={[styles.SearchIcon]} />
        </TouchableOpacity>
        <TouchableOpacity >
          <SvgXml xml={MoreIcon} style={[styles.MoreIcon]} />
        </TouchableOpacity>

      </View>  
      <View style={styles.headerNav}>
        {renderTab('Upcoming', 'Upcoming')}
        {renderTab('Completed', 'Completed')}
        {renderTab('Cancelled', 'Cancelled')}
        <View style={[styles.activeTabLine, activeTabLinePosition]} />
      </View>
     </ImageBackground>

     <View style={styles.Body}>
      <Image style={styles.Img} source={require('../../../../assets/images/Empty.png')}></Image>
      <Text style={styles.BodyHeading}>You don't have an appointment yet</Text>
      <Text style={styles.BodyText}>You don't have a doctor's appointment scheduled at the moment.</Text>
     </View>

      <View style={styles.Footer}>
        <TouchableOpacity onPress={() => handleIconPress('Home')} style={[styles.iconsBox]}>
          <SvgXml xml={HomeIcon} style={[styles.icon]} />
          <Text style={[styles.iconText, isIconActive('Home') && styles.activeText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('Appointment')} style={[styles.iconsBox]}>
          <SvgXml xml={AppointmentIcon} style={[styles.icon]} />
          <Text style={[styles.iconText, isIconActive('Appointment') && styles.activeText]}>Appointme..</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('History')} style={[styles.iconsBox]}>
          <SvgXml xml={HistoryIcon} style={[styles.icon]} />
          <Text style={[styles.iconText, isIconActive('History') && styles.activeText]}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('Article')} style={[styles.iconsBox]}>
          <SvgXml xml={ArticleIcon} style={[styles.icon]} />
          <Text style={[styles.iconText, isIconActive('Article') && styles.activeText]}>Articles</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconPress('Profile')} style={[styles.iconsBox]}>
          <SvgXml xml={ProfileIcon} style={[styles.icon]} />
          <Text style={[styles.iconText, isIconActive('Profile') && styles.activeText]}>Profile</Text>
        </TouchableOpacity>
     </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    height:'100%',
  },
  header:{
    padding:20
  },

  heading:{
    backgroundColor:'transparent',
    flexDirection:'row',
    width:'100%',
    marginBottom:'3%',
    marginTop:'5%',
    padding:10
  },

  headerLogo:{
    backgroundColor:'transparent',
   
  },
  headerTitle:{
    fontFamily:'Urbanist-bold',
    fontSize:22,
    marginLeft:'3%',
  },
  SearchIcon:{
    marginLeft: 75

  },
  MoreIcon:{
    marginLeft:25
  },

  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 10,
    position: 'relative',
  },
  tab: {
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Urbanist-regular',
    marginTop: '4%',
    color: '#9E9E9E',
  },
  activeTab: {
    // Define styles for active tab if needed
  },
  activeTabText: {
    color: '#246BFD',
    fontWeight: 'bold',
  },
  activeTabLine: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: '#246BFD',
    zIndex: 1,
  },

  Body:{
    height:'100%',
    width:'100%',
    backgroundColor:'#FFFFFF',
    //justifyContent:'center',
    alignItems:'center'

  },

  Img:{
    marginTop:'20%'
  },

  BodyHeading:{
    fontFamily:'Urbanist-Semibold',
    fontSize:17,
    marginTop:'10%'
  },

  BodyText:{
    textAlign:'center',
    fontFamily:'Urbanist-regular',
    width:'80%',
    marginTop:'3%'
  },
  
  Footer:{
    backgroundColor:'#FFFFFF',
    height:90,
    width:'100%',
    marginTop:'0%',
    marginLeft:'0%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginBottom:'0%',
    flexDirection:'row',
    gap:35,
    //position:'absolute'
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
   },
   icon:{
    marginLeft:'0%'

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
  iconsBox:{
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center'
  }

});

