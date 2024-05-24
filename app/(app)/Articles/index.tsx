import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import FieldComponent from '@/components/FieldComponent';
import ArticleCard from '@/components/cards/ArticleCard';
import { articles } from '@/constants/Articles';
import { router } from "expo-router";
import Colors from '@/constants/Colors';


export default function Article() {
  return (
    <SafeAreaView style={{ paddingTop: 40, flex: 1, backgroundColor: Colors.light.background  }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require("../../../assets/images/icon.png")} 
            style={{
              width: 25,
              height: 25
            }}            />
            <Text style={styles.headerTitle}>Article</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity>
            <Image source={require("../../../assets/images/search1.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require("../../../assets/images/Notify.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <TouchableOpacity
              onPress={() => router.push("Articles/ArticleSeeAll")}
          >
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {articles.map(article => (
            <View key={article.id} style={styles.articleContainer}>
              <View style={styles.articleContent}>
                <TouchableOpacity>
                  <Image style={styles.articleImage} source={article.image} />
                </TouchableOpacity>
                <Text style={styles.articleTitle}>{article.title}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Articles</Text>
          <TouchableOpacity
              onPress={() => router.push("Articles/ArticleSeeAll")}
              >
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fieldContainer}>
          <FieldComponent/>
        </View>

        <ScrollView style={styles.articlesList}>
          {articles.map(article => <ArticleCard key={article.id} article={article} />)}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headerTitle: {
    fontSize: 24,
    color: "#212121",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerIcon: {
    marginTop: 10,
    height: 28,
    width: 28,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#212121",
  },
  seeAll: {
    color: "#246BFD",
    fontSize: 16,
  },
  articleContainer: {
    marginLeft: 15,
  },
  articleContent: {
    flexDirection: "column",
  },
  articleImage: {
    height: 140,
    width: 220,
    borderRadius: 20,
  },
  articleTitle: {
    fontSize: 18,
    color: "#212121",
    width: 230,
    flexWrap: "wrap",
    paddingTop: 15,
   
  },
  fieldContainer: {
    padding: 5,
  },
  articlesList: {
    marginTop: 10,
    padding: 2,
    flexWrap:"wrap",
    maxWidth:"100%",
    width:"95%"
  },
});
