// src/screens/WelcomeScreen.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Our App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WelcomeScreen;
