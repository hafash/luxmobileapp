import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const products = [
  {
    title: 'Backhoe Loader',
    description: 'Product specifications',
    image: require('../../assets/features/backhoe-loader.jpg'),
  },
  {
    title: 'Steel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../../assets/features/steel.jpg'),
  },
  {
    title: 'Furniture',
    description: 'Fine craftsmanship for your home.',
    image: require('../../assets/features/furniture.jpg'),
  },
];

type PostProductNavigationProp = NavigationProp<RootStackParamList>;

export default function PostProduct() {
  const {isPortrait, sizes} = useResponsive();
  const navigation = useNavigation<PostProductNavigationProp>();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure baseFontSize is always a valid positive value
  const baseFontSize = Math.max(screenWidth > 600 ? 18 : 14, 12); // minimum 12px
  const imageScaleFactor = screenWidth / 375; // Scale images based on a standard width (375px)
  const buttonSize = screenWidth > 600 ? 70 : 60;

  const goToNextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % products.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + products.length) % products.length,
    );
  };

  const handleNavigateToNewInquiry = () => {
    navigation.navigate('Inquiry');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#142b6f'}}>
      {/* Header */}
      <View
        style={{
          paddingVertical: isPortrait ? 10 : 20,
          alignItems: 'center',
          marginBottom: isPortrait ? 20 : 15,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: baseFontSize + 4, // Ensure this is always a positive number
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Featured Products
        </Text>
      </View>

      {/* Content */}
      <ScrollView style={{flex: 1}}>
        <View style={{padding: 16}}>
          {/* Carousel */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <TouchableOpacity onPress={goToPreviousImage} style={{padding: 10}}>
              <Text style={{color: '#f8f8f8', fontSize: baseFontSize + 8}}>
                ❮
              </Text>
            </TouchableOpacity>

            <Image
              source={products[currentIndex].image}
              style={{
                width: 200 * imageScaleFactor,
                height: 150 * imageScaleFactor,
                borderRadius: 12,
                resizeMode: 'cover',
              }}
            />

            <TouchableOpacity onPress={goToNextImage} style={{padding: 10}}>
              <Text style={{color: '#f8f8f8', fontSize: baseFontSize + 8}}>
                ❯
              </Text>
            </TouchableOpacity>
          </View>

          {/* Product List */}
          {products.map((product, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#1c368a',
                padding: 16,
                marginBottom: 12,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={product.image}
                style={{
                  width: 80 * imageScaleFactor,
                  height: 80 * imageScaleFactor,
                  marginRight: 12,
                  borderRadius: 8,
                }}
              />
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#94daff',
                    fontSize: baseFontSize + 2,
                    fontWeight: 'bold',
                  }}>
                  {product.title}
                </Text>
                <Text style={{color: '#fff', marginVertical: 8}}>
                  {product.description}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Inquiry')}
                  style={{
                    backgroundColor: '#94daff',
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: baseFontSize,
                      textAlign: 'center',
                    }}>
                    Request Quote
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#94daff',
          height: buttonSize,
          paddingVertical: 8,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Buyer_Messages')}>
          <FontAwesome5 name="comment" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('advertised')}>
          <FontAwesome5 name="bullhorn" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Inquirers')}>
          <FontAwesome5 name="user" size={sizes.iconSize || 24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesome5 name="cog" size={24} color={colors.active} />
        </TouchableOpacity>

        <View
          style={{
            position: 'absolute',
            width: buttonSize,
            height: buttonSize,
            borderRadius: buttonSize / 2,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: buttonSize / 100,
            left: '50.6%',
            
            transform: [{translateX: -buttonSize / 2}],
            backgroundColor: '#1c368a',
          }}>
          <TouchableOpacity
            onPress={handleNavigateToNewInquiry}
            style={{
              width: '80%',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#94daff',
              borderRadius: buttonSize / 2,
            }}>
            <Text style={{color: '#fff', fontSize: baseFontSize + 20}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
