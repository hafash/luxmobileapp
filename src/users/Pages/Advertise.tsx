import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../components/colors';
import { RootStackParamList } from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';

const Advertise = () => {
  const {isPortrait} = useResponsive();
  const styles = DynamicStyles(isPortrait);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Example data for advertisements
  const ads = [
    {id: '1', title: 'Product 1', description: 'Description of Product 1'},
    {id: '2', title: 'Product 2', description: 'Description of Product 2'},
    {id: '3', title: 'Product 3', description: 'Description of Product 3'},
    {id: '4', title: 'Product 4', description: 'Description of Product 4'},
    {id: '5', title: 'Product 5', description: 'Description of Product 5'},
    {id: '6', title: 'Product 6', description: 'Description of Product 6'},
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const currentAds = ads.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePagination = (direction: 'next' | 'prev') => {
    if (direction === 'next' && page * itemsPerPage < ads.length) {
      setPage(page + 1);
    } else if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    }
  };

  const handleAdPress = (adId: string) => {
    navigation.navigate('AdDetails', {adId});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Products Advertised</Text>

        <FlatList
          data={currentAds}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.adCard}
              onPress={() => handleAdPress(item.id)}>
              <View style={styles.adImagePlaceholder}>
                <Text style={styles.adImageText}>Image</Text>
                <Text style={styles.adImageText}>Here</Text>
              </View>
              <View style={styles.adContent}>
                <Text style={styles.adTitle}>{item.title}</Text>
                <Text style={styles.adDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <View style={styles.paginationControls}>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination('prev')}>
            <FontAwesome name="chevron-left" size={16} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.pageText}>Page {page}</Text>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination('next')}>
            <FontAwesome name="chevron-right" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="comment" size={24} color="#fff" />
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="bullhorn" size={24} color="#fff" />
          <Text style={styles.navLabel}>Ads</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user" size={24} color="#fff" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesome name="cog" size={24} color="#fff" />
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DynamicStyles = (isPortrait: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.active,
    },
    content: {
      padding: 20,
    },
    logo: {
      width: '100%',
      height: isPortrait ? 80 : 100,
      marginBottom: 20,
    },
    headerText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.primary,
      textAlign: 'center',
      marginBottom: 20,
    },
    adCard: {
      flexDirection: 'row',
      backgroundColor: colors.secondary,
      borderRadius: 8,
      marginVertical: 10,
      overflow: 'hidden',
    },
    adImagePlaceholder: {
      width: 80,
      height: 80,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    adImageText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    adContent: {
      flex: 1,
      padding: 10,
    },
    adTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    adDescription: {
      fontSize: 14,
      color: '#555',
      marginTop: 5,
    },
    paginationControls: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
    },
    paginationButton: {
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 50,
    },
    pageText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: colors.primary,
      height: 70,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
    navLabel: {
      fontSize: 12,
      color: '#fff',
      marginTop: 5,
    },
  });
};

export default Advertise;
