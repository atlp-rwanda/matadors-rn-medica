import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  Pressable,
  TextInput
} from "react-native";
import { SvgXml } from "react-native-svg";
import { SearchIcon } from "@/assets/icons/SearchSvg";
import { MoreIcon } from "@/assets/icons/MoreCircleSvg";
import Line from "@/components/Line";
import Typography from "@/constants/Typography";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import appointmentsData from '../../Appointments.json';
import DoctorCard from '@/components/AppointmentDoctorsCards';
import SearchComponent from '@/components/SearchComponent';
import NofoundComponent from '@/components/NofoundComponent';

interface imageMapProp{
  [key:string]:ReturnType<typeof require>
}

const imageMap:imageMapProp = {
  'doctor1.png': require("../../../assets/images/Doctors/doctor1.png"),
  'doctor2.png': require("../../../assets/images/Doctors/doctor2.png"),
  'doctor3.png': require("../../../assets/images/Doctors/doctor3.png"),
  'doctor4.png': require("../../../assets/images/Doctors/doctor4.png"),
  'doctor5.png':require("../../../assets/images/Doctors/doctor5.png"),
  'VideoCall.png': require('@/assets/images/VideoCall.png'),
  'VoiceCall.png': require('@/assets/images/VoiceCall.png'),
  'Messaging.png': require('@/assets/images/Messaging.png'),
}


type Doctor = {
  name: string;
  date: string;
  time: string;
  image: any;
  status: string;
  statusColor: string;
  type: string;
  icon: any;
};

type DoctorsData = {
  Upcoming: Doctor[];
  Completed: Doctor[];
  Cancelled: Doctor[];
};

type TabKey = 'Upcoming' | 'Completed' | 'Cancelled';


const AppointmentScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('Upcoming');
  const [headerWidth, setHeaderWidth] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<DoctorsData>(appointmentsData);
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

  const handleTabPress = (screen: TabKey) => {
    setActiveTab(screen);
    setSearchTerm('');
    setFilteredData(appointmentsData);
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const updatedData: DoctorsData = {
      Upcoming: [],
      Completed: [],
      Cancelled: [],
    };

    (Object.keys(appointmentsData) as TabKey[]).forEach(key => {
      updatedData[key] = appointmentsData[key].filter((doctor: Doctor) =>
        doctor.name.toLowerCase().includes(text.toLowerCase())
      );
    });

    setFilteredData(updatedData);
  };
  

  const renderTab = (screen: TabKey, label: string) => {
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

  const activeTabLinePosition = {
    width: headerWidth / 3,
    left: activeTab === 'Upcoming' ? 0 : activeTab === 'Completed' ? headerWidth / 3 : (headerWidth * 2) / 3,
  };

  const getButtons = (tab: TabKey) => {
    if (tab === 'Upcoming') {
      return [
        { label: 'Cancel Appointment', action: () => console.log('Cancel Appointment'), styleType: 'cancel' as const },
        { label: 'Reschedule', action: () => console.log('Reschedule'), styleType: 'primary' as const },
      ];
    } else if (tab === 'Completed') {
      return [
        { label: 'Book Again', action: () => console.log('Book Again'), styleType: 'cancel' as const },
        { label: 'Leave a Review', action: () => console.log('Leave a Review'), styleType: 'primary' as const },
      ];
    }
    return [];
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header}>
        <View style={styles.heading}>
          <Image style={styles.headerLogo} source={require('@/assets/images/DefaultLogo.png')}></Image>
          <Text style={styles.headerTitle}>My Appointment</Text>
          <TouchableOpacity>
            <SvgXml xml={SearchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={MoreIcon} style={styles.moreIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerNav}>
          {renderTab('Upcoming', 'Upcoming')}
          {renderTab('Completed', 'Completed')}
          {renderTab('Cancelled', 'Cancelled')}
          <View style={[styles.activeTabLine, activeTabLinePosition]} />
        </View>
        
      </ImageBackground>
      
      <ScrollView style={styles.cardContainer}>
        {filteredData[activeTab].map((doctor: Doctor, index: number) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            date={doctor.date}
            time={doctor.time}
            image={imageMap[doctor.image]}
            status={doctor.status}
            statusColor={doctor.statusColor}
            type={doctor.type}
            icon={imageMap[doctor.icon]}
            buttons={activeTab !== 'Cancelled' ? getButtons(activeTab) : []}
          />
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: '20%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  headerLogo: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Urbanist-bold',
  },
  searchIcon: {
    color: '#FFFFFF',
    width: 20,
    height: 20,
  },
  moreIcon: {
    color: '#FFFFFF',
    width: 20,
    height: 20,
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  tab: {
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  activeTab: {
    borderBottomColor: '#246BFD',
  },
  tabText: {
    fontFamily: 'Urbanist-bold',
    fontSize: 16,
    color: '#D3D3D3',
  },
  activeTabText: {
    color: '#246BFD',
  },
  activeTabLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#246BFD',
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom:20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#D3D3D3',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  footerButtonText: {
    fontFamily: 'Urbanist-regular',
    fontSize: 12,
    color: '#D3D3D3',
  },
  activeFooterButtonText: {
    color: '#246BFD',
  },
  searchContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 20,
  }
});

export default AppointmentScreen;
