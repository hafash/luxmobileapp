import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {RootStackParamList} from '../components/navigation';
import {LoginStyles as styles} from '../styles/LoginStyle';
import {
  addDimensionsListener,
  getResponsiveFontSize,
  getScreenDimensions,
} from '../utils/screen';

// Typing for navigation
type NavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp>();

  // State for screen dimensions
  const [screenDimensions, setScreenDimensions] = useState(
    getScreenDimensions(),
  );
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Add listener for screen size changes
  useEffect(() => {
    const cleanupListener = addDimensionsListener(({window: _}) => {
      setScreenDimensions(getScreenDimensions());
    });

    return () => cleanupListener(); // Proper cleanup
  }, []);

  const {width, height, isLandscape, containerPadding} = screenDimensions;

  const handleForgotPassword = () => navigation.navigate('ForgotPassword');
  const handleLogin = () => navigation.navigate('UserTypeSelectionModal');

  const dynamicFontSize = (baseSize: number) =>
    getResponsiveFontSize(isLandscape ? baseSize - 8 : baseSize);

  return (
    <KeyboardAvoidingView
      style={[
        {
          marginTop: height * 0.1,
          marginBottom: height * 0.01,
          paddingHorizontal: containerPadding,
        },
        styles.container,
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View
        style={[
          styles.card,
          {
            width: isLandscape ? width * 0.7 : width * 0.85,
            marginBottom: isLandscape ? height * 0.1 : height * 0.2,
          },
        ]}>
        <View style={styles.imageContainer}>
          <FontAwesome5
            name="user-circle"
            size={getResponsiveFontSize(isLandscape ? 14 : 80)}
            color="#1c368a"
          />
        </View>

        <Text
          style={[
            styles.header,
            {fontSize: dynamicFontSize(isLandscape ? 14 : 20)},
          ]}>
          Login
        </Text>
        <Text
          style={[
            styles.description,
            {fontSize: dynamicFontSize(isLandscape ? 14 : 14)},
          ]}>
          Enter your phone number and password to access your account.
        </Text>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="phone" size={18} style={styles.icon} />
          <TextInput
            placeholder="Enter Phone number"
            placeholderTextColor="#999"
            style={[
              styles.textInput,
              {fontSize: dynamicFontSize(isLandscape ? 14 : 16)},
            ]}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="lock" size={16} style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={[
              styles.textInput,
              {fontSize: dynamicFontSize(isLandscape ? 14 : 16)},
            ]}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesome5
              name={passwordVisible ? 'eye' : 'eye-slash'}
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text
            style={[styles.forgotPassword, {fontSize: dynamicFontSize(14)}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {paddingVertical: height * 0.02},
            {width: isLandscape ? width * 0.3 : width * 0.4},
          ]}
          onPress={handleLogin}>
          <Text
            style={[
              styles.buttonText,
              {fontSize: dynamicFontSize(isLandscape ? 16 : 18)},
            ]}>
            Login
          </Text>
        </TouchableOpacity>

        <Text style={[styles.footerText, {fontSize: dynamicFontSize(14)}]}>
          Don't have an account?{' '}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('UserTypeSelectionModal')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
