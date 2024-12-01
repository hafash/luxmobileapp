import React, {FunctionComponent, ReactNode, useEffect, useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../components/colors';

interface MainContainerProps {
  children: ReactNode;
  title?: string; // Title for the current screen
  style?: ViewStyle;
}

// Function to calculate font size dynamically
const getFontSize = (value: number, minSize: number = 10): number => {
  const fontSize = Math.max(value, minSize);
  return fontSize;
};

const MainContainer: FunctionComponent<MainContainerProps> = props => {
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get('window'),
  );

  // Update dimensions on screen size change
  const updateDimensions = () => {
    setScreenDimensions(Dimensions.get('window'));
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    return () => {
      subscription?.remove();
    };
  }, []);

  // Calculate font size based on screen size
  const calculatedFontSize = getFontSize(screenDimensions.width * 0.05, 12);

  // Styles for responsive layout
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1c368a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      width: '100%',
      backgroundColor: colors.secondary,
      paddingVertical: screenDimensions.height * 0.0001, // Keep this if needed
      paddingHorizontal: 0, // Remove the padding to ensure it starts from the edge
      alignItems: 'flex-start', // Align items to the start (left side)
      justifyContent: 'center',
    },
    headerText: {
      color: 'white',
      fontSize: calculatedFontSize,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    contentContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#1c368a" barStyle="light-content" />

      {/* Header Section */}
      {props.title && (
        <View style={styles.header}>
          <Text style={styles.headerText}>{props.title}</Text>
        </View>
      )}

      {/* Content Section */}
      <View style={styles.contentContainer}>{props.children}</View>
    </View>
  );
};

export default MainContainer;
