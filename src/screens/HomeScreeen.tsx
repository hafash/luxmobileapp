import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RegularButton from '../components/Buttons/RegularButton';
import MainContainer from '../components/container/MainContainer';

/**
 * Home component allows users to select a role (Seller or Buyer)
 * and navigate to the respective registration page.
 */
const Home: React.FC = () => {
  // State management for selected role and dropdown visibility
  const [selectedRole, setSelectedRole] = useState<string>('Seller');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  // Navigation hook for navigating between screens
  const navigation = useNavigation<NavigationProp<any>>();

  // Set up status bar appearance on component mount
  useEffect(() => {
    // Set status bar style and appearance
    StatusBar.setBarStyle('light-content'); // Light content for dark background
    StatusBar.setBackgroundColor('#1c368a'); // Set background color to black
    StatusBar.setTranslucent(true); // Makes the status bar blend with the app's background

    // Reset status bar styles on cleanup
    return () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#1c368a'); // Reset to white background on cleanup
    };
  }, []);

  // Toggle visibility of the role selection dropdown
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  // Handle role selection and navigation
  // Handle role selection and navigation
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setDropdownVisible(false);

    if (role === 'Seller') {
      navigation.navigate('SellerRegister'); // Navigate to RegisterSeller screen
    } else if (role === 'Buyer') {
      navigation.navigate('BuyerRegister'); // Navigate to RegisterBuyer screen
    }
  };

  // Dynamic styles based on orientation and screen size
  const defaultSizes = {textSize: 14, iconSize: 20};
  const styles = DynamicStyles(false, 'small', defaultSizes);

  return (
    <MainContainer showLogo={true}>
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>

        {/* Dropdown for selecting user role */}
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={toggleDropdown}>
          <Text style={styles.dropdownLabel}>As</Text>
          <Text style={styles.pickerSign}>▼</Text>
        </TouchableOpacity>

        {/* Dropdown content for role selection */}
        {dropdownVisible && (
          <View style={styles.combinedContainer}>
            {['Seller', 'Buyer'].map(role => (
              <TouchableOpacity
                key={role}
                style={styles.roleItem}
                onPress={() => handleRoleSelect(role)}>
                <Text
                  style={[
                    styles.roleText,
                    role === selectedRole
                      ? styles.selectedText
                      : styles.unselectedText,
                  ]}>
                  {role}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Link to login page */}
        <Text style={styles.haveAccount}>Already have an account?</Text>
        <RegularButton onPress={() => navigation.navigate('Login')}>
          <Text>LOGIN</Text>
        </RegularButton>
      </View>
    </MainContainer>
  );
};

/**
 * Dynamic styles based on the orientation, screen size, and size preferences.
 * @param {boolean} isPortrait - Device orientation flag
 * @param {string} screenSizeCategory - Screen size category (e.g., 'small', 'large')
 * @param {object} sizes - Size preferences for text and icons
 * @returns {object} - Styles object
 */
const DynamicStyles = (
  isPortrait: boolean,
  screenSizeCategory: string,
  sizes: any,
) => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: isPortrait ? 20 : 40,
      width: isPortrait ? '70%' : '51%',
    },
    title: {
      fontSize: sizes.textSize * 2,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: isPortrait ? 10 : 0,
      textAlign: 'center',
      width: '150%',
    },
    dropdownHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: isPortrait ? 10 : 0,
    },
    dropdownLabel: {
      color: '#FFFFFF',
      fontSize: sizes.textSize * 2,
    },
    pickerSign: {
      color: '#FFFFFF',
      fontSize: sizes.textSize * 2,
    },
    combinedContainer: {
      width: '150%',
      borderRadius: 15,
      backgroundColor: '#E0E0E0',
      overflow: 'hidden',
      marginBottom: isPortrait ? 30 : -23,
      paddingHorizontal: isPortrait ? 1 : 1,
    },
    roleItem: {
      paddingVertical: isPortrait ? 15 : 10,
      paddingHorizontal: isPortrait ? 30 : 40,
      borderBottomWidth: 1,
      borderBottomColor: '#A9A9A9',
    },
    roleText: {
      fontSize: sizes.textSize,
    },
    selectedText: {
      fontWeight: 'bold',
      color: '#060000',
    },
    unselectedText: {
      color: '#444040',
      opacity: 0.6,
    },
    haveAccount: {
      color: '#A0A0A0',
      marginTop: 30,
      marginBottom: isPortrait ? 15 : 10,
      fontSize: isPortrait ? sizes.textSize * 0.97 : sizes.textSize,
      textAlign: 'center',
    },
  });
};

export default Home;
