import React, {FunctionComponent, ReactNode, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface MainContainerProps {
  children: ReactNode;
  showLogo?: boolean;
  style?: ViewStyle;
}

// Function to ensure fontSize is always positive and above a minimum threshold
const getFontSize = (value: number, minSize: number = 10): number => {
  const fontSize = Math.max(value, minSize); // Ensure fontSize is at least minSize (default is 10)
  if (fontSize <= 0) {
    throw new Error('Font size calculation resulted in an invalid value.');
  }
  return fontSize;
};

const MainContainer: FunctionComponent<MainContainerProps> = props => {
  const [isPortrait, setIsPortrait] = useState<boolean>(true);

  // Function to handle orientation change
  const updateOrientation = () => {
    const {width, height} = Dimensions.get('window');
    setIsPortrait(height > width);
  };

  useEffect(() => {
    updateOrientation(); // Set initial orientation on load

    const subscription = Dimensions.addEventListener(
      'change',
      updateOrientation,
    );

    return () => {
      subscription?.remove();
    };
  }, []);

  // Try-catch block to safely calculate fontSize and handle errors
  let calculatedFontSize: number = 0;
  try {
    calculatedFontSize = getFontSize(
      isPortrait
        ? Dimensions.get('window').height * 0.02
        : Dimensions.get('window').height * 0.04,
    );
  } catch (error) {
    console.error('Error in fontSize calculation:', error);
    calculatedFontSize = 12; // Fallback to a default value if error occurs
  }

  // Styles that adjust based on orientation
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1c368a',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isPortrait ? '1%' : '10%',
      width: '100%',
      height: isPortrait ? '100%' : '20%',
    },
    logo_main: {
      width: isPortrait ? '40%' : '30%',
      height: isPortrait ? '50%' : '30%',
      resizeMode: 'contain',
      marginBottom: isPortrait ? 10 : 30,
    },
    text: {
      color: 'white',
      fontSize: calculatedFontSize, // Use calculated fontSize
      fontWeight: 'bold',
      marginTop: 20,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#1c368a" barStyle="light-content" />

      {/* Conditionally render the logo */}
      {props.showLogo && (
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo_main}
        />
      )}

      {props.children}
    </View>
  );
};

export default MainContainer;
