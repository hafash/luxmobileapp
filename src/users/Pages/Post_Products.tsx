import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../components/colors';

const Advertise = () => {
  const {width, height} = useWindowDimensions(); // Dynamically access screen width and height

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImages, setProductImages] = useState<any[]>([]);

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
        selectionLimit: 5,
      },
      response => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets) {
          const images = response.assets.map(asset => ({
            uri: asset.uri,
            type: asset.type,
            fileName: asset.fileName,
          }));
          setProductImages(prevImages => [...prevImages, ...images]);
        }
      },
    );
  };

  const removeImage = (uri: string) => {
    setProductImages(productImages.filter(image => image.uri !== uri));
  };

  const handlePostProduct = () => {
    if (!productName || !productDescription || productImages.length === 0) {
      Alert.alert('Please fill all fields and upload at least one image');
      return;
    }
    Alert.alert('Product Posted Successfully');
    // Add actual posting logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={[styles.header, {fontSize: width * 0.06}]}>
          Advertise Your Product
        </Text>

        <View style={styles.inputContainer}>
          {/* Product Name */}
          <TextInput
            style={[styles.input, {fontSize: width * 0.04}]}
            placeholder="Enter product name"
            value={productName}
            onChangeText={setProductName}
          />

          {/* Product Description */}
          <TextInput
            style={[
              styles.input,
              styles.textArea,
              {fontSize: width * 0.04, height: height * 0.15},
            ]}
            placeholder="Enter product description"
            value={productDescription}
            onChangeText={setProductDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Image Picker and Post Product Buttons Side by Side */}
        <View style={styles.buttonContainer}>
          {/* Image Picker Button */}
          <TouchableOpacity
            onPress={handleImagePick}
            style={[
              styles.imagePickerButton,
              {padding: height * 0.02, borderRadius: width * 0.05},
            ]}>
            <FontAwesome name="upload" size={width * 0.05} color="#fff" />
            <Text
              style={[
                styles.imagePickerButtonText,
                {fontSize: width * 0.04, marginLeft: width * 0.02},
              ]}>
              Upload Images
            </Text>
          </TouchableOpacity>

          {/* Post Product Button */}
          <TouchableOpacity
            onPress={handlePostProduct}
            style={[
              styles.postButton,
              {padding: height * 0.02, borderRadius: width * 0.05},
            ]}>
            <Text style={[styles.postButtonText, {fontSize: width * 0.045}]}>
              Post Product
            </Text>
          </TouchableOpacity>
        </View>

        {/* Display Selected Images */}
        <FlatList
          data={productImages}
          renderItem={({item}) => (
            <View style={[styles.imageContainer, {marginRight: width * 0.02}]}>
              <Image
                source={{uri: item.uri}}
                style={[
                  styles.image,
                  {width: width * 0.25, height: width * 0.25},
                ]}
              />
              <TouchableOpacity
                onPress={() => removeImage(item.uri)}
                style={[styles.removeButton, {top: -10, right: -10}]}>
                <FontAwesome
                  name="times-circle"
                  size={width * 0.06}
                  color="#ff4d4d"
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          style={styles.imageList}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Ensure elements are spaced
  },
  header: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  imagePickerButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  imagePickerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postButton: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    width: '48%',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageList: {
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
  },
});

export default Advertise;
