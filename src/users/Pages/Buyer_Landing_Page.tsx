import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';

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

  // Define dynamic styling values
  const logoSize = {
    width: 150,
    height: 40,
  };

  // Ensure the font size is always positive
  const sectionTitleFontSize = isPortrait ? 18 : 22;
  const validSectionTitleFontSize =
    sectionTitleFontSize > 0 ? sectionTitleFontSize : 18; // Ensure font size is positive

  const carouselImageSize = {width: 200, height: 150};
  const productImageSize = {width: 100, height: 100};
  const quoteBtnPadding = {paddingVertical: 10, paddingHorizontal: 15};

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
          padding: isPortrait ? 10 : 0.5,
          alignItems: 'center',
          marginBottom: isPortrait ? 28 : 10,
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: logoSize.width,
            height: logoSize.height,
            marginTop: isPortrait ? 0.5 : 10,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: '#fff',
            fontSize: validSectionTitleFontSize, // Use validated font size
            textAlign: 'center',
            marginBottom: isPortrait ? 20 : 10,
          }}>
          Featured Products
        </Text>
      </View>

      <ScrollView style={{flex: 1}}>
        <View style={{padding: isPortrait ? 20 : 12}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isPortrait ? 10 : 20,
            }}>
            <TouchableOpacity
              style={{padding: isPortrait ? 10 : 15}}
              onPress={goToPreviousImage}>
              <Text style={{color: '#f8f8f8', fontSize: isPortrait ? 22 : 28}}>
                ❮
              </Text>
            </TouchableOpacity>

            <Image
              style={{
                width: carouselImageSize.width,
                height: carouselImageSize.height,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
              source={products[currentIndex].image}
            />

            <TouchableOpacity
              style={{padding: isPortrait ? 10 : 15}}
              onPress={goToNextImage}>
              <Text style={{color: '#f8f8f8', fontSize: isPortrait ? 22 : 28}}>
                ❯
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: '#fff',
              fontSize: isPortrait ? 16 : 18,
              textAlign: 'center',
              marginTop: isPortrait ? 10 : 15,
            }}>
            {products[currentIndex].title}
          </Text>

          <View style={{marginBottom: isPortrait ? 20 : 30}}>
            {products.map((product, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: '#1c368a',
                  padding: isPortrait ? 15 : 20,
                  marginVertical: isPortrait ? 10 : 15,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: productImageSize.width,
                    height: productImageSize.height,
                    marginRight: 20,
                    borderRadius: 10,
                  }}
                  source={product.image}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      color: '#94daff',
                      fontSize: isPortrait ? 14 : 16,
                      fontWeight: 'bold',
                      marginBottom: isPortrait ? 5 : 8,
                    }}>
                    {product.title}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      marginBottom: isPortrait ? 10 : 15,
                    }}>
                    {product.description}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Inquiry')}
                    style={{
                      backgroundColor: '#94daff',
                      paddingVertical: quoteBtnPadding.paddingVertical,
                      paddingHorizontal: quoteBtnPadding.paddingHorizontal,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: isPortrait ? 12 : 14,
                        textAlign: 'center',
                      }}>
                      Request Quote
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#94daff',
          height: isPortrait ? 60 : 50,
          paddingBottom: isPortrait ? 10 : 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          bottom: 0.5,
          width: '100%',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Buyer_Messages')}>
          <FontAwesome5 name="comment" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('advertised')}>
          <FontAwesome5 name="bullhorn" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Inquirers')}>
          <FontAwesome5
            name="user"
            size={sizes.iconSize > 0 ? sizes.iconSize : 16}
            color="#ffffff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesome5 name="cog" size={24} color={colors.active} />
        </TouchableOpacity>

        <View
          style={{
            position: 'absolute',
            width: isPortrait ? 60 : 60,
            height: isPortrait ? 60 : 60,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: isPortrait ? 20 : 10,
            left: '50%',
            transform: [{translateX: -30}],
            backgroundColor: '#1c368a',
          }}>
          <TouchableOpacity
            style={{
              width: '80%',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#94daff',
              borderRadius: 25,
            }}
            onPress={handleNavigateToNewInquiry}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: isPortrait ? 30 : 30,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
