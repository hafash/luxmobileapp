import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RootStackParamList} from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

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
    description: 'Durable, stylish furniture for every space.',
    image: require('../../assets/features/furniture.jpg'),
  },
];

type PostProductNavigationProp = NavigationProp<RootStackParamList>;

export default function ProductsPage() {
  const navigation = useNavigation<PostProductNavigationProp>();
  const {isPortrait, screenSizeCategory, sizes} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  return (
    <View style={styles.container_for_product_page}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name="arrow-left" size={24} color="#ffffff" />
      </TouchableOpacity>

      <View style={styles.header_for_product_page}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage_for_product_page}
          resizeMode="contain"
        />
        <Text style={styles.sectionTitle_for_product_page}>
          Featured Products
        </Text>
      </View>

      <ScrollView>
        <View style={styles.featuredSection_for_product_page}>
          <View style={styles.carousel_for_product_page}>
            <TouchableOpacity
              style={styles.carouselButton_for_product_page}
              onPress={goToPreviousImage}>
              <Text style={styles.carouselArrow_for_product_page}>❮</Text>
            </TouchableOpacity>

            <Image
              style={styles.carouselImage_for_product_page}
              source={products[currentIndex].image}
            />

            <TouchableOpacity
              style={styles.carouselButton_for_product_page}
              onPress={goToNextImage}>
              <Text style={styles.carouselArrow_for_product_page}>❯</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.productCaption_for_product_page}>
            {products[currentIndex].title}
          </Text>

          <View style={styles.productList_for_product_page}>
            {products.map((product, index) => (
              <View key={index} style={styles.productItem_for_product_page}>
                <Image
                  style={styles.productImage_for_product_page}
                  source={product.image}
                />
                <View style={styles.productInfo_for_product_page}>
                  <Text style={styles.productName_for_product_page}>
                    {product.title}
                  </Text>
                  <Text style={styles.productDesc_for_product_page}>
                    {product.description}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Inquiry')} // Ensure 'Inquiry' is defined in RootStackParamList
                    style={styles.quoteBtn_for_product_page}>
                    <Text style={styles.quoteBtnText_for_product_page}>
                      Request Quote
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav_for_product_page}>
        <TouchableOpacity>
          <Icon name="home" size={24} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={24} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={24} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={24} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
