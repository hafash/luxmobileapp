import {useNavigation} from '@react-navigation/native'; // Import the hook
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../components/navigation';

// Specify the navigation prop with the route names
type GetStartedScreenProp = StackNavigationProp<
  RootStackParamList,
  'ReceivedInquiryList'
>;

const {width, height} = Dimensions.get('window');

// Define wp and hp functions with parameter types
const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;

const isSmallDevice = width < 350;

const SubscriptionScreen = () => {
  const navigation = useNavigation<GetStartedScreenProp>(); // Use the useNavigation hook inside the component

  // Handle the Get Started button press
  const handleGetStartedPress = () => {
    // Navigate to the 'Login' screen (or any other target screen)
    navigation.navigate('ReceivedInquiryList');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Subscriptions</Text>
      </View>

      {/* Subscription Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Choose a convenient subscription package
        </Text>
      </View>

      {/* Subscription Card */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>ECONOMY</Text>
        <Text style={styles.price}>
          <Text style={styles.currency}>RWF </Text>
          35,000
          <Text style={styles.annually}> 3 Months</Text>
        </Text>
        <View style={styles.cardDivider} />
        <Text style={styles.cardDetails}>Membership for 3 Months</Text>
        <Text style={styles.cardDetails}>Free online advert for 2 weeks</Text>
        <Text style={styles.cardDetails}>24/7 support</Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStartedPress} // Call the handler when the button is pressed
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Icon name="comment" size={isSmallDevice ? 20 : 24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bullhorn" size={isSmallDevice ? 20 : 24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={isSmallDevice ? 20 : 24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={isSmallDevice ? 20 : 24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: wp(5),
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: wp(5),
  },
  descriptionContainer: {
    backgroundColor: '#ADD8E6',
    paddingVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(5),
    borderRadius: 10,
    marginBottom: hp(2),
  },
  descriptionText: {
    color: '#fff',
    fontSize: wp(4),
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingVertical: hp(3),
    paddingHorizontal: wp(5),
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginBottom: hp(3),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#999',
  },
  price: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#333',
  },
  currency: {
    fontSize: wp(5),
    color: '#333',
  },
  annually: {
    fontSize: wp(3.6),
    color: '#333',
  },
  cardDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  cardDetails: {
    fontSize: wp(4),
    color: '#777',
    marginBottom: 5,
  },
  getStartedButton: {
    backgroundColor: '#ADD8E6',
    paddingVertical: hp(2),
    paddingHorizontal: wp(10),
    borderRadius: 20,
    marginTop: hp(3),
  },
  getStartedText: {
    color: '#fff',
    fontSize: wp(3),
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(7),
    backgroundColor: '#001f99',
    marginTop: hp(23),
  },
});

export default SubscriptionScreen;
