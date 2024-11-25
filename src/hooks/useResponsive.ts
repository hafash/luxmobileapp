import {useEffect, useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

// Custom hook to handle responsive design based on screen dimensions
const useResponsive = () => {
  const [isPortrait, setIsPortrait] = useState<boolean>(true);
  const [screenSizeCategory, setScreenSizeCategory] = useState<string>('');
  const [sizes, setSizes] = useState({
    appbarHeight: 0,
    textSize: 0,
    iconSize: 0,
    imageSize: 0,
    pageViewHeight: 0,
    width: 0,
    height: 0,
    screenSizeCategory: '',
  });

  const [_, forceUpdate] = useState(false);

  useEffect(() => {
    const updateLayout = ({window}: {window: ScaledSize}) => {
      const {width, height} = window;
      const isPortrait = height > width;

      let screenSizeCategory = '';
      if (width < 360) {
        screenSizeCategory = 'SmallPhone';
      } else if (width < 600) {
        screenSizeCategory = 'RegularPhone';
      } else if (width < 768) {
        screenSizeCategory = 'SmallTablet';
      } else if (width < 1024) {
        screenSizeCategory = 'RegularTablet';
      } else if (width < 1440) {
        screenSizeCategory = 'SmallDesktop';
      } else if (width < 1920) {
        screenSizeCategory = 'RegularDesktop';
      } else {
        screenSizeCategory = 'LargeMonitor';
      }

      // Set the size values with default fallbacks if they are 0 or invalid
      const appbarHeight = isPortrait ? 60 : 50;
      const textSize = isPortrait ? 16 : 18;
      const iconSize = isPortrait ? 24 : 30;
      const imageSize = isPortrait ? 200 : 250;
      const pageViewHeight = isPortrait ? 500 : 400;

      // Ensure all size values are positive
      setSizes({
        appbarHeight: appbarHeight > 0 ? appbarHeight : 16,
        textSize: textSize > 0 ? textSize : 16,
        iconSize: iconSize > 0 ? iconSize : 16,
        imageSize: imageSize > 0 ? imageSize : 200,
        pageViewHeight: pageViewHeight > 0 ? pageViewHeight : 300,
        width,
        height,
        screenSizeCategory,
      });

      setIsPortrait(isPortrait);
      setScreenSizeCategory(screenSizeCategory);

      // Force a re-render by updating the state
      forceUpdate(prev => !prev);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);

    updateLayout({window: Dimensions.get('window')});

    return () => {
      subscription?.remove();
    };
  }, []);

  return {isPortrait, sizes, screenSizeCategory};
};

export default useResponsive;
