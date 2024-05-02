import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Typography from "@/constants/Typography";
import Colors from "@/constants/Colors";


export default function HomeScreen(){
    return (
        <>
        <View style={styles.container}>
            <View style={styles.splash}>
              <View style={styles.image}>
              <Image source={require('../../assets/images/Group.png')} style={styles.imagex}/>
              </View>

<ScrollView>
<Text style={styles.text}>Welcome to Medica! 👋</Text>
<Text style={styles.description}>The best online doctor appointment & consultation app of the century for your health and medical needs!</Text>
</ScrollView>
    

            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#ffff',
paddingTop:80
    },
    splash:{
        flex:1,
      
        justifyContent:'center',
        alignItems:'center',
backgroundColor:'white',
gap:20,
width:'100%',
resizeMode:'cover',


    },
    text:{
        fontSize:40,
        textAlign:'center',
        paddingLeft:30,
paddingRight:30,
color:'#236bfd',
fontFamily:'Bold',
    },
    description:{
textAlign:'center',
lineHeight:25,
paddingBottom:30,
paddingTop:20,
fontFamily:'Regular',
color:Colors.light.text,
fontSize:17
    },
    image:{
        // width: '100%',
        objectFit:'cover',
      height:'70%' 
    },
    imagex:{
      height:'100%'
    }
})
