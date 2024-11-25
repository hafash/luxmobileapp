import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import RegularButton from '../components/Buttons/RegularButton';
import MainContainer from '../components/container/MainContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import useResponsive from '../hooks/useResponsive'; // Import the custom hook
import DynamicStyles from '../styles/DynamicStyles';

type Props = {
  navigation: NavigationProp<any>;
};

export default function SignInScreen({navigation}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {isPortrait, sizes, screenSizeCategory} = useResponsive();

  // Invoke the DynamicStyles function with both isPortrait and screenSizeCategory
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  // Pass isPortrait and screenSizeCategory to DynamicStyles

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <MainContainer>
      <View style={styles.container_login}>
        <StyledTextInput
          label=""
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your phone number"
          icon="phone"
        />

        <StyledTextInput
          label=""
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          // isPassword={true}
          icon="lock"
        />
      </View>

      <TouchableOpacity onPress={navigateToForgotPassword}>
        <Text style={styles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>
      <RegularButton
        onPress={() => {
          navigation.navigate('UserTypeSelectionModal');
        }}>
        <Text>LOGIN</Text>
      </RegularButton>
    </MainContainer>
  );
}
