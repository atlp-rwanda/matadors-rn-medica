// DoctorCard.tsx
import {Colors} from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface DoctorCardProps {
  name: string;
  date: string;
  time: string;
  image: any;
  status: string;
  statusColor: string;
  type: string;
  icon: any;
  iconOnPress: ()=> void
  buttons?: { label: string, action: () => void, styleType: 'cancel' | 'primary' }[];
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, date, time, image, status, statusColor, type, icon, buttons, iconOnPress }) => {
  return (
    <ImageBackground style={styles.card}>
      <View style={styles.upperSection}>
        <Image style={styles.cardImage} source={image}></Image>
        <ImageBackground style={styles.docDescription}>
          <View style={styles.cardHeader}>
            <Text style={styles.docName}>{name}</Text>
          </View>
          <View style={styles.docStatus}>
            <Text style={{ color: '#424242', fontSize: 12, fontFamily: "Urbanist-regular" }}>{type} - </Text>
            <View style={[styles.statusContainer, { borderColor: statusColor }]}>
              <Text style={{ fontFamily: "Urbanist-regular", color: statusColor, fontSize: 12 }}>{status}</Text>
            </View>
            <TouchableOpacity 
            onPress={iconOnPress}
            style={{padding: 20, backgroundColor: Colors.transparent.blue, borderRadius: 100, marginLeft: 10}}
            >
            {icon}
            </TouchableOpacity>
          </View>
          <Text style={styles.date}>{date} | {time}</Text>
        </ImageBackground>
      </View>
      {buttons && (
        
        <View style={styles.CardButtons}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={button.styleType === 'cancel' ? styles.cancelButton : styles.primaryButton}
              onPress={button.action}
            >
              <Text style={button.styleType === 'cancel' ? styles.cancelButtonText : styles.primaryButtonText}>{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: 200,
    marginTop: 20,
    marginLeft: '2%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    flexDirection: 'column'
  },
  cardImage: {
    height: 110,
    width: '30%',
    borderRadius: 20,
  },
  upperSection: {
    flexDirection: 'row'
  },
  cardHeader: {
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  docName: {
    fontFamily: 'Urbanist-bold',
    color: '#000000',
    marginLeft: '3%',
    marginRight: '18%',
    marginTop: '1%',
    fontSize: 20,
    padding: 0,
  },
  docDescription: {
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  docStatus: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '0%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusContainer: {
    backgroundColor: "#ffffff",
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    marginRight:10
  },
  date: {
    backgroundColor: 'transparent',
    color: '#424242',
    fontFamily: 'Urbanist-regular',
    fontSize: 12,
    marginLeft: '5%',
    marginTop: '0%'
  },
  
  CardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#ffffff",
    padding: 5,
    //paddingHorizontal: 15,
    borderColor: '#246BFD',
    borderWidth: 2,
    borderRadius: 20,
    width: 150,
    height: 34,
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: 10
  },
  primaryButton: {
    backgroundColor: "#246BFD",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: "center",
    width: 150,
    height: 34,
    alignItems: 'center'
  },
  cancelButtonText: {
    fontFamily: "Urbanist-regular",
    color: '#246BFD'
  },
  primaryButtonText: {
    fontFamily: "Urbanist-regular",
    color: "white"
  }
});

export default DoctorCard;
