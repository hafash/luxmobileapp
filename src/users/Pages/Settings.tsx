import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type RootStackParamList = {
  Settings: undefined;
  CreatePassword: undefined;
};

const {width} = Dimensions.get('window');
const isSmallDevice = width < 350;

const settingsData = [
  {id: 1, title: 'Account', icon: 'user'},
  {id: 2, title: 'Notifications', icon: 'bell'},
  {id: 3, title: 'Privacy Policy', icon: 'shield-alt'},
  {id: 4, title: 'Logout', icon: 'sign-out-alt'},
  {id: 5, title: 'Create Password', icon: 'key'},
];

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={settingsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => {
              if (item.title === 'Create Password') {
                navigation.navigate('CreatePassword');
              }
            }}>
            <View style={styles.settingTextContainer}>
              <Icon
                name={item.icon}
                size={20}
                color="#000"
                style={styles.settingIcon}
              />
              <Text style={styles.settingText}>{item.title}</Text>
            </View>
            <Icon name="chevron-right" size={16} color="#000" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  settingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 15,
  },
  settingText: {
    fontSize: isSmallDevice ? 16 : 18,
  },
});

export default SettingsScreen;
