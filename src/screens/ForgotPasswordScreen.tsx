import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import RegularButton from '../components/Buttons/RegularButton';
import MainContainer from '../components/container/MainContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import useResponsive from '../hooks/useResponsive'; // Import the custom hook
import DynamicStyles from '../styles/DynamicStyles';

type Props = {
  navigation: NavigationProp<any>;
};

export default function ForgotPasswordScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  const handlePasswordReset = () => {
    // You would typically call your backend API here to handle the password reset.
    // For now, let's simulate a success message.
    if (email.trim()) {
      Alert.alert(
        'Password Reset',
        'If an account with that phone number exists, we have sent password reset instructions to your phone.',
      );
      navigation.goBack(); // Navigate back to the login screen
    } else {
      Alert.alert('Error', 'Please enter a valid phone number.');
    }
  };

  return (
    <MainContainer showLogo={true}>
      <View style={styles.container_login}>
        <StyledTextInput
          label=""
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your phone number"
          icon="phone"
          keyboardType="phone-pad"
        />
      </View>

      <RegularButton onPress={handlePasswordReset}>
        <Text>Reset Password</Text>
      </RegularButton>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Back to Login</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}
