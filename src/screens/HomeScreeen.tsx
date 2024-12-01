import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RegularButton from '../components/Buttons/RegularButton';
import MainContainer from '../components/container/MainContainer';

const Home: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('Seller');
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [screenHeight, setScreenHeight] = useState<number>(
    Dimensions.get('window').height,
  );

  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    // Update status bar appearance
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#1c368a');
    StatusBar.setTranslucent(true);

    const handleResize = () => {
      setScreenHeight(Dimensions.get('window').height);
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#1c368a');
      subscription?.remove();
    };
  }, []);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setDropdownVisible(false);

    if (role === 'Seller') {
      navigation.navigate('SellerRegister');
    } else if (role === 'Buyer') {
      navigation.navigate('BuyerRegister');
    }
  };

  const defaultSizes = {textSize: 14, iconSize: 20};
  const styles = DynamicStyles(false, 'small', defaultSizes, screenHeight);

  return (
    <MainContainer>
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>

        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={toggleDropdown}>
          <Text style={styles.dropdownLabel}>As</Text>
          <Text style={styles.pickerSign}>▼</Text>
        </TouchableOpacity>

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

        <Text style={styles.haveAccount}>Already have an account?</Text>
        <RegularButton onPress={() => navigation.navigate('Login')}>
          <Text>LOGIN</Text>
        </RegularButton>
      </View>
    </MainContainer>
  );
};

const DynamicStyles = (
  isPortrait: boolean,
  screenSizeCategory: string,
  sizes: any,
  screenHeight: number,
) => {
  const marginTop = screenHeight * 0.2; // 10% of screen height
  const marginBottom = screenHeight * 0.05; // 5% of screen height

  return StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: isPortrait ? 20 : 40,
      width: isPortrait ? '70%' : '51%',
      marginTop,
      marginBottom,
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
