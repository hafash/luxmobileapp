import * as React from 'react';
import {Image} from 'react-native';
import {getScreenDimensions, useResponsiveDimensions} from '../utils/screen';

export const HeaderLogo: React.FC = () => {
  const {imageSize} = getScreenDimensions();
  const {width, height} = useResponsiveDimensions();
  // Logic to determine header height based on orientation
  const headerHeight = width > height ? height * 0.1: height * 0.1; // 20% for landscape, 40% for portrait

  return (
    <Image
      source={require('../assets/images/LuxLogo.png')} // Correct way to load local images in React Native
      style={{
        width: imageSize, // Set width based on imageSize
        height: headerHeight,
      }}
      resizeMode="contain" // Proper way to maintain aspect ratio and fit the image
    />
  );
};
