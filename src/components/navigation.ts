export type RootStackParamList = {
  SellerRegister: undefined;

  BuyerRegister: undefined;
  Login: undefined;
  Home: undefined;
  Inquiry: undefined;
  BuyerSubscription: undefined;
  Buyer_Messages: undefined;
  Subscription: undefined;
  chat: {name: string; avatarUri?: string};
  products: undefined;
  Inquirers: undefined;
  messages: undefined;
  Buyer_Landing_Page: undefined;
  CreatePassword: undefined;
  Continue: undefined;
  PremiumPage: undefined;
  ClassicPage: undefined;
  EconomyPage: undefined;
  Icons: undefined;
  SearchPro: undefined;
  ForgotPassword: undefined;
  advertised: undefined;
  UserProfile: undefined;
  Settings: undefined;
  ReceivedInquiryList: undefined;
  Subscription1: undefined;
  Subscription2: undefined;
  Subscription3: undefined;
  SellerSubscription: undefined;
  SubscriptionB2: undefined;
  SubscriptionB3: undefined;
  TermsAndCondition: undefined;
  CodeConfirmation: undefined;
  Post_Your_Product: undefined;
  AdDetails: { adId: string };

  UserTypeSelectionModal: undefined;
  CodeConfirmationForSeller: undefined;
  Seller_Landing_Page: undefined;
  notifications: undefined;
  AdminDashboard: undefined;
  CodeComfirmation: undefined;
  SellerPaymentMethod: {visible: boolean; onClose: () => void};

  PaymentModal: {visible: boolean; onClose: () => void};
  BuyerPayment: {visible: boolean; onClose: () => void};
};
