import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SpecialityItem = ({ imageSource, name, theme }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
      <Text style={[styles.nameText, { color: theme === 'dark' ? '#FFFFFF' : '#000000' }]}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

    nameText: {
        fontSize: 14,
        fontFamily: 'Urbanist-bold',
        marginTop: 5,
        },
        });
        
 export default SpecialityItem;