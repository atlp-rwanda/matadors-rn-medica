
import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView,TouchableOpacity, Pressable } from 'react-native';
import {router, useNavigation } from 'expo-router';
import FieldComponent from '@/components/FieldComponent';
import ArticleCard from '@/components/cards/ArticleCard';
import { articles } from '@/constants/Articles';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


export default function SeeAllArticles() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ paddingTop: 40, backgroundColor: Colors.light.background }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <FieldComponent/> */}
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ display: "flex", flexDirection: "row", gap: 15, padding: 15 }}>
          <Pressable 
                onPress={()=> router.back()}
                style={{
                    paddingTop: 5
                }}
                >
                        <MaterialIcons name="arrow-back" size={23} />
                </Pressable>
            <Text style={{ fontSize: 24, color: "#212121" }}>Articles</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 15, padding: 15 }}>
            <TouchableOpacity>
                <Image style={{ position: "relative", marginTop: 7 }}
                 source={require("../../../assets/images/search1.png")} />
                 </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{ position: "relative", marginTop: 5 }} 
                source={require("../../../assets/images/circledots.png")} />
                </TouchableOpacity>
          </View>
        </View>
        <View style={{padding:5}}>
        <FieldComponent/>

        </View>
        
        
        <ScrollView style={{marginTop:10}}showsVerticalScrollIndicator={false}>
          {articles.map((article, index) => <ArticleCard key={index} article={article}/>)}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}