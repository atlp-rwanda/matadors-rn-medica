
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';

const fields = {
  Newest: "Newest",
  Health: "Health",
  Covid: "Covid-19",
  Lifestyle: "Lifestyle",
  News: "News"
}; 

export default function FieldComponent() {
  const [selectedField, setSelectedField] = useState("Newest");

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {Object.keys(fields).map((field, index) => (
        <TouchableOpacity 
          key={index} 
          style={[
            styles.button,
            selectedField === field ? styles.activeButton : null,
          ]}
          onPress={() => setSelectedField(field)}
        >
          <Text style={[
            styles.buttonText, 
            selectedField === field ? styles.activeText : null
          ]}>
            {fields[field as keyof typeof fields]}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  date: {
    color: "#246BFD",
    fontSize: 10,
    backgroundColor: "#D9F1FF",
    borderRadius: 6,
    height: 20,
    width: 50,
    textAlign: "center",
    padding: 4,
    margin: 10,
  },
  scrollView: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: '#246BFD',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  activeButton: {
    backgroundColor: '#246BFD',
  },
  buttonText: {
    fontSize: 16,
    // fontFamily:"UrbanistSemiBold",
    textAlign: "center",
    color: '#246BFD',
  },
  activeText: {
    color: "#FFFFFF", 
  },
});