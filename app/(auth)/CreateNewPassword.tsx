import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import Colors from '@/constants/Colors';
import { router } from 'expo-router';

export default function CreateNewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCreatePassword = () => {
    // if (password !== confirmPassword) {
    //   Alert.alert('Error', 'Passwords do not match.');
    //   return;
    // }
    router.push("/(auth)/SignIn&SignOut/SignInBlankForm")

    // Your password creation logic here

    if (rememberMe) {
      // Save user's preference to remember password
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require('../../assets/images/create.png')} />
        </View>

        <Text style={styles.description}>Create new password</Text>

        <View style={styles.inputText}>
          <View style={styles.inputContainer}>
            <FontAwesome name={'lock'} size={24} color="black" style={styles.togglelock} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
              <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name={'lock'} size={24} color="black" style={styles.togglelock} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={toggleShowConfirmPassword} style={styles.toggleButton}>
              <FontAwesome name={showConfirmPassword ? 'eye-slash' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkbox}>
              {rememberMe && <FontAwesome name="check-square" size={24} color="#236bfd" />}
              {!rememberMe && <FontAwesome name="square-o" size={24} color="#236bfd" />}
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleCreatePassword} style={styles.createButton}>
            <Text style={styles.createButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingBottom: 70,
  },
  description: {
    paddingLeft: 25,
    paddingTop: 20,
    fontFamily: 'Regular',
    color: Colors.light.text,
    fontSize: 17,
  },
  image: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 0,
    backgroundColor: '#EEEEEE',
    padding: 12,
    paddingLeft: 40, 
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  togglelock: {
    position: 'absolute',
    left: 10, 
    zIndex: 1, 
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  createButton: {
    backgroundColor: '#236bfd',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: '100%',
    alignSelf: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  inputText: {
    padding: 20,
  },
});
