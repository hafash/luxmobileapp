import React, {FunctionComponent} from 'react';
import {Text, TextProps, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window'); // Get the screen width

const RegularText: FunctionComponent<TextProps> = ({style, children}) => {
  return <Text style={[styles.regularText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  regularText: {
    fontSize: width * 0.045, // Responsive font size (4.5% of screen width)
    color: '#e8e2e2',
    marginBottom: 50,
  },
});

export default RegularText;
