import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  badgeCount: number;
}

const data: Message[] = [
  {
    id: '1',
    name: 'Jean KAMANA',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    time: '4 min',
    badgeCount: 4,
  },
  {
    id: '2',
    name: 'Claude',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    time: '4 min',
    badgeCount: 4,
  },
  // ... other messages
];

interface MessageItemProps {
  item: Message;
  navigation: any; // Replace with your specific navigation type if using TypeScript
  onPress: (id: string) => void; // Prop to handle message press
}

const MessageItem: React.FC<MessageItemProps> = ({
  item,
  navigation,
  onPress,
}) => {
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  const handlePress = () => {
    // Navigate to chat and call the onPress handler
    onPress(item.id);
    navigation.navigate('chat', {
      name: item.name,
      avatarUri: 'https://via.placeholder.com/50', // Replace with actual avatar URI if available
    });
  };

  return (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: 'https://via.placeholder.com/50'}}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{item.badgeCount}</Text>
        </View>
      </View>
    </View>
  );
};

const MessagesScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  // Initialize the badge count state
  const [badgeCount, setBadgeCount] = useState(
    data.reduce((total, item) => total + item.badgeCount, 0),
  );

  const handleMessagePress = (id: string) => {
    // Decrease the badge count when a message is pressed
    setBadgeCount(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/2logo.png')}
            style={styles.logo}
          />

          <TouchableOpacity>
            <FontAwesome name="search" size={20} color={colors.default} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={({item}: {item: Message}) => (
            <MessageItem
              item={item}
              navigation={navigation}
              onPress={handleMessagePress}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="comment" size={24} color={colors.active} />
          {/* Display badge count here if needed */}
          {badgeCount > 0 && <Text>{badgeCount}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('advertise')}>
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

export default MessagesScreen;
