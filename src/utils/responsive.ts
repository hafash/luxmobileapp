// src/utils/responsive.ts
import { Dimensions, PixelRatio } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Get device dimensions
const { width, height } = Dimensions.get('window');

// Scale sizes for horizontal, vertical, and moderate scaling
export const responsiveWidth = (percentage: number) => wp(percentage);
export const responsiveHeight = (percentage: number) => hp(percentage);

// Scale font sizes and elements based on device size
export const responsiveFontSize = (size: number) => moderateScale(size);
export const responsiveScale = (size: number) => scale(size);
export const responsiveVerticalScale = (size: number) => verticalScale(size);

// Scale border radius, padding, and margin with PixelRatio
export const responsiveBorderRadius = (size: number) => PixelRatio.roundToNearestPixel(size * (width / 375));
export const responsivePadding = (size: number) => PixelRatio.roundToNearestPixel(size * (width / 375));
export const responsiveMargin = (size: number) => PixelRatio.roundToNearestPixel(size * (width / 375));

// Common dimensions for reference
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

// Example usage of constant dimensions for different devices
export const SMALL_DEVICE = width < 360;
export const MEDIUM_DEVICE = width >= 360 && width < 768;
export const LARGE_DEVICE = width >= 768;

export default {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveScale,
  responsiveVerticalScale,
  responsiveBorderRadius,
  responsivePadding,
  responsiveMargin,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  SMALL_DEVICE,
  MEDIUM_DEVICE,
  LARGE_DEVICE,
};
