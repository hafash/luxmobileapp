import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../components/colors';
import MainContainer from '../../components/container/MainContainer';
import {RootStackParamList} from '../../components/navigation';

const UserTypeSelectionModal = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(true); // Set to true to show the modal on load

  const handleBuyerContinue = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('Buyer_Landing_Page'); // Navigate to Buyer Landing Page
  };

  const handleSellerContinue = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('Seller_Landing_Page'); // Navigate to Seller Landing Page
  };
  const handleAdminContinue = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('AdminDashboard'); // Navigate to Seller Landing Page
  };

  return (
    <MainContainer showLogo={true}>
      <View style={styles.container}>
        {/* The Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Continue as:</Text>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleBuyerContinue}>
                <Text style={styles.buttonText}>Buyer</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleSellerContinue}>
                <Text style={styles.buttonText}>Seller</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButton_Admin}
                onPress={handleAdminContinue}>
                <Text style={styles.buttonText}>Admin</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </MainContainer>
  );
};

export default UserTypeSelectionModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButton_Admin: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
