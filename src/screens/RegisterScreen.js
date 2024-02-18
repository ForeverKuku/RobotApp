import React from 'react';
import { View, Text, Icon, TextInput, TouchableOpacity,Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterImage from 'assets/register.jpg'; 

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
    <Image source={RegisterImage} style={styles.logo} />
    <Text style={styles.title}>Register</Text>

    <View style={styles.inputContainer}>
    <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: '#F7931A', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
      <MaterialCommunityIcons name="account" size={24} color="#F7931A" style={styles.iconStyle} />
      </View>
      <TextInput placeholder="Username" style={styles.input} />
    </View>

    <View style={styles.inputContainer}>
    <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: '#5FC88F', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
      <MaterialCommunityIcons name="email" size={24} color="#5FC88F"style={styles.iconStyle} />
      </View>
      <TextInput placeholder="Email" style={styles.input} />
    </View>

    <View style={styles.inputContainer}>
    <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: '#9F9DF3', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
      <MaterialCommunityIcons name="lock" size={24} color="#9F9DF3" style={styles.iconStyle} />
      </View>
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    </View>

    <TouchableOpacity style={styles.registerButton}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>

    {/* Social login icons */}
    <View style={styles.iconsContainer}>
    <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
      <MaterialCommunityIcons name="facebook" size={30} color="#4267B2" />
      </View>
      <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
      <MaterialCommunityIcons name="google" size={30} color="#DB4437" />
      </View>
      <View style={{
      width: 30,
      height: 30, 
      borderRadius: 15, 
      borderWidth: 2, 
      borderColor: 'white', 
      justifyContent: 'center',
      alignItems: 'center',
      overflow:'hidden',
    }}>
      <MaterialCommunityIcons name="apple" size={30} color="#000" />
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F5F6',
},
logo: {
  width: 320, 
  height: 197.29, 
  marginBottom: 20,
 
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},
inputContainer: {
  flexDirection: 'row',
  borderWidth: 1,
  
  padding: 10,
  borderRadius: 28,
  marginBottom: 10,
  width: '100%',
  alignItems: 'center', 
},
input: {
  marginLeft: 10, // Add some space between the icon and the input text
  width: '100%', // Adjust width to fill space minus icon width
},
iconStyle: {
  // Adjust icon style as needed
},
registerButton: {
  backgroundColor: '#191C32',
  padding: 10,
  borderRadius: 8,
  width: '100%',
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
},
iconsContainer: {
  flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
}
});

export default RegistrationScreen;
