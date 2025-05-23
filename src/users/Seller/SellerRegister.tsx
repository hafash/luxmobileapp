import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import RegularButton from '../../components/Buttons/RegularButton';
import {colors} from '../../components/colors';
import MainContainer from '../../components/container/MainContainer';
import {RootStackParamList} from '../../components/navigation';

import {
  COUNTRY_OPTIONS,
  REFERRAL_OPTIONS,
  SECTOR_OPTIONS,
  SECTOR_SUBSECTORS,
  SUBSECTOR_PRODUCTS,
} from '../../constants/options';

// Dropdown Icon component
const DropdownIcon: React.FC<{style: any}> = ({style}) => (
  <FontAwesome5 style={style} name="chevron-down" />
);

// Define Picker component
const Picker = ({
  value,
  onValueChange,
  items,
  placeholder,
  style,
}: {
  value: string | null;
  onValueChange: (value: string | null) => void;
  items: {label: string; value: string}[];
  placeholder: string;
  style: any;
}) => (
  <View style={style.pickerContainer_Signupform}>
    <RNPickerSelect
      onValueChange={onValueChange}
      value={value}
      items={items}
      placeholder={{label: placeholder, value: null}}
      style={{
        inputIOS: {
          ...style.input_Signupform,
          paddingRight: 30,
        },
        inputAndroid: {
          ...style.input_Signupform,
          paddingRight: 30,
        },
        iconContainer: {top: 15, right: 10},
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => <DropdownIcon style={style.ArrowDownIcons} />}
    />
  </View>
);

const SellerRegister = () => {
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [termsShown, setTermsShown] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [formState, setFormState] = useState({
    sector: null as string | null,
    subsector: null as string | null,
    products: [] as string[], // To store selected product IDs
    name: '',
    phoneNumber: '',
    address: '',
    country: 'RW', // Default to Rwanda
    referral: '', // Add referral field
    agreeToTerms: false,
    selectedProduct: null as string | null, // Track selected product
  });

  useEffect(() => {
    const onChange = () => {
      setDimensions({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      });
    };

    // Add event listener for dimension change
    const subscription = Dimensions.addEventListener('change', onChange);

    // Cleanup on component unmount
    return () => {
      subscription.remove();
    };
  }, []);

  const isScrollable = dimensions.width > dimensions.height;

  const styles = StyleSheet.create({
    container_Signupform: {
      flex: 1,
      width: dimensions.width * 0.85,
      justifyContent: 'flex-start', // Keeps the content aligned from the top
      padding: dimensions.width * 0.05,
      // marginTop: dimensions.height * 0, // Moves the form 40% down from the top
      marginBottom: dimensions.height * 0.1,
    },

    input_Signupform: {
      fontSize: 13,
      borderBottomColor: colors.lightGray,
      borderBottomWidth: 0.5,
      // marginBottom: 5,
      color: colors.white,
    },
    checkboxContainer_Signupform: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    checkboxLabel_Signupform: {
      marginLeft: 2,
      color: colors.white,
    },
    pickerContainer_Signupform: {
      position: 'relative',
      marginBottom: 15,
    },
    ArrowDownIcons: {
      color: colors.iconColor,
      fontSize: 14,
    },
  });

  const updateField = (field: string, value: any) =>
    setFormState(prev => ({...prev, [field]: value}));

  // Validate input fields
  const validateFields = (): boolean => {
    if (!name) {
      Alert.alert('Validation Error', 'Name is required.');
      return false;
    }
    if (!phoneNumber) {
      Alert.alert('Validation Error', 'Phone Number is required.');
      return false;
    }
    if (!address) {
      Alert.alert('Validation Error', 'Address is required.');
      return false;
    }
    if (!agreeToTerms) {
      Alert.alert(
        'Validation Error',
        'You must agree to the terms and conditions.',
      );
      return false;
    }
    return true;
  };

  // Handle sign-up process
  const handleSignUp = () => {
    if (validateFields()) {
      console.log('Navigating to CodeConfirmation');
      navigation.navigate('CodeConfirmationForSeller');
    }
  };

  // Handle checkbox change with terms validation
  const handleCheckboxChange = (newValue: boolean) => {
    if (!termsShown && !agreeToTerms) {
      Alert.alert(
        'Terms and Conditions',
        'Please read and accept the terms and conditions before proceeding.',
        [
          {
            text: 'Deny',
            onPress: () => setAgreeToTerms(false),
            style: 'cancel',
          },
          {
            text: 'Accept',
            onPress: () => {
              setAgreeToTerms(true);
              setTermsShown(true);
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      setAgreeToTerms(newValue);
    }
  };

  const Content = (
    <View style={styles.container_Signupform}>
      <Picker
        value={formState.country}
        onValueChange={value => updateField('country', value)}
        items={COUNTRY_OPTIONS}
        placeholder="Select Country"
        style={styles}
      />

      <Picker
        value={formState.sector}
        onValueChange={value => updateField('sector', value)}
        items={SECTOR_OPTIONS}
        placeholder="Select Sector"
        style={styles}
      />

      <Picker
        value={formState.subsector}
        onValueChange={value => updateField('subsector', value)}
        items={SECTOR_SUBSECTORS[formState.sector ?? ''] || []}
        placeholder="Select Subsector"
        style={styles}
      />

      <Picker
        value={formState.selectedProduct}
        onValueChange={value => updateField('selectedProduct', value)}
        items={SUBSECTOR_PRODUCTS[formState.subsector ?? ''] || []}
        placeholder="Select Products"
        style={styles}
      />

      <TextInput
        style={styles.input_Signupform}
        placeholder="Name"
        placeholderTextColor={colors.lightGray}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input_Signupform}
        placeholder="Enter phone number"
        placeholderTextColor={colors.lightGray}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input_Signupform}
        placeholder="Location"
        placeholderTextColor={colors.lightGray}
        value={address}
        onChangeText={setAddress}
      />

      <Picker
        value={formState.referral}
        onValueChange={value => updateField('referral', value)}
        items={REFERRAL_OPTIONS}
        placeholder="How did you hear about us?"
        style={styles}
      />
      <View style={styles.checkboxContainer_Signupform}>
        <Checkbox
          status={agreeToTerms ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxChange(!agreeToTerms)}
          color={colors.iconColor}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('TermsAndCondition')}>
          <Text style={styles.checkboxLabel_Signupform}>
            Agree to the terms and conditions
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', width: '100%'}}>
        <RegularButton onPress={handleSignUp}>SIGN UP</RegularButton>
      </View>
    </View>
  );

  return isScrollable ? (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: colors.primary}} // Apply background color here
    >
      {Content}
    </ScrollView>
  ) : (
    <MainContainer style={{backgroundColor: colors.primary}}>
      {Content}
    </MainContainer> // Ensure background color here as well
  );
};

export default SellerRegister;
