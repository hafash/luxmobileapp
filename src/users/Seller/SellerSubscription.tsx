import {NavigationProp, useNavigation} from '@react-navigation/native'; // For navigation
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Ensure FontAwesome5 is imported
import {RootStackParamList} from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

const SellerSubscription = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // Get responsive sizes and orientation from the custom hook
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  return (
    <View style={styles.container_for_sub}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={24} color="#000000" />
      </TouchableOpacity>
      {/* Logo Section */}
      <View style={styles.logoContainer_for_sub}>
        <Image
          source={require('../../assets/images/2logo.png')} // Replace with your logo path
          style={styles.logo_for_sub}
        />
      </View>

      {/* Subscription Message */}
      <View style={styles.messageContainer_for_sub}>
        <Text style={styles.messageText_for_sub}>Please Subscribe!</Text>
        <TouchableOpacity
          style={styles.button_for_sub}
          onPress={() => navigation.navigate('SellerSubscription')} // Navigate to ReceivedInquiryList on press
        >
          <Text style={styles.buttonText_for_sub}>Select Your Plan</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {/* Search Icon */}
        <TouchableOpacity
          style={styles.navIconContainer}
          onPress={() => navigation.navigate('messages')}>
          <FontAwesome5 name="comment" size={sizes.iconSize} color="#ffffff" />
        </TouchableOpacity>

        {/* Notification Icon */}
        <TouchableOpacity
          style={styles.navIconContainer}
          onPress={() => navigation.navigate('advertise')}>
          <FontAwesome5 name="bullhorn" size={sizes.iconSize} color="#ffffff" />
        </TouchableOpacity>

        {/* User Profile Icon */}
        <TouchableOpacity
          style={styles.navIconContainer}
          onPress={() => navigation.navigate('UserProfile')}>
          <FontAwesome5 name="user" size={sizes.iconSize} color="#ffffff" />
        </TouchableOpacity>

        {/* Settings Icon */}
        <TouchableOpacity
          style={styles.navIconContainer}
          onPress={() => navigation.navigate('Settings')}>
          <FontAwesome5 name="cog" size={sizes.iconSize} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SellerSubscription;
