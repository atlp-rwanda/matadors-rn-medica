import React, { useContext, useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FieldComponent from "@/components/FieldComponent";
import ArticleCard from '@/components/cards/ArticleCard';
import { articles } from "@/constants/Articles";
import { router } from "expo-router";
import { ThemeContext } from '@/ctx/ThemeContext';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export default function Article() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={{ paddingTop: 40, flex: 1, backgroundColor: theme === "light" ? "#FFFFFF" : "#181A20" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}>
            <Image source={require("../../../assets/images/icon.png")}
              style={{
                width: 25,
                height: 25
              }} />
            <Text style={{
              fontSize: 24,
              color: theme === 'light' ? '#212121' : '#FFFFFF',
              fontWeight: "500"
            }}>Article</Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}>
            <TouchableOpacity>
              <Ionicons name="search-outline" size={24} style={{ color: theme === 'light' ? "#212121" : '#FFFFFF' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={22} style={{ color: theme === 'light' ? "#212121" : '#FFFFFF' }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}>
          <Text style={{
            fontSize: 20,
            color: theme === 'light' ? '#212121' : '#FFFFFF',
            fontWeight: "500"
          }}>Trending</Text>
          <TouchableOpacity
            onPress={() => router.push("Articles/ArticleSeeAll")}
          >
            <Text style={{
            color: theme === 'light' ? "#246BFD" : "#246BFD",
              fontSize: 16,
              fontWeight: "bold"
            }}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {articles.map(article => (
            <View key={article.id} style={{ marginLeft: 15, }}>
              <View style={{ flexDirection: "column", }}>
                <TouchableOpacity>
                  <Image style={{
                    height: 140,
                    width: 220,
                    borderRadius: 20,
                  }} source={article.image} />
                </TouchableOpacity>
                <Text style={{
                  fontSize: 18,
                  color: theme === 'light' ? '#212121' : '#FFFFFF',
                  width: 230,
                  flexWrap: "wrap",
                  paddingTop: 15,
                }}>{article.title}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}>
          <Text style={{
            fontSize: 20,
            color: theme === 'light' ? '#212121' : '#FFFFFF',
            fontWeight: "500"
          }}>Articles</Text>
          <TouchableOpacity
            onPress={() => router.push("Articles/ArticleSeeAll")}
          >
            <Text style={{
            color: theme === 'light' ? "#246BFD" : "#246BFD",
              fontSize: 16,
              fontWeight: "bold"
            }}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 5 }}>
          <FieldComponent />
        </View>

        <ScrollView style={{
          marginTop: 10,
          padding: 2,
          flexWrap: "wrap",
          maxWidth: "100%",
          width: "95%"
        }}>
          {articles.map(article => <ArticleCard key={article.id} article={article} />)}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

