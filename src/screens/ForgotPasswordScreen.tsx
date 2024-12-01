import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../components/colors';
import {
  getResponsiveFontSize,
  getResponsiveSize,
  getScreenDimensions,
  getStatusBarHeight,
} from '../utils/screen';

const ForgotPasswordScreen = () => {
  // State to store the phone number input
  const [phoneNumber, setPhoneNumber] = useState('');
  const {width, height} = useWindowDimensions();
  const {isLandscape} = getScreenDimensions();
  const isSmallScreen = height < 600 && !isLandscape;

  // Dynamic sizing
  const cardWidth = isLandscape ? width * 0.6 : width * 0.9;
  const buttonHeight = getResponsiveSize(isLandscape ? 30 : 50);
  const fontSizeMultiplier = isSmallScreen ? 0.85 : 1;

  // Handle Reset Password
  const handleResetPassword = () => {
    // Simple validation for phone number
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a phone number');
      return;
    }

    // Proceed with reset password logic, e.g., make an API call
    Alert.alert('Success', 'Verification code sent to your phone');
    // You can replace the above with your actual logic (API call, etc.)
  };

  return (
    <View
      style={[
        styles.container,
        {flexDirection: isLandscape ? 'row' : 'column'},
      ]}>
      {/* Top Circular Icon */}
      <View
        style={[
          styles.topIconContainer,
          {
            marginBottom: isLandscape ? 0 : 1,
            marginRight: isLandscape ? 1 : 0,
          },
        ]}>
        <FontAwesome5 name="unlock-alt" size={40} color={colors.secondary} />
      </View>

      {/* Card Container */}
      <View style={[styles.card, {width: cardWidth}]}>
        {/* Title */}

        {/* Instruction Text */}
        <Text
          style={[
            styles.instruction,
            {
              fontSize: isLandscape
                ? getResponsiveFontSize(8 * fontSizeMultiplier)
                : getResponsiveFontSize(18 * fontSizeMultiplier),
              marginBottom: isLandscape ? 9 : 33,
            },
          ]}>
          Enter your Phone number to receive Verification code for reset your
          password.
        </Text>

        {/* Email Input */}
        <View
          style={[
            styles.inputContainer,
            {
              height: buttonHeight,
              marginBottom: isLandscape ? 15 : 20,
            },
          ]}>
          <FontAwesome5 name="keyboard" size={20} style={styles.icon} />
          <TextInput
            style={[
              styles.input,
              {
                fontSize: isLandscape
                  ? getResponsiveFontSize(16 * fontSizeMultiplier)
                  : getResponsiveFontSize(26 * fontSizeMultiplier),
              },
            ]}
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholderTextColor="#777"
            keyboardType="phone-pad"
          />
        </View>

        {/* Send verification code */}
        <TouchableOpacity
          style={[
            styles.button,
            {
              height: buttonHeight,
            },
          ]}
          onPress={handleResetPassword} // Call handleResetPassword on press
        >
          <Text
            style={[
              styles.buttonText,
              {fontSize: getResponsiveFontSize(14 * fontSizeMultiplier)},
            ]}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingTop: getStatusBarHeight(),
  },
  topIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  instruction: {
    color: '#777',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#333',
  },
  button: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  icon: {
    marginRight: 10,
    color: colors.secondary,
  },
});

export default ForgotPasswordScreen;
