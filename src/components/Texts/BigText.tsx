import React, {FunctionComponent} from 'react';
import {Text, TextProps, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window'); // Get the screen width

const BigText: FunctionComponent<TextProps> = ({style, children}) => {
  return <Text style={[styles.bigText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: width * 0.06, // Responsive font size (6% of screen width)
    fontWeight: 'bold',
    color: '#e8e2e2',
  },
});

export default BigText;
