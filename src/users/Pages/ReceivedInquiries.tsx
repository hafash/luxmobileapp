
// export default ReceivedInquiryList;

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

type SearchProp = StackNavigationProp<
  RootStackParamList,
  'ReceivedInquiryList'
>;

interface Inquiry {
  id: string;
  name: string;
  category: string;
  description: string;
  date: string;
  budget: string;
}

const inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'Jean KAMANA',
    category: 'Construction > Factories',
    description: 'Steel Lorem ipsum dolor sit ame...',
    date: 'March 10, 2024',
    budget: '30 Sack',
  },
  {
    id: '2',
    name: 'Jean KAMANA',
    category: 'Construction > Factories',
    description: 'Steel Lorem ipsum dolor sit ame...',
    date: 'March 10, 2024',
    budget: '30 Sack',
  },
  {
    id: '3',
    name: 'Jean KAMANA',
    category: 'Construction > Factories',
    description: 'Steel Lorem ipsum dolor sit ame...',
    date: 'March 10, 2024',
    budget: '30 Sack',
  },
];

const ReceivedInquiries = () => {
  const navigation = useNavigation<SearchProp>();
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  const renderInquiryItem = useCallback(
    ({item}: {item: Inquiry}) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('chat', {
            name: item.name,
            avatarUri: 'https://via.placeholder.com/50',
          })
        }
        accessibilityLabel="Open chat with user">
        <View style={styles.inquiryItem}>
          <Image
            source={{uri: 'https://via.placeholder.com/50'}}
            style={styles.avatar}
          />
          <View style={styles.inquiryTextContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.budgetLabel}>Quantity Needed</Text>
            <Text style={styles.budget}>{item.budget}</Text>
          </View>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    ),
    [navigation, styles],
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header_for_inquiry_screen}>
        <Image
          source={require('../../assets/images/2logo.png')}
          style={[styles.logo_for_inquiry_screen, {marginLeft: 10}]}
        />
        {/* Search icon */}
        <TouchableOpacity accessibilityLabel="Search inquiries">
          <FontAwesome5 name="search" size={20} color={colors.default} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title_for_inquiry_screen}>Received Inquiries</Text>

      {/* Inquiry List */}
      <FlatList
        data={inquiries}
        renderItem={renderInquiryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5} // Preloads a few items
        maxToRenderPerBatch={10} // Limits items rendered per batch
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate('messages')}
          accessibilityLabel="Messages">
          <FontAwesome5 name="comment" size={34} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('advertised')}
          accessibilityLabel="Advertise">
          <FontAwesome5 name="bullhorn" size={24} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity accessibilityLabel="User profile">
          <FontAwesome5 name="user" size={24} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          accessibilityLabel="Settings">
          <FontAwesome5 name="cog" size={24} color={colors.active} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceivedInquiries;
