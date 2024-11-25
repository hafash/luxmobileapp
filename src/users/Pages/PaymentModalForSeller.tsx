import {Picker} from '@react-native-picker/picker'; // Import Picker
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

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
}

type GetStartedScreenProp = StackNavigationProp<
  RootStackParamList,
  'PremiumPage' | 'ClassicPage' | 'EconomyPage'
>;

const PaymentModal: React.FC<PaymentModalProps> = ({visible, onClose}) => {
  const navigation = useNavigation<GetStartedScreenProp>();

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [cardType, setCardType] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  const handleCompletePayment = () => {
    if (
      (paymentMethod === 'card' &&
        cardNumber !== '' &&
        cardholderName !== '' &&
        expirationDate !== '' &&
        cardType) ||
      (paymentMethod === 'mobile' && phoneNumber !== '')
    ) {
      navigation.navigate('AddProduct');
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
              {/* Card Type Selection */}
              <Picker
                selectedValue={cardType}
                onValueChange={itemValue => setCardType(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Select Card Type" value={null} />
                <Picker.Item label="Visa" value="Visa" />
                <Picker.Item label="MasterCard" value="MasterCard" />
                <Picker.Item label="American Express" value="Amex" />
              </Picker>

              {/* Cardholder Name Input */}
              <TextInput
                style={styles.input}
                placeholder="Cardholder Name"
                value={cardholderName}
                onChangeText={setCardholderName}
              />

              {/* Card Number Input */}
              <TextInput
                style={styles.input}
                placeholder="Enter Card Number"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
              />

              {/* Expiration Date Input */}
              <TextInput
                style={styles.input}
                placeholder="MM/YY Expiration Date"
                value={expirationDate}
                onChangeText={setExpirationDate}
              />
            </View>
          )}

          {paymentMethod === 'mobile' && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          )}

          <TouchableOpacity
            style={styles.completeButton}
            onPress={handleCompletePayment}>
            <Text style={styles.completeButtonText}>Complete Payment</Text>
          </TouchableOpacity>

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
  picker: {
    width: '100%',
    marginBottom: 10,
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
