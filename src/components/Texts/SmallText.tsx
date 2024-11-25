import React, {FunctionComponent} from 'react';
import {Dimensions, StyleSheet, Text, TextProps} from 'react-native';

const {width} = Dimensions.get('window'); // Get the screen width

const SmallText: FunctionComponent<TextProps> = ({style, children}) => {
  return <Text style={[styles.smallText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: width * 0.035, // Responsive font size (3.5% of screen width)
    color: 'white',
  },
});

export default SmallText;
