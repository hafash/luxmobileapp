import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import ErrorBoundary from '../../ErrorBoundary';
import {HeaderLogo} from '../navigation/HeaderLogo';
import {useResponsiveDimensions} from '../utils/screen';
import {RootStackParamList} from './types';

// Import all screens
import CodeConfirmationForSeller from '../screens/CodeConfirmationForSeller';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreeen';
import LoginScreen from '../screens/LoginScreen';
import BuyerRegister from '../users/Buyer/BuyerRegister';
import AdminDashboard from '../users/Pages/Adimndashboard';
import Advertise from '../users/Pages/Advertise';
import Buyer_Landing_Page from '../users/Pages/Buyer_Landing_Page';
import Buyer_Messages from '../users/Pages/Buyer_Messages';
import BuyerPaymentModel from '../users/Pages/BuyerPaymentModel';
import CodeConfirmationPopup from '../users/Pages/CodeConfirmationPopup';
import CreatePasswordScreen from '../users/Pages/CreatePasswordScreen';
import Dashboard from '../users/Pages/Dashboard';
import New_Inquiry from '../users/Pages/New_Inquiry';
import PaymentModal from '../users/Pages/PaymentModal';
import Post_Product from '../users/Pages/Post_Products';
import ProductsPage from '../users/Pages/ProductsPage';
import ReceivedInquiries from '../users/Pages/ReceivedInquiries';
import Seller_Chats from '../users/Pages/Seller_Chats';
import Seller_Messages from '../users/Pages/Seller_Messages';
import Sent_Inqueries_List from '../users/Pages/Sent_Inqueries_List';
import Settings from '../users/Pages/Settings';
import Subscription1 from '../users/Pages/Subscription1';
import Subscription2 from '../users/Pages/Subscription2';
import Subscription3 from '../users/Pages/Subscription3';
import SubscriptionB1 from '../users/Pages/SubscriptionB1';
import SubscriptionB2 from '../users/Pages/SubscriptionB2';
import SubscriptionB3 from '../users/Pages/SubscriptionB3';
import TermsAndCondition from '../users/Pages/TermsAndCondition';
import UserProfile from '../users/Pages/UserProfile';
import UserTypeSelectionModal from '../users/Pages/UserTypeSelectionModal';
import SellerRegister from '../users/Seller/SellerRegister';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {width, height} = useResponsiveDimensions();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#1c368a');
    StatusBar.setTranslucent(true);

    return () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#FFFFFF');
    };
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require('../assets/images/for_start.png')}
          style={[styles.logo, {width: width * 0.4, height: height * 0.4}]}
        />
      </View>
    );
  }

  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#1c368a',
            },
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerRight: () => <HeaderLogo />,
          })}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SellerRegister" component={SellerRegister} />
          <Stack.Screen name="BuyerRegister" component={BuyerRegister} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Inquiry" component={New_Inquiry} />
          <Stack.Screen name="Buyer_Messages" component={Buyer_Messages} />
          <Stack.Screen name="chat" component={Seller_Chats} />
          <Stack.Screen name="products" component={ProductsPage} />
          <Stack.Screen name="Inquirers" component={Sent_Inqueries_List} />
          <Stack.Screen name="messages" component={Seller_Messages} />
          <Stack.Screen
            name="Buyer_Landing_Page"
            component={Buyer_Landing_Page}
          />
          <Stack.Screen name="advertised" component={Advertise} />
          <Stack.Screen name="BuyerSubscription" component={Subscription1} />
          <Stack.Screen name="Subscription2" component={Subscription2} />
          <Stack.Screen name="Subscription3" component={Subscription3} />
          <Stack.Screen name="SellerSubscription" component={SubscriptionB1} />
          <Stack.Screen name="SubscriptionB2" component={SubscriptionB2} />
          <Stack.Screen name="SubscriptionB3" component={SubscriptionB3} />
          <Stack.Screen name="Seller_Landing_Page" component={Dashboard} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="Post_Your_Product" component={Post_Product} />
          <Stack.Screen
            name="SellerPaymentMethod"
            component={PaymentModal}
            initialParams={{visible: false, onClose: () => {}}}
          />
          <Stack.Screen
            name="BuyerPayment"
            component={BuyerPaymentModel}
            initialParams={{visible: false, onClose: () => {}}}
          />
          <Stack.Screen
            name="CodeConfirmation"
            component={CodeConfirmationPopup}
          />
          <Stack.Screen
            name="PaymentModal"
            component={PaymentModal}
            initialParams={{visible: false, onClose: () => {}}}
          />
          <Stack.Screen
            name="TermsAndCondition"
            component={TermsAndCondition}
          />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen
            name="ReceivedInquiryList"
            component={ReceivedInquiries}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="UserTypeSelectionModal"
            component={UserTypeSelectionModal}
          />
          <Stack.Screen
            name="CodeConfirmationForSeller"
            component={CodeConfirmationForSeller}
          />
          <Stack.Screen
            name="CreatePassword"
            component={CreatePasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    resizeMode: 'contain',
  },
});

export default AppNavigator;
