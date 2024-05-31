import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { router, useNavigation } from "expo-router";
import { ThemeContext } from "@/ctx/ThemeContext";

interface IArticleProps {
  title?: string;
  date?: string;
  id?: number;
  image?: any;
  category?: string;
}

export default function ArticleCard({ article }: { article: IArticleProps }) {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
    onPress={() => router.push("(app)/Articles/ArticleDetails")}
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 10,
        paddingLeft: 10,
        gap: 10,
        maxWidth: "100%",
      }}
    >
      <View>
        <Image
          style={{ height: 120, width: 120, borderRadius: 20 }}
          source={article.image}
        />
      </View>
      <View
        style={{
          paddingRight: 15,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ color: theme === 'light' ? "#424242" : '#FFFFFF', fontSize: 10 }}>{article.date}</Text>
        </View>
        <View style={{ flexWrap: "wrap", maxWidth: "82%", width: "95%" }}>
          <View>
            <Text style={{ fontSize: 16, color: theme === 'light' ? "#212121" : '#FFFFFF'}} numberOfLines={3}>
              {article.title}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: theme === 'light' ? "#246BFD" : '#246BFD',
            fontSize: 10,
            backgroundColor: theme === 'light' ? "rgba(36, 107, 253, 0.08)" : "rgba(36, 107, 253, 0.08)",
            borderRadius: 6,
            height: 24,
            width: 59,
            textAlign: "center",
            padding: 5,
            marginTop: 10,
          }}
        >
          Covid-19
        </Text>
      </View>
      </TouchableOpacity>
  );
}

