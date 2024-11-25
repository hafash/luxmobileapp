import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TermsAndConditions: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Terms and Conditions</Text>
      </View>

      {/* Scrollable Terms and Conditions */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.text}>
          Welcome to our application. These terms and conditions outline the
          rules and regulations for the use of our app.
        </Text>

        <Text style={styles.sectionTitle}>2. Intellectual Property</Text>
        <Text style={styles.text}>
          The content, layout, and graphics of this application are protected by
          intellectual property rights.
        </Text>

        <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
        <Text style={styles.text}>
          You must use the app in a responsible manner and not violate any laws.
        </Text>

        {/* Add more terms as needed */}
        <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
        <Text style={styles.text}>
          We are not liable for any damages that may arise from using the app.
        </Text>

        <Text style={styles.sectionTitle}>5. Governing Law</Text>
        <Text style={styles.text}>
          These terms are governed by the laws of Rwanda.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    fontSize: 16,
    color: '#007bff',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default TermsAndConditions;
