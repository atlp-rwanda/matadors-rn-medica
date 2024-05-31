
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
            {
              borderWidth: 2,
              borderColor: '#246BFD',
              borderRadius: 50,
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginLeft: 10,
            },
            selectedField === field ? {
              backgroundColor: '#246BFD',
            } : null,
          ]}
          onPress={() => setSelectedField(field)}
        >
          <Text style={[
            {
              fontSize: 16,
              textAlign: "center",
              color: '#246BFD',
            }, 
            selectedField === field ? {color: "#FFFFFF"} : null
          ]}>
            {fields[field as keyof typeof fields]}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
