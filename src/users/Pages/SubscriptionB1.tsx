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

type GetStartedScreenProp = StackNavigationProp<
  RootStackParamList,
  'AddProduct'
>;

const {width, height} = Dimensions.get('window');
const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;

const SubscriptionB1 = () => {
  const [premiumPrice, setPremiumPrice] = useState(12000);
  const [classicPrice, setClassicPrice] = useState(8000);
  const [economyPrice, setEconomyPrice] = useState(5000);
  const [sellerType, setSellerType] = useState<string | null>(null);

  const navigation = useNavigation<GetStartedScreenProp>();

  // Function to update prices based on seller type
  const updatePrices = (value: string) => {
    setSellerType(value);
    switch (value) {
      case 'Factories':
        setPremiumPrice(15000);
        setClassicPrice(10000);
        setEconomyPrice(7000);
        break;
      case 'Suppliers':
        setPremiumPrice(14000);
        setClassicPrice(9000);
        setEconomyPrice(6000);
        break;
      case 'Hardwares':
        setPremiumPrice(13000);
        setClassicPrice(8500);
        setEconomyPrice(5500);
        break;
      case 'Furnitures':
        setPremiumPrice(12500);
        setClassicPrice(8000);
        setEconomyPrice(5000);
        break;
      case 'Quarries_Products':
        setPremiumPrice(13500);
        setClassicPrice(9500);
        setEconomyPrice(6500);
        break;
      case 'Transport_Logistics':
        setPremiumPrice(14000);
        setClassicPrice(9200);
        setEconomyPrice(5800);
        break;
      case 'Wooden_Products':
        setPremiumPrice(12000);
        setClassicPrice(8500);
        setEconomyPrice(5300);
        break;
      case 'Equipments_Tools':
        setPremiumPrice(12500);
        setClassicPrice(8800);
        setEconomyPrice(5400);
        break;
      case 'Finishing_Products':
        setPremiumPrice(14000);
        setClassicPrice(9100);
        setEconomyPrice(5900);
        break;
      case 'Home_Decor_Art_Craft':
        setPremiumPrice(14500);
        setClassicPrice(9500);
        setEconomyPrice(6000);
        break;
      case 'Garden_Products':
        setPremiumPrice(13000);
        setClassicPrice(9000);
        setEconomyPrice(5800);
        break;
      case 'Real_Estate_Plots':
        setPremiumPrice(16000);
        setClassicPrice(11000);
        setEconomyPrice(8000);
        break;
      default:
        // Reset to default prices if no valid selection
        setPremiumPrice(12000);
        setClassicPrice(8000);
        setEconomyPrice(5000);
    }
  };

  const handleClose = () => {
    console.log('Closing modal or performing an action');
  };

  const renderSubscriptionCard = (
    title: string,
    price: number,
    duration: string,
    membershipDuration: string,
    advertOffer: string,
    buttonHandler: () => void,
  ) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.price}>
        <Text style={styles.currency}>RWF </Text>
        {price}
        <Text style={styles.annually}> {duration}</Text>
      </Text>
      <View style={styles.cardDivider} />
      <Text style={styles.cardDetails}>{membershipDuration}</Text>
      <Text style={styles.cardDetails}>{advertOffer}</Text>
      <Text style={styles.cardDetails}>24/7 support</Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={buttonHandler}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <RNPickerSelect
          onValueChange={value => updatePrices(value)}
          items={[
            {label: 'Factories', value: 'Factories'},
            {label: 'Suppliers', value: 'Suppliers'},
            {label: 'Hardwares', value: 'Hardwares'},
            {label: 'Furnitures', value: 'Furnitures'},
            {label: 'Quarries Products', value: 'Quarries_Products'},
            {label: 'Transport & Logistics', value: 'Transport_Logistics'},
            {label: 'Wooden Products', value: 'Wooden_Products'},
            {label: 'Equipments & Tools', value: 'Equipments_Tools'},
            {label: 'Finishing Products', value: 'Finishing_Products'},
            {label: 'Home Décor, Art & Craft', value: 'Home_Decor_Art_Craft'},
            {label: 'Garden Products', value: 'Garden_Products'},
            {label: 'Real Estate & Plots', value: 'Real_Estate_Plots'},
          ]}
          placeholder={{
            label: '  Choose Seller type',
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
              paddingHorizontal: '40%',
              borderRadius: 25,
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '600',
            },
            iconContainer: {
              top: 25,
              right: 10,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <FontAwesome5 style={styles.ArrowDownIcons} name="chevron-down" />
          )}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Choose a convenient subscription package
        </Text>
      </View>
      <View style={styles.columnContainer}>
        {renderSubscriptionCard(
          'PREMIUM',
          premiumPrice,
          'Annually',
          'Membership for 1 year',
          'Free online advert for 2 months',
          () =>
            navigation.navigate('SellerPaymentMethod', {
              visible: true,
              onClose: handleClose,
            }),
        )}
        {renderSubscriptionCard(
          'CLASSIC',
          classicPrice,
          '6 months',
          'Membership for 6 months',
          'Free online advert for 1 month',
          () =>
            navigation.navigate('SellerPaymentMethod', {
              visible: true,
              onClose: handleClose,
            }),
        )}
        {renderSubscriptionCard(
          'ECONOMY',
          economyPrice,
          '3 Months',
          'Membership for 3 months',
          'Free online advert for 2 weeks',
          () =>
            navigation.navigate('SellerPaymentMethod', {
              visible: true,
              onClose: handleClose,
            }),
        )}
      </View>
    </ScrollView>
  );
};

// Styles remain unchanged
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
    paddingBottom: 0,
  },
  descriptionContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  columnContainer: {
    paddingHorizontal: wp(5),
  },
  cardContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 15,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  currency: {
    fontSize: 20,
    color: colors.primary,
  },
  annually: {
    fontSize: 16,
    color: '#555',
  },
  cardDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  cardDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  getStartedButton: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SubscriptionB1;
