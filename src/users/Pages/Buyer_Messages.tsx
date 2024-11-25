import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

type Contact = {
  id: string;
  name: string;
  message: string;
  time: string;
};

const data: Contact[] = [
  {id: '1', name: 'Jean KAMANA', message: 'Hey', time: '4 min'},
  {id: '2', name: 'Claude', message: 'yes', time: '4 min'},
  {id: '3', name: 'Eric', message: '?', time: '4 min'},
  {id: '4', name: 'Ange', message: 'morning', time: '4 min'},
  {id: '5', name: 'Rugwiro', message: 'Good Evening', time: '4 min'},
];

const Sectors: React.FC<{navigation: any}> = ({navigation}) => {
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Function to handle navigation to chat
  const handlePress = (contact: Contact) => {
    const conversationExists = false; // Replace with your logic to check if a conversation exists

    if (conversationExists) {
      navigation.navigate('chat', {
        name: contact.name,
        avatarUri: 'https://via.placeholder.com/50', // Replace with actual avatar URI if available
      });
    } else {
      navigation.navigate('chat', {
        avatar: 'https://example.com/path/to/avatar.jpg',
        userName: contact.name, // Use the contact's name for the chat page
      });
    }
  };

  const renderItem = ({item}: {item: Contact}) => (
    <View style={styles.itemContainer_for_sectors}>
      <View style={styles.avatar_for_sectors}>
        <TouchableOpacity>
          <FontAwesome5 name="user" size={24} color={colors.active} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer_for_sectors}>
        {/* Add onPress to trigger navigation to chat */}
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Text style={styles.name_for_sectors}>{item.name}</Text>

          <Text style={styles.message_for_sectors}>{item.message}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeContainer_for_sectors}>
        <Text style={styles.time_for_sectors}>{item.time}</Text>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>4</Text>
        </View>
      </View>
    </View>
  );

  const handleNavigateToNewInquiry = () => {
    navigation.navigate('Inquiry'); // Navigate to Inquiry screen
  };

  return (
    <View style={styles.container_for_sectors}>
      {/* Header with Logo and Search Icon */}

      <View style={styles.header_for_sectors}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/2logo.png')}
            style={styles.logo_for_sectors}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.container_for_sectors}>
        <View style={styles.tabsContainer}>
          {[
            'All Sectors',
            'Construction',
            'Agriculture',
            'Hospitality',
            'Financial',
          ].map(category => (
            <TouchableOpacity
              key={category}
              onPress={() => console.log(`Navigate to ${category}`)}
              onPressIn={() => setHoveredTab(category)}
              onPressOut={() => setHoveredTab(null)}>
              <Text
                style={[
                  styles.tabItem,
                  hoveredTab === category && styles.hoveredTab,
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* List of Contacts */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav_for_sectors}>
        <TouchableOpacity>
          <FontAwesome5 name="comment" size={24} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('advertise')}>
          <FontAwesome5 name="bullhorn" size={24} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="user" size={24} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesome5 name="cog" size={24} color={colors.active} />
        </TouchableOpacity>
        <View style={styles.addButtonContainer_for_sectors}>
          <TouchableOpacity
            onPress={handleNavigateToNewInquiry}
            style={styles.addButton_for_sectors}>
            <Text style={styles.addButtonText_for_sectors}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Sectors;
