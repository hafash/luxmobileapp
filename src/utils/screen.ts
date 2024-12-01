import React from 'react';
import {
  Dimensions,
  Platform,
  ScaledSize,
  useWindowDimensions,
} from 'react-native';

interface ScreenDimensions {
  width: number;
  height: number;
  isLandscape: boolean;
  containerPadding: number;
  imageSize: number;
  maxContainerWidth: number;
  maxContainerHeight: number;
  safeAreaInsets: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  deviceInfo: {
    isAndroid: boolean;
    isIOS: boolean;
    orientation: 'portrait' | 'landscape';
  };
}

// Function to get screen dimensions and related details
export const getScreenDimensions = (): ScreenDimensions => {
  const window = Dimensions.get('window');
  const isLandscape = window.width > window.height;

  const safeAreaInsets = {
    top: Platform.OS === 'ios' ? 44 : 0,
    bottom: Platform.OS === 'ios' ? 34 : 0,
    left: 0,
    right: 0,
  };

  return {
    width: window.width,
    height: window.height,
    isLandscape,
    containerPadding: isLandscape ? window.width * 0.1 : window.width * 0.05,
    imageSize: isLandscape ? window.height * 0.3 : window.width * 0.4,
    maxContainerWidth: window.width * 0.9,
    maxContainerHeight: window.height * 0.9,
    safeAreaInsets,
    deviceInfo: {
      isAndroid: Platform.OS === 'android',
      isIOS: Platform.OS === 'ios',
      orientation: isLandscape ? 'landscape' : 'portrait',
    },
  };
};

// Hook for responsive dimensions
export const useResponsiveDimensions = () => {
  const window = useWindowDimensions();
  const isLandscape = window.width > window.height;

  return {
    ...window,
    isLandscape,
    containerPadding: isLandscape ? window.width * 0.1 : window.width * 0.05,
    imageSize: isLandscape ? window.height * 0.3 : window.width * 0.4,
    maxContainerWidth: window.width * 0.9,
    maxContainerHeight: window.height * 0.9,
  };
};

// Get responsive font size based on screen width
export const getResponsiveFontSize = (baseFontSize: number): number => {
  const {width} = Dimensions.get('window');
  const scaleFactor = width / 375;
  return Math.round(baseFontSize * scaleFactor);
};

// Get responsive font size based on screen height
export const getResponsiveFontSizeByHeight = (baseFontSize: number): number => {
  const {height} = Dimensions.get('window');
  const scaleFactor = height / 667;
  return Math.round(baseFontSize * scaleFactor);
};

// Dynamically adjust element sizes based on screen width and height
export const getResponsiveSize = (
  size: number,
  options: {
    maxSize?: number;
    minSize?: number;
    baseWidth?: number;
  } = {},
): number => {
  const {width} = Dimensions.get('window');
  const {maxSize = Infinity, minSize = 0, baseWidth = 375} = options;

  const calculatedSize = (width / baseWidth) * size;
  return Math.min(Math.max(calculatedSize, minSize), maxSize);
};
// Dynamically adjust UI element sizes
export const getResponsiveElementSize = (
  baseWidth: number,
  baseHeight: number,
) => {
  const {width, height} = Dimensions.get('window');

  // Adjust element size based on the screen's width and height
  const widthFactor = width / baseWidth;
  const heightFactor = height / baseHeight;

  // Use the smaller of the two factors to ensure all elements fit on the screen
  const factor = Math.min(widthFactor, heightFactor);

  return factor;
};

// Listener for screen dimension changes
export const addDimensionsListener = (
  callback: (dimensions: {window: ScaledSize; screen: ScaledSize}) => void,
) => {
  const subscription = Dimensions.addEventListener('change', callback);

  return () => {
    subscription.remove(); // Correct cleanup
  };
};

// Get status bar height
export const getStatusBarHeight = (): number => {
  return Platform.OS === 'ios' ? 44 : 0;
};

// Check if the current device is a tablet
export const isTablet = (): boolean => {
  const {width, height} = Dimensions.get('window');
  const aspectRatio = height / width;
  return aspectRatio <= 1.6;
};

// Hook to use screen size listener
export const useScreenSizeListener = (
  onScreenSizeChange: (dimensions: {
    window: ScaledSize;
    screen: ScaledSize;
  }) => void,
) => {
  React.useEffect(() => {
    const cleanup = addDimensionsListener(onScreenSizeChange);

    return () => {
      cleanup(); // Cleanup listener when component unmounts
    };
  }, [onScreenSizeChange]);
};
