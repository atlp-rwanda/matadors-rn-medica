import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'

interface IArticleProps {
    title?:string,
    date?:string,
    id?:number,
    image?:any,
    category?:string

}
 
export default function ArticleCard({article}:{article:IArticleProps}) {
    const navigation = useNavigation();
  return (
    <View style={{display:"flex",flexDirection:"row",padding:10,paddingLeft:10,gap:10,maxWidth:"100%"}}>
              <TouchableOpacity onPress={()=>navigation.navigate("ArticlesDetails" as never)}>
                <Image style={{ height: 120, width: 120,borderRadius:20 }} source={article.image} />
                </TouchableOpacity>
              <View style={{ paddingRight: 15,display:"flex",justifyContent:"space-between" }}>
                <TouchableOpacity>
                  <Text style={{ color: "#424242", fontSize: 10 }}>{article.date}</Text>
                </TouchableOpacity>
                <View style={{flexWrap:"wrap",maxWidth:"82%",width:"95%"}}>
                  <TouchableOpacity onPress={()=>navigation.navigate("ArticlesDetails"as never)}>

                    <Text style={{ fontSize: 16, color: "#212121" }} numberOfLines={3}>{article.title}</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ color: "#246BFD", fontSize: 10, backgroundColor: "#E0E7FF", borderRadius: 6, height: 24, width: 59, textAlign: "center", padding: 5, marginTop: 10}}>Covid-19</Text>
              </View>
              </View>
  )
}



const styles = StyleSheet.create({
    date:{
      color:"#246BFD",
      fontSize:10,
      backgroundColor:"rgba(0,0,0,0.5)",
      borderRadius:6,
      width:59,
      textAlign:"center",
      padding:4,
    position:"relative",

    },
    container:{
        display:"flex",
        flexDirection:"row",
        gap:2,
        marginBottom:20,
        justifyContent:"space-between",
        padding:5,
        backgroundColor:"aqua",
    },
    constainer2 :{
        display:"flex",
        justifyContent:"space-between"
    },
    description: {
        fontSize: 14,
        color: '#000',
        display:"flex",
        marginRight: 10,
        flexWrap: 'wrap',
      },
  });
  


