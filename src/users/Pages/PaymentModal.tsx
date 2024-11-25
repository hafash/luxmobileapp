import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation';

// interface PaymentModalProps {
//   visible: boolean;
//   onClose: () => void;
// }
type PaymentModalProps = {
  visible: boolean;
  onClose: () => void;
};

type GetStartedScreenProp = StackNavigationProp<
  RootStackParamList,
  'PremiumPage' | 'ClassicPage' | 'EconomyPage'
>;

const PaymentModal: React.FC<PaymentModalProps> = ({visible, onClose}) => {
  const navigation = useNavigation<GetStartedScreenProp>();

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: new Date(),
    cvv: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setCardDetails({...cardDetails, expiryDate: selectedDate});
    }
  };

  const handleCompletePayment = () => {
    if (
      (paymentMethod === 'card' &&
        cardDetails.cardNumber !== '' &&
        cardDetails.cardholderName !== '' &&
        cardDetails.expiryDate &&
        cardDetails.cvv !== '') ||
      (paymentMethod === 'mobile' && phoneNumber !== '')
    ) {
      navigation.navigate('Seller_Landing_Page');
    }
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Choose Payment Method</Text>

          {!paymentMethod && (
            <>
              {/* Show payment method buttons only if none selected */}
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handlePaymentMethod('card')}>
                <Text style={styles.optionText}>Pay with Card</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handlePaymentMethod('mobile')}>
                <Text style={styles.optionText}>Pay with Mobile Money</Text>
              </TouchableOpacity>
            </>
          )}

          {paymentMethod === 'card' && (
            <View style={styles.inputContainer}>
              <Text style={styles.sectionTitle}>Card Payment</Text>

              {/* Cardholder Name Input */}
              <Text style={styles.label}>Cardholder Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Cardholder Name"
                value={cardDetails.cardholderName}
                onChangeText={text =>
                  setCardDetails({...cardDetails, cardholderName: text})
                }
              />

              {/* Card Number Input */}
              <Text style={styles.label}>Card Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Card Number"
                keyboardType="numeric"
                value={cardDetails.cardNumber}
                onChangeText={text =>
                  setCardDetails({...cardDetails, cardNumber: text})
                }
              />

              {/* CVV Input */}
              <Text style={styles.label}>CVV</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter CVV"
                keyboardType="number-pad"
                value={cardDetails.cvv}
                onChangeText={text =>
                  setCardDetails({...cardDetails, cvv: text})
                }
              />

              {/* Expiry Date Picker */}
              <Text style={styles.label}>Expiry Date</Text>
              <TouchableOpacity
                style={styles.datePickerButton}
                onPress={() => setShowDatePicker(true)}>
                <Text style={styles.datePickerText}>
                  {cardDetails.expiryDate.toDateString()}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={cardDetails.expiryDate}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
          )}

          {paymentMethod === 'mobile' && (
            <View style={styles.inputContainer}>
              <Text style={styles.sectionTitle}>Mobile Money Payment</Text>

              {/* Mobile Money Phone Number Input */}
              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          )}

          {paymentMethod && (
            <>
              <TouchableOpacity
                style={styles.completeButton}
                onPress={handleCompletePayment}>
                <Text style={styles.completeButtonText}>Complete Payment</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  optionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 16,
  },
  completeButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PaymentModal;
