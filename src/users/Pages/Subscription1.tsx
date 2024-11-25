import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation';

const {width, height} = Dimensions.get('window');

// Specify the navigation prop with the route names
type GetStartedScreenProp = StackNavigationProp<
  RootStackParamList,
  'PremiumPage' | 'ClassicPage' | 'EconomyPage'
>;

// Define wp and hp functions with parameter types
const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;

const SubscriptionB1 = () => {
  const navigation = useNavigation<GetStartedScreenProp>();

  // Handle navigation to the 'AddProduct'
  const handlePress = () => {
    navigation.navigate('BuyerPayment');
  };

  // Define state variables for prices
  const [premiumPrice, setPremiumPrice] = useState(2500);
  const [classicPrice, setClassicPrice] = useState(1500);
  const [economyPrice, setEconomyPrice] = useState(1000);

  // Define a state variable for sellerType

  // Function to update prices based on seller type
  const updatePrices = (value: string) => {
    switch (value) {
      case 'Individual_Seller':
        setPremiumPrice(2500);
        setClassicPrice(1500);
        setEconomyPrice(1000);
        break;
      case 'Private_Seller':
        setPremiumPrice(12000);
        setClassicPrice(8000);
        setEconomyPrice(5000);
        break;
      case 'NGO_seller':
        setPremiumPrice(12000);
        setClassicPrice(8000);
        setEconomyPrice(5000);
        break;
      case 'professional_Institution_Seller':
        setPremiumPrice(8500);
        setClassicPrice(5000);
        setEconomyPrice(3500);
        break;
      case 'Government_Seller':
        setPremiumPrice(11000);
        setClassicPrice(7500);
        setEconomyPrice(4700);
        break;
      case 'STECOMA_seller':
        setPremiumPrice(9500);
        setClassicPrice(6800);
        setEconomyPrice(4300);
        break;
      default:
        setPremiumPrice(12000);
        setClassicPrice(8000);
        setEconomyPrice(5000);
        break;
    }
  };

  // Render the subscription cards
  const renderSubscriptionCard = (
    title: string,
    price: number,
    duration: string,
  ) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.price}>
        <Text style={styles.currency}>RWF </Text>
        {price}
        <Text style={styles.annually}> {duration}</Text>
      </Text>
      <View style={styles.cardDivider} />
      <Text style={styles.cardDetails}>Membership for {duration}</Text>
      <Text style={styles.cardDetails}>24/7 support</Text>
      <TouchableOpacity onPress={handlePress} style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <RNPickerSelect
          onValueChange={(value: string | null) => {
            if (value !== null) {
              updatePrices(value);
            }
          }}
          items={[
            {label: 'Individual', value: 'Individual_Seller'},
            {label: 'Private Company', value: 'Private_Seller'},
            {label: 'NGO, Schools & Church', value: 'NGO_seller'},
            {
              label: 'Members of Professional Institution',
              value: 'professional_Institution_Seller',
            },
            {label: 'Government Institution', value: 'Government_Seller'},
            {label: 'Member of STECOMA', value: 'STECOMA_seller'},
          ]}
          placeholder={{
            label: '  Choose Customer Category',
            value: null,
            color: '#ffffff',
          }}
          style={{
            inputIOS: {
              backgroundColor: '#6200EE',
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 25,
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '600',
            },
            inputAndroid: {
              backgroundColor: colors.primary,
              paddingVertical: 20,
              paddingHorizontal: 85,
              borderRadius: 25,
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '600',
            },
            iconContainer: {
              top: 15,
              right: 10,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <FontAwesome5 style={styles.ArrowDownIcons} name="chevron-down" />
          )}
        />
      </View>

      {/* Subscription Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Choose a convenient subscription package
        </Text>
      </View>

      {/* Subscription Cards */}
      <View style={styles.columnContainer}>
        {renderSubscriptionCard('PREMIUM', premiumPrice, 'Annually')}
        {renderSubscriptionCard('CLASSIC', classicPrice, '6 months')}
        {renderSubscriptionCard('ECONOMY', economyPrice, '3 months')}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    paddingBottom: hp(0),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: wp(5),
    paddingBottom: 3,
  },
  descriptionContainer: {
    backgroundColor: colors.secondary,
    paddingVertical: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(4),
    borderRadius: 10,
    marginBottom: hp(2),
  },
  descriptionText: {
    color: '#fff',
    fontSize: wp(4),
    textAlign: 'center',
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginBottom: hp(3),
    elevation: 15,
  },
  cardContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingVertical: hp(3),
    paddingHorizontal: wp(5),
    alignItems: 'center',
    width: wp(90),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    padding: 20,
    elevation: 15,
    marginBottom: hp(2),
  },
  cardTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primary,
  },
  price: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#000000',
  },
  currency: {
    fontSize: wp(4),
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
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: colors.primary,
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    borderRadius: 20,
    marginTop: hp(3),
  },
  getStartedText: {
    color: '#fff',
    fontSize: wp(3),
  },
  ArrowDownIcons: {
    position: 'absolute',
    right: 20,
    top: 15,
    color: colors.active,
  },
});

export default SubscriptionB1;
