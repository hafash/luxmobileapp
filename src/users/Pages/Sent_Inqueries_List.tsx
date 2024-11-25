import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome5
import {colors} from '../../components/colors';
import {RootStackParamList} from '../../components/navigation';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

// Specify the navigation prop with the route names
type SearchProp = StackNavigationProp<RootStackParamList, 'Inquirers'>;

// Define the TypeScript interface for the inquiry data
interface Inquiry {
  id: string;
  name: string;
  category: string;
  description: string;
  date: string;
  budget: string;
}

// Dummy data for inquiries
const inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'Jean KAMANA',
    category: 'Construction > Factories',
    description: 'Steel Lorem ipsum dolor sit ame...',
    date: 'March 10, 2024',
    budget: 'RWF 300,000',
  },
  {
    id: '2',
    name: 'Jean KAMANA',
    category: 'Construction > Factories',
    description: 'Steel Lorem ipsum dolor sit ame...',
    date: 'March 10, 2024',
    budget: 'RWF 300,000',
  },
  {
    id: '3',
    name: 'Jean KAMANA',
    category: 'Construction > Factories',
    description: 'Steel Lorem ipsum dolor sit ame...',
    date: 'March 10, 2024',
    budget: 'RWF 300,000',
  },
];

const InquiryScreen = () => {
  const navigation = useNavigation<SearchProp>();
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  // Handle press logic (for example, navigating to another screen)
  const handlePress = (item: Inquiry) => {
    // Example navigation to a detail screen
    navigation.navigate('chat', {name: item.id});
  };

  const renderInquiryItem = ({item}: {item: Inquiry}) => (
    <TouchableOpacity
      onPress={() => handlePress(item)}
      style={styles.inquiryItem}>
      <Image
        source={{uri: 'https://via.placeholder.com/50'}}
        style={styles.avatar}
      />
      <View style={styles.inquiryTextContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.budgetLabel}>Expected budget</Text>
        <Text style={styles.budget}>{item.budget}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header_for_inquiry_screen}>
        <Image
          source={require('../../assets/images/2logo.png')}
          style={styles.logo_for_inquiry_screen}
        />

        {/* Make the search icon navigable */}
        <TouchableOpacity>
          <FontAwesome name="search" size={20} color={colors.default} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title_for_inquiry_screen}>Inquiries</Text>

      {/* Inquiry List */}
      <FlatList
        data={inquiries}
        renderItem={renderInquiryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="comment" size={34} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="bullhorn" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="user" size={24} color={colors.active} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesome name="cog" size={24} color={colors.active} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InquiryScreen;
