import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import useResponsive from '../../hooks/useResponsive';
import {RootStackParamList} from '../../navigation/types'; // Ensure this imports the correct file
import DynamicStyles from '../../styles/DynamicStyles';

const BottomNavBar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use the navigation type
  const route = useRoute<RouteProp<RootStackParamList>>(); // Use the route type
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  // Pass isPortrait and screenSizeCategory to DynamicStyles
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);
  const [activeScreen, setActiveScreen] = useState<string>(route.name); // Get current screen name

  // Update the active screen when the route changes
  useEffect(() => {
    setActiveScreen(route.name);
  }, [route.name]);

  const handleNavigate = (screen: keyof RootStackParamList) => {
    setActiveScreen(screen);
    navigation.navigate(screen as never); // Type assertion to bypass TypeScript error
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => handleNavigate('messages')}>
        <FontAwesome5
          name="comment"
          size={24}
          color={activeScreen === 'messages' ? colors.gray : colors.active}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate('advertised')}>
        <FontAwesome5
          name="bullhorn"
          size={24}
          color={activeScreen === 'advertise' ? colors.gray : colors.active}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome5
          name="bell"
          size={24}
          color={activeScreen === 'notifications' ? colors.gray : colors.active}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate('Settings')}>
        <FontAwesome5
          name="cog"
          size={24}
          color={activeScreen === 'Settings' ? colors.gray : colors.active}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
