import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, useWindowDimensions } from 'react-native';
import { colors } from '../colors';
import { ButtonProps } from './types';

const { buttonText } = colors;

// Function to ensure fontSize is never below a minimum value
const getFontSize = (value: number, minSize: number = 10): number => {
  return Math.max(value, minSize); // Ensure fontSize is at least 10
};

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  const { height, width } = useWindowDimensions();
  const isPortrait = height > width;

  const dynamicStyles = StyleSheet.create({
    button: {
      backgroundColor: '#94daff',
      width: isPortrait ? width * 0.4 : width * 0.3,
      padding: isPortrait ? height * 0.02 : height * 0.04,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: isPortrait ? 300 : 20,
    } as ViewStyle,

    text: {
      color: buttonText,
      fontSize: getFontSize(isPortrait ? height * 0.02 : height * 0.04), // Use the getFontSize function
      fontWeight: 'bold',
      marginLeft: isPortrait ? width * 0.02 : width * 0.01,
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={[dynamicStyles.button, props.style as ViewStyle]}>
      <Text style={[dynamicStyles.text, props.textStyle]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default RegularButton;
