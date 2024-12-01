import {StackNavigationProp} from '@react-navigation/stack'; // Import the type for navigation
import React, {useState} from 'react'; // Only import React once

import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../components/colors';
import {
  handleAttachment,
  handleMicrophonePress,
} from '../../fileAttachmentUtils';
import useResponsive from '../../hooks/useResponsive';
import DynamicStyles from '../../styles/DynamicStyles';

type Message = {
  id: string;
  type: 'sent' | 'received';
  text: string;
  time: string;
};

// Define prop types for the screen
type ChatPageProps = {
  navigation: StackNavigationProp<any, any>;
};

const ChatPage = ({navigation}: ChatPageProps) => {
  const {isPortrait, sizes, screenSizeCategory} = useResponsive();
  const styles = DynamicStyles(isPortrait, screenSizeCategory, sizes);

  // State to store messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'received',
      text: 'Hello, how can I help you today?',
      time: '8:35',
    },
    {
      id: '2',
      type: 'sent',
      text: 'Hi, I need some assistance with my order.',
      time: '8:36',
    },
  ]);

  // State to store the user's input
  const [inputText, setInputText] = useState('');

  // State for dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Define dropdown options
  const options = ['Option 1', 'Option 2', 'Option 3'];

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage: Message = {
        id: (messages.length + 1).toString(),
        type: 'sent',
        text: inputText,
        time: new Date().toLocaleTimeString().slice(0, 5), // Current time
      };
      setMessages([...messages, newMessage]); // Add the new message to the list
      setInputText(''); // Clear the input field

      // Simulate receiving a response after a short delay
      setTimeout(() => {
        const receivedMessage: Message = {
          id: (messages.length + 2).toString(),
          type: 'received',
          text: 'Thank you for your message. We will get back to you shortly.',
          time: new Date().toLocaleTimeString().slice(0, 5),
        };
        setMessages(prevMessages => [...prevMessages, receivedMessage]);
      }, 1000); // Simulate a 1 second delay
    }
  };

  // Handler for option selection
  const handleOptionSelect = (option: string) => {
    Alert.alert('Option Selected', `You selected: ${option}`);
    setDropdownVisible(false); // Hide the dropdown after selection
  };

  const renderItem = ({item}: {item: Message}) => (
    <View
      style={[
        styles.messageContainer,
        item.type === 'sent' ? styles.sentMessage : styles.receivedMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container_for_chat_page}>
      {/* Header */}
      <View style={styles.header_for_chat_page}>
        <TouchableOpacity
          style={styles.backButton_chat}
          onPress={() => navigation.goBack()}></TouchableOpacity>

        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://via.placeholder.com/50'}}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>Germain</Text>
            <Text style={styles.typingText}>Online</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
          <FontAwesome name="chevron-down" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>

      {/* Dropdown Options */}
      {dropdownVisible && (
        <View style={styles.dropdownContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownOption}
              onPress={() => handleOptionSelect(option)}>
              <Text style={styles.dropdownOptionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Chat Area */}
      {/* <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatContainer}
        ListHeaderComponent={() => (
          <View style={styles.todayBadge}>
            <Text style={styles.todayText}>Today</Text>
          </View>
        )}
      /> */}
      {messages.length > 0 && (
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.chatContainer}
          ListHeaderComponent={() => (
            <View style={styles.todayBadge}>
              <Text style={styles.todayText}>Today</Text>
            </View>
          )}
        />
      )}

      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.attachmentButton}
          onPress={handleAttachment}>
          <FontAwesome name="paperclip" size={20} color="#4a4545" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Message..."
          placeholderTextColor={colors.default}
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <View style={styles.iconContainer}>
          {inputText.length > 0 ? (
            // Show send button when input is not empty
            <TouchableOpacity onPress={handleSendMessage}>
              <FontAwesome
                name="paper-plane"
                size={20}
                color={colors.default}
              />
            </TouchableOpacity>
          ) : (
            // Show other icons when input is empty
            <>
              <TouchableOpacity
                onPress={handleAttachment}
                style={{marginHorizontal: 10}}>
                <FontAwesome name="camera" size={20} color={colors.default} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleMicrophonePress(setMessages, messages)} // Call the handleMicrophonePress function
                style={{marginHorizontal: 10}}>
                <FontAwesome
                  name="microphone"
                  size={20}
                  color={colors.default}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default ChatPage;
