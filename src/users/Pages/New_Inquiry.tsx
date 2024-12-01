import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

import {StackNavigationProp} from '@react-navigation/stack';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// Specify the navigation prop with the route names
type SearchProp = StackNavigationProp<RootStackParamList, 'Inquiry'>;

export const NewInquiryScreen = () => {
  const navigation = useNavigation<SearchProp>();
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  // Pass isPortrait and screenSizeCategory to DynamicStyles
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  const [country, setCountry] = useState<string | null>(null);
  const [sector, setSector] = useState<string | null>(null);
  const [subSector, setSubSector] = useState<string | null>(null);
  const [product, setProduct] = useState<string | null>(null);
  const [budget, setBudget] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const handleAttachment = async () => {
    Alert.alert(
      'Attach File',
      'Choose an option',
      [
        {
          text: 'Take a Picture',
          onPress: async () => {
            // Updated to include the callback
            launchCamera({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User cancelled camera picker');
              } else if (response.errorCode) {
                console.log('Camera Error: ', response.errorMessage);
              } else if (response.assets) {
                console.log('Camera Result:', response.assets[0]);
                // You can store the result or perform any action
              }
            });
          },
        },
        {
          text: 'Select from Gallery',
          onPress: async () => {
            // Updated to include the callback
            launchImageLibrary({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.errorCode) {
                console.log('Image Picker Error: ', response.errorMessage);
              } else if (response.assets) {
                console.log('Gallery Result:', response.assets[0]);
                // You can store the result or perform any action
              }
            });
          },
        },
        {
          text: 'Pick a Document',
          onPress: async () => {
            try {
              const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
              });
              console.log('Document Result:', result);
              // You can store the result or perform any action
            } catch (err) {
              if (DocumentPicker.isCancel(err)) {
                console.log('User canceled document picker');
              } else {
                throw err;
              }
            }
          },
        },
        {text: 'Cancel', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  const handleSend = () => {
    if (
      !country ||
      !sector ||
      !subSector ||
      !product ||
      !budget ||
      !subject ||
      !description
    ) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Proceed with sending the inquiry
    Alert.alert(
      'INQUIRY DELIVERED!',
      'Our sellers are ready to negotiate and offer you the best deals.\n\nThank you!',
    );
  };

  return (
    <View style={styles.newInquiryContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>New Inquiry</Text>
      </View>

      {/* <TouchableOpacity
          style={{padding: 10}}
          onPress={() => {
            navigation.navigate('SearchPro');
          }}>
          <FontAwesome5 name="search" size={21} color="#1c368a" />
        </TouchableOpacity>
      */}

      <View>
        <View style={styles.form}>
          <RNPickerSelect
            onValueChange={(value: string | null) => setCountry(value)}
            items={[
              {label: 'USA', value: 'usa'},
              {label: 'Canada', value: 'canada'},
            ]}
            placeholder={{
              label: 'Select Country',
              value: null,
              color: 'black', // Set the label color to black
            }}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.label,
              placeholder: {
                color: 'black', // Ensure the placeholder label color is black
              },
            }}
          />

          <RNPickerSelect
            onValueChange={(value: string | null) => setSector(value)}
            items={[
              {label: 'Technology', value: 'technology'},
              {label: 'Finance', value: 'finance'},
            ]}
            placeholder={{
              label: 'Select Sector',
              value: null,
              color: 'black', // Set the label color to black
            }}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.label,
              placeholder: {
                color: 'black', // Ensure the placeholder label color is black
              },
            }}
          />

          <RNPickerSelect
            onValueChange={(value: string | null) => setSubSector(value)}
            items={[
              {label: 'Software', value: 'software'},
              {label: 'Hardware', value: 'hardware'},
            ]}
            placeholder={{
              label: 'Select Sub-Sector',
              value: null,
              color: 'black', // Set the label color to black
            }}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.label,
              placeholder: {
                color: 'black', // Ensure the placeholder label color is black
              },
            }}
          />

          <RNPickerSelect
            onValueChange={(value: string | null) => setProduct(value)}
            items={[
              {label: 'Laptops', value: 'laptops'},
              {label: 'Monitors', value: 'monitors'},
            ]}
            placeholder={{
              label: 'Select Product',
              value: null,
              color: 'black', // Set the label color to black
            }}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.label,
              placeholder: {
                color: 'black', // Ensure the placeholder label color is black
              },
            }}
          />

          <TextInput
            placeholder="Budget"
            value={budget}
            onChangeText={setBudget}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="product are you looking for"
            value={subject}
            onChangeText={setSubject}
            style={styles.input}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={styles.descriptionInput}
            multiline
            numberOfLines={0}
            keyboardType="numeric"
          />
          <View style={styles.attachmentContainer}>
            <TouchableOpacity
              style={styles.attachmentButton}
              onPress={handleAttachment}>
              <FontAwesome5 name="paperclip" size={20} color="#4a4545" />
              <Text style={styles.attachmentButtonText}>Attach File</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('messages')}>
          <FontAwesome5 name="comment" size={24} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('advertised')}>
          <FontAwesome5 name="bullhorn" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome5 name="bell" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesome5 name="cog" size={24} color={colors.active} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewInquiryScreen;
