// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import LogoImage from 'assets/logo.jpg'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'; 





const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
    <Image source={LogoImage} style={styles.logo} />
    <Text style={styles.title}>Login</Text>
    <View style={styles.cardContainer}>
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
    <Icon name="person" size={24} color="#F7931A" width={23} height={23} padding={4} bordeRadius={12}  style={styles.iconStyle} />
    </View>
    <Text style={styles.placeholderText}>name@gmail.com</Text> 
    </View>

    <View style={styles.divider} />

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
    <Icon name="lock" size={24} color="#9F9DF3" width={23} height={23}  bordeRadius={12} padding={4} style={styles.iconStyle} />
    </View>
    <Text style={styles.placeholderText}>................</Text>
    </View>
    </View>

    <View style={styles.actionContainer}>
  <TouchableOpacity style={styles.forgotPassword}>
    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
    <Text style={styles.loginButtonText}>Login</Text>
  </TouchableOpacity>
</View>
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
  },
  logo: {
    width: 320,  // Reduced from 320 to half
    height: 250.69,  // Reduced from 275 to half
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
  },
  cardContainer: {
    width: '80%',
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  inputContainer: {
    flexDirection: 'row', 
      alignItems: 'center', 
      marginBottom: 12, 
      justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
    width: '100%', 
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7F3',
    marginBottom: 12,
  },
  placeholderText: {
    fontSize: 16, 
    color:'gray',
    marginRight: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, 
  },
  loginButton: {
    backgroundColor: '#191C32',
      paddingHorizontal: 35, 
      paddingVertical: 10, 
      borderRadius: 40,
      marginLeft: 24,
  },
  loginButtonText: {
    color: 'white',
    
  },
  forgotPassword: {
    marginRight: 10,
    
  },
  forgotPasswordText: {
    color: '#767DFF',
  },
  iconsContainer: {
    flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
      width: '100%',
  }
});

export default LoginScreen;
