
 
import Colors from '@/constants/Colors';
import { router, useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const articlesData = [
  {
    title: 'COVID-19 Was a Top Cause of Death in 2020 and 2021, Even For Younger People',
    date: 'Mar 17, 2019',
    category: 'Covid-19',
    image: require("../../../assets/images/Image4.png"),
    description: 'COVID-19 was one of the leadin causes of death in the United States during much of the pandemic, even for younger age groups, according to a new analysis.'
  },
  {
    description: 'The results, which were published July 5 in JAMA Internal MedicineTrusted Source, paint a stark picture of the toll the pandemic has had — and continues to have — on the country.'
  },
  {
    description: 'On July 1, the United States was averaging 244 COVID-19 deaths per day, according to the Johns Hopkins Coronavirus Resource Center — much lower than earlier pandemic peaks of thousands of deaths per day.'
  },
  {
    description: 'On July 1, the United States was averaging 244 COVID-19 deaths per day, according to the Johns Hopkins Coronavirus Resource Center — much lower than earlier pandemic peaks of thousands of deaths per day.'
  },
  {
    description: 'On July 1, the United States was averaging 244 COVID-19 deaths per day, according to the Johns Hopkins Coronavirus Resource Center — much lower than earlier pandemic peaks of thousands of deaths per day.'
  },
];

export default function ArticlesDetails() {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={{paddingTop:50, backgroundColor: Colors.light.background}}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 15, padding: 15 }}>
          <TouchableOpacity
          onPress={()=> router.back()}
          ><Image style={{ marginTop: 10 }} source={require("../../../assets/images/Arrow.png")} /></TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10, padding: 15 }}>
          <TouchableOpacity><Image style={{ height: 22.57, width: 18.13, padding: 10 }} source={require("../../../assets/images/Notify.png")} /></TouchableOpacity>
          <TouchableOpacity><Image style={{ height: 11.07, width: 11.07, padding: 10 }} source={require("../../../assets/images/send.png")} /></TouchableOpacity>
          <TouchableOpacity><Image style={{ height: 1.17, width: 1.17, padding: 10 }} source={require("../../../assets/images/circledots.png")} /></TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {articlesData.map((article, index) => (
          
          <View key={index} style={{ display: "flex", flexDirection: "column", padding: 10, gap: 5 }}>
            
            <TouchableOpacity>{article.image && <Image style={{ height: 240, width: "100%",borderRadius:24,justifyContent:"center"}} source={article.image} />}</TouchableOpacity>
            <View >
              
              <Text style={{ fontSize: 21, color: "#212121",paddingLeft:10,position:"relative",marginTop:3}}>{article.title}</Text>
              {index === 0 && (
                <View style={{ display: "flex", flexDirection: "row", padding: 15, gap: 10,marginTop: 5, }}>
                  <Text style={{ color: "#424242", fontSize: 10, marginTop: 10}}>{article.date}</Text>
                  <Text style={{ color: "#246BFD", fontSize: 10, backgroundColor: "#E0E7FF",
                   borderRadius: 6, height: 24, width: 59,
                    textAlign: "center", padding: 5,
                     marginTop: 5}}>
                      {article.category}</Text>
                </View>
              )}
            </View>
            <View style={{ flexWrap: "wrap", margin: -10,paddingLeft:20}}>
              <View style={{ paddingRight: 15 }}>
                <Text style={{ fontSize: 18, color: "#424242"}}>
                  {article.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}