import {NavigationProp, useNavigation} from '@react-navigation/native'; // For navigation
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../components/navigation';

const UserProfile = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    // Navigate to a different screen, for example 'Home'
    navigation.navigate('Home'); // Update 'Home' with your actual screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Profile Screen</Text>

      {/* Add a button to trigger navigation */}
      <TouchableOpacity onPress={handleNavigation} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#00796B',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserProfile;
