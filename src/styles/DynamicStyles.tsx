import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../components/colors';
interface StyleSize {
  width: number;
  height: number;
}
export interface DynamicStylesType {
  imagePickerButton: ViewStyle;
  imagePickerButtonText: TextStyle;
  attachedImage: ImageStyle;
  postButton: ViewStyle;
  buttonText: TextStyle;
  bottomNav: ViewStyle;
  // Add other styles as necessary
}
interface Padding {
  paddingVertical: number;
  paddingHorizontal: number;
}

const DynamicStyles = (
  isPortrait: boolean,
  screenSizeCategory: string,
  sizes: any,
) => {
  let logoSize: StyleSize = {width: 150, height: 50};
  let sectionTitleFontSize = 18;
  let carouselImageSize: StyleSize = {width: 320, height: 180};
  let productImageSize: StyleSize = {width: 70, height: 70};
  let quoteBtnPadding: Padding = {paddingVertical: 8, paddingHorizontal: 15};

  switch (screenSizeCategory) {
    case 'SmallPhone':
      logoSize = {width: 100, height: 35};
      sectionTitleFontSize = 14;
      carouselImageSize = {width: 250, height: 140};
      productImageSize = {width: 60, height: 60};
      quoteBtnPadding = {paddingVertical: 6, paddingHorizontal: 10};
      break;
    case 'RegularPhone':
    case 'LargePhone':
      logoSize = {width: 150, height: 50};
      sectionTitleFontSize = 18;
      carouselImageSize = {width: 320, height: 180};
      productImageSize = {width: 70, height: 70};
      quoteBtnPadding = {paddingVertical: 8, paddingHorizontal: 15};
      break;
    case 'SmallTablet':
      logoSize = {width: 200, height: 70};
      sectionTitleFontSize = 20;
      carouselImageSize = {width: 400, height: 240};
      productImageSize = {width: 80, height: 80};
      quoteBtnPadding = {paddingVertical: 10, paddingHorizontal: 20};
      break;
    case 'RegularTablet':
      logoSize = {width: 250, height: 80};
      sectionTitleFontSize = 22;
      carouselImageSize = {width: 500, height: 300};
      productImageSize = {width: 100, height: 100};
      quoteBtnPadding = {paddingVertical: 12, paddingHorizontal: 25};
      break;
    case 'SmallDesktop':
    case 'RegularDesktop':
    case 'LargeMonitor':
      logoSize = {width: 300, height: 100};
      sectionTitleFontSize = 24;
      carouselImageSize = {width: 600, height: 360};
      productImageSize = {width: 120, height: 120};
      quoteBtnPadding = {paddingVertical: 14, paddingHorizontal: 30};
      break;
    default:
      break;
  }

  return StyleSheet.create({
    //MainContainer.tsx

    logo_main: {
      width: isPortrait ? '50%' : '60%', // Adjust width based on orientation
      height: isPortrait ? '10%' : '20%', // Adjust height based on orientation
      resizeMode: 'contain', // Ensure the logo maintains its aspect ratio
      marginBottom: isPortrait ? -90 : 0, // Adjust margin based on orientation
    },
    mainContainer: {
      backgroundColor: colors.primary,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', // Center content in both directions
      paddingHorizontal: isPortrait ? 20 : 40, // Adjust padding based on orientation
    },
    //Home.tsx

    container_HomePage: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: isPortrait ? 20 : 40, // Adjust padding for landscape mode
      width: isPortrait ? '70%' : '51%', // Adjust width based on orientation
    },
    title_HomePage: {
      fontSize: sizes.textSize,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: isPortrait ? 10 : 0, // Adjust margin based on orientation
      textAlign: 'center',
    },
    dropdownHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: isPortrait ? 10 : 0,
    },
    dropdownLabel: {
      color: '#FFFFFF',
      fontSize: sizes.textSize, // Adjust font size based on screen height
    },
    pickerSign: {
      color: '#FFFFFF',
      fontSize: sizes.textSize, // Adjust font size based on screen height
    },
    combinedContainer: {
      width: '100%',

      borderRadius: 15,
      backgroundColor: '#E0E0E0',
      overflow: 'hidden',
      marginBottom: isPortrait ? 30 : -23, // Adjust margin based on orientation
      paddingHorizontal: isPortrait ? 10 : 5,
    },
    roleItem: {
      paddingVertical: isPortrait ? 15 : 10, // Adjust padding based on orientation
      paddingHorizontal: isPortrait ? 20 : 40, // Adjust padding based on orientation
      borderBottomWidth: 1,
      borderBottomColor: '#A9A9A9',
    },
    roleText: {
      fontSize: sizes.textSize, // Adjust font size based on screen height
    },
    selectedText: {
      fontWeight: 'bold',
      color: '#060000',
    },
    unselectedText: {
      color: '#444040',
      opacity: 0.6,
    },
    haveAccount: {
      color: '#A0A0A0',
      marginTop: 20,
      marginBottom: 20,
      fontSize: isPortrait ? sizes.textSize * 0.97 : sizes.textSize, // Adjust font size based on screen height
      textAlign: 'center',
    },
    // Login.tsx
    container_login: {
      marginTop: isPortrait ? '50%' : '2%',
      marginBottom: isPortrait ? '0%' : '3%',
      paddingHorizontal: isPortrait ? '10%' : '0%', // Adjust padding based on orientation
      alignItems: 'center',
    },
    linkText: {
      fontSize: isPortrait ? 20 : 24,
      color: '#A0A0A0',
      marginBottom: isPortrait ? '4%' : '6%',
    },
    // Seller Subscription.tsx

    container_for_sub: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      padding: 20,
    },
    logoContainer_for_sub: {
      alignItems: 'center',
      marginTop: isPortrait ? 60 : 30,
    },
    logo_for_sub: {
      width: 150,
      height: 50,
      resizeMode: 'contain', // Adjusts to fit logo dimensions
    },
    messageContainer_for_sub: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: isPortrait ? 260 : 60,
    },
    messageText_for_sub: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 20,
    },
    button_for_sub: {
      backgroundColor: '#ffffff',
      borderColor: '#000',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
      marginBottom: isPortrait ? 60 : 30,
    },
    buttonText_for_sub: {
      color: '#000',
      fontSize: 16,
      textAlign: 'center',
    },

    navIconContainer: {
      padding: 4,
    },

    //ReceiveInquiry.tsx
    container_for_receivedInquiry: {
      flex: 1,
      backgroundColor: '#E0F7FA',
    },
    header_for_receivedInquiry: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#ffffff',
    },
    backButton_for_receivedInquiry: {
      marginRight: 10,
    },
    headerTitle_for_receivedInquiry: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1c368a',
    },
    listContent_for_receivedInquiry: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    inquiryItem_for_receivedInquiry: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    profileImage_for_receivedInquiry: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    inquiryDetails_for_receivedInquiry: {
      flex: 1,
    },
    inquiryName_for_receivedInquiry: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    inquiryCategory_for_receivedInquiry: {
      fontSize: 14,
      color: '#7d7d7d',
    },
    inquiryDescription_for_receivedInquiry: {
      fontSize: 14,
      color: '#7d7d7d',
    },
    inquiryQuantity_for_receivedInquiry: {
      fontSize: 14,
      marginTop: 5,
      color: '#1c368a',
    },
    quantityLabel_for_receivedInquiry: {
      fontWeight: 'bold',
      backgroundColor: '#0047bb',
      paddingHorizontal: 5,
      borderRadius: 3,
      color: '#ffffff',
    },
    inquiryDate_for_receivedInquiry: {
      fontSize: 12,
      color: '#7d7d7d',
      marginLeft: 10,
    },
    bottomNav_for_receivedInquiry: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#1c368a',
      paddingVertical: 15,
    },

    // //SignUpForms

    // container_Signupform: {
    //   flexGrow: 1,
    //   padding: isPortrait ? 20 : 40, // Adjust padding for landscape mode
    //   marginBottom: isPortrait ? 30 : 20,
    // },
    // title_Signupform: {
    //   fontSize: isPortrait ? 20 : 20, // Responsive font size
    //   fontWeight: 'bold',
    //   color: colors.white,
    //   textAlign: 'center',
    //   marginBottom: isPortrait ? -220 : 20, // Adjust margin based on orientation
    // },
    // headerContainer_Signupform: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    //   marginBottom: isPortrait ? 140 : 0, // Adjust margin based on orientation
    // },
    // input_Signupform: {
    //   height: isPortrait ? 45 : 40,
    //   fontSize: 20,
    //   borderBottomColor: colors.lightGray,
    //   borderBottomWidth: 1.5,
    //   marginBottom: isPortrait ? 8 : 10,
    //   paddingHorizontal: isPortrait ? 0 : 0,
    //   color: colors.white,
    // },
    // roleButton_Signupform: {
    //   backgroundColor: colors.lightBlue,
    //   padding: 3,
    //   borderRadius: 5,
    //   alignItems: 'center',
    //   marginBottom: isPortrait ? -220 : 20,
    //   fontSize: isPortrait ? 40 : 40,
    // },
    // roleText_Signupform: {
    //   fontSize: isPortrait ? 14 : 16, // Responsive font size
    //   color: colors.white,
    // },
    // checkboxContainer_Signupform: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginBottom: 10,
    //   paddingHorizontal: isPortrait ? 50 : 100,
    // },
    // checkboxLabel_Signupform: {
    //   marginLeft: 10,
    //   color: colors.white,
    // },
    // pickerContainer_Signupform: {
    //   position: 'relative',
    //   marginBottom: 20,
    // },
    // ArrowDownIcons: {
    //   color: colors.iconColor,
    //   fontSize: 16,
    //   marginBottom: -30,
    // },
    // radioButton: {
    //   width: 20,
    //   height: 20,
    //   borderRadius: 10,
    //   borderWidth: 1,
    //   borderColor: colors.white,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   marginRight: 10,
    // },
    // radioInner: {
    //   width: 15,
    //   height: 15,
    //   borderRadius: 7.5,
    //   backgroundColor: colors.white,
    // },
    // selectedRadio: {
    //   borderColor: colors.white,
    // },
    // selectedRadioInner: {
    //   backgroundColor: colors.white,
    // },
    // radioText: {
    //   fontSize: isPortrait ? 14 : 16, // Responsive font size
    //   color: '#cec6c6',
    //   marginRight: 10,
    // },
    // selectedRadioText: {
    //   color: colors.white,
    // },

    // modalContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: 'rgba(0,0,0,0.5)',
    // },
    // modalContent: {
    //   backgroundColor: 'white',
    //   padding: 20,
    //   borderRadius: 10,
    //   width: '80%',
    // },
    // modalTitle: {
    //   fontSize: 18,
    //   fontWeight: 'bold',
    //   marginBottom: 10,
    // },
    // closeButton: {
    //   marginTop: 20,
    //   backgroundColor: colors.primary,
    //   padding: 10,
    //   borderRadius: 5,
    //   alignItems: 'center',
    // },
    // closeButtonText: {
    //   color: 'white',
    //   fontWeight: 'bold',
    // },
    // checkboxContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginVertical: 5,
    // },
    // checkboxLabel: {
    //   marginLeft: 10,
    // },

    // inputText: {
    //   color: colors.darkGray,
    //   paddingRight: 30,
    //   borderBottomWidth: 0,
    // },
    // ArrowDownIcons_: {
    //   position: 'absolute',
    //   right: 10,
    //   top: 15,
    // },

    // Updated Styles for SignUpForm

    // title_Signupform: {
    //   fontSize: isPortrait ? 18 : 18, // Slightly reduced font size for compactness
    //   fontWeight: 'bold',
    //   color: colors.white,
    //   textAlign: 'center',
    //   marginBottom: isPortrait ? -200 : 15, // Adjusted margin to prevent overflow
    // },

    container_Signupform: {
      flexGrow: 1,
      padding: isPortrait ? 25 : 25, // Reduced padding for compactness
      marginBottom: isPortrait ? 50 : 15,
    },

    title_Signupform: {
      fontSize: isPortrait ? 18 : 18,
      fontWeight: 'bold',
      color: colors.white,
      textAlign: 'center',

      // marginLeft: isPortrait ? 20 : 40,
    },
    headerContainer_Signupform: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input_Signupform: {
      height: isPortrait ? 40 : 35, // Adjusted height for screen orientation
      fontSize: 18,
      borderBottomColor: colors.lightGray,
      borderBottomWidth: 1.2, // Thin border for a compact look
      marginBottom: isPortrait ? 6 : 8, // Spacing between inputs
      paddingLeft: 0.5, // Ensure placeholder starts at the very left
      color: colors.white, // Text color
    },
    roleButton_Signupform: {
      backgroundColor: colors.lightBlue,
      padding: 2,
      borderRadius: 5,
      alignItems: 'center',

      fontSize: isPortrait ? 38 : 38,
    },
    roleText_Signupform: {
      fontSize: isPortrait ? 13 : 15, // Slightly reduced font size for compactness
      color: colors.white,
    },
    checkboxContainer_Signupform: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      paddingHorizontal: isPortrait ? 2 : 80,
      color: colors.white,
    },
    checkboxLabel_Signupform: {
      marginLeft: 1,
      color: colors.white,
    },
    pickerContainer_Signupform: {
      position: 'relative',
      marginBottom: 15,
    },
    pickerStyle: {
      color: colors.active, // Customize text color
    },
    ArrowDownIcons: {
      color: colors.iconColor,
      fontSize: 14, // Slightly reduced font size
      marginBottom: -25,
    },
    radioButton: {
      width: 18,
      height: 18,
      borderRadius: 9,
      borderWidth: 1,
      borderColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    radioInner: {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      backgroundColor: colors.white,
    },
    selectedRadio: {
      borderColor: colors.white,
    },
    selectedRadioInner: {
      backgroundColor: colors.white,
    },
    radioText: {
      fontSize: isPortrait ? 13 : 15,
      color: '#cec6c6',
      marginRight: 8,
    },
    selectedRadioText: {
      color: colors.white,
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 15, // Reduced padding for compactness
      borderRadius: 10,
      width: '80%',
    },
    modalTitle: {
      fontSize: 16, // Slightly reduced font size
      fontWeight: 'bold',
      marginBottom: 8,
    },
    closeButton: {
      marginTop: 15,
      backgroundColor: colors.primary,
      padding: 8,
      borderRadius: 5,
      alignItems: 'center',
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 4,
    },
    checkboxLabel: {
      marginLeft: 8,
    },

    inputText: {
      color: colors.darkGray,
      paddingRight: 25,
      borderBottomWidth: 0,
      paddingLeft: 0.5, // Ensure placeholder starts at the very left
    },
    ArrowDownIcons_: {
      position: 'absolute',
      right: 8,
      top: 12,
    },

    //NewInquiry.tsx
    newInquiryContainer: {
      flex: 1,
      padding: isPortrait ? 20 : 20,
      backgroundColor: '#ffff',
      justifyContent: 'space-between',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: isPortrait ? 10 : 25,
      height: isPortrait ? 5 : 10,
    },
    // logoContainer: {
    //   alignItems: 'center',
    //   marginRight: isPortrait ? '40%' : '20%',
    // },
    title: {
      fontSize: isPortrait ? 20 : 14,
      fontWeight: 'bold',
      color: colors.default,
      alignItems: 'center',
      marginRight: isPortrait ? '50%' : '50%',
      marginTop: 2,
    },
    form: {
      backgroundColor: '#94daff',
      padding: isPortrait ? 4 : 30,
      borderRadius: 10,
      width: '100%',
      marginBottom: isPortrait ? 50 : 200,
    },
    input: {
      height: 40,
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: isPortrait ? 20 : 10,
      paddingHorizontal: 10,
      color: '#000000',
    },
    descriptionInput: {
      height: isPortrait ? 90 : 100,
      borderColor: '#0f0f10',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: isPortrait ? 20 : 10,
      color: '#000',
      backgroundColor: '#ffffff',
      borderRadius: 10,
    },
    attachmentContainer: {
      flexDirection: 'row', // Arrange buttons in a row
      justifyContent: 'space-between', // Distribute space between buttons
      alignItems: 'center', // Vertically align buttons
      marginBottom: isPortrait ? 1 : 20,
      width: '100%', // Ensure it takes up the full width
    },
    attachmentButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 5,
      marginRight: isPortrait ? 10 : 20, // Add right margin to space between buttons
    },
    attachmentButtonText: {
      color: '#4a4545',
      fontWeight: 'bold',
      marginLeft: 5,
      marginBottom: isPortrait ? 19 : 10,
    },
    sendButton: {
      backgroundColor: '#1c368a',
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
      padding: 10,
      width: '30%', // Ensure send button doesn't take up too much width
    },
    sendButtonText: {
      color: '#fff',
      fontSize: isPortrait ? 18 : 20,
      fontWeight: 'bold',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#1c368a',
      paddingVertical: isPortrait ? 20 : 10,
      position: 'absolute',
      bottom: isPortrait ? -10 : -10,
      width: '114%',
      height: isPortrait ? 90 : 60,
      alignContent: 'center',
      marginLeft: 0,
      borderRadius: 10,
    },
    imagePreview: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      marginTop: 10,
    },
    label: {
      fontSize: 16,
      color: 'black',
    },

    //ProductsPage.tsx

    container_for_product_page: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    navIcon: {
      color: colors.white,
      fontSize: isPortrait ? 20 : 12,
    },
    header_for_product_page: {
      padding: isPortrait ? 10 : 0,
      alignItems: 'center',
      backgroundColor: colors.primary,
      marginBottom: isPortrait ? -14 : -10,
    },

    logoImage_for_product_page: {
      width: logoSize.width,
      height: logoSize.height,
      marginTop: isPortrait ? -2 : -10,
    },
    featuredSection_for_product_page: {
      padding: isPortrait ? 20 : 12,
    },
    sectionTitle_for_product_page: {
      color: colors.white,
      fontSize: sectionTitleFontSize,
      textAlign: 'center',
      marginBottom: isPortrait ? 10 : 20,
    },
    carousel_for_product_page: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: isPortrait ? 10 : 20,
    },
    carouselButton_for_product_page: {
      padding: isPortrait ? 10 : 15,
    },
    carouselArrow_for_product_page: {
      color: colors.white,
      fontSize: isPortrait ? 22 : 28,
    },
    carouselImage_for_product_page: {
      width: carouselImageSize.width,
      height: carouselImageSize.height,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    productCaption_for_product_page: {
      color: colors.white,
      fontSize: sectionTitleFontSize,
      textAlign: 'center',
      marginTop: isPortrait ? 10 : 20,
    },
    productList_for_product_page: {
      marginBottom: isPortrait ? 10 : 20,
    },
    productItem_for_product_page: {
      backgroundColor: colors.primary,
      padding: isPortrait ? 10 : 15,
      marginVertical: isPortrait ? 10 : 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    productImage_for_product_page: {
      width: productImageSize.width,
      height: productImageSize.height,
      marginRight: 20,
      borderRadius: 10,
    },
    productInfo_for_product_page: {
      flex: 1,
    },
    productName_for_product_page: {
      color: colors.secondary,
      fontSize: sectionTitleFontSize,
      marginBottom: 5,
    },
    productDesc_for_product_page: {
      color: colors.white,
      fontSize: sectionTitleFontSize - 2,
      marginBottom: 10,
    },
    quoteBtn_for_product_page: {
      backgroundColor: colors.secondary,
      borderRadius: 10,
      paddingVertical: quoteBtnPadding.paddingVertical,
      paddingHorizontal: quoteBtnPadding.paddingHorizontal,
    },
    quoteBtnText_for_product_page: {
      color: colors.white,
      textAlign: 'center',
    },
    bottomNav_for_product_page: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: isPortrait ? 20 : 12,
      backgroundColor: colors.secondary,
    },
    //ChartPage.tsx
    container_for_chat_page: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header_for_chat_page: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
      paddingHorizontal: isPortrait ? 20 : 30, // Adjust padding based on orientation
      paddingVertical: isPortrait ? 15 : 20, // Adjust padding based on orientation
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },

    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    username: {
      color: colors.white,
      fontSize: isPortrait ? 16 : 18, // Adjust font size based on orientation
      fontWeight: 'bold',
    },

    typingText: {
      color: colors.darkGray,
      fontSize: isPortrait ? 14 : 16, // Adjust font size based on orientation
    },

    // Chat container styles
    chatContainer: {
      paddingHorizontal: isPortrait ? 20 : 30, // Adjust padding based on orientation
      paddingVertical: isPortrait ? 10 : 15, // Adjust padding based on orientation
    },

    todayBadge: {
      alignSelf: 'center',
      backgroundColor: colors.gray,
      paddingVertical: isPortrait ? 5 : 10, // Adjust padding based on orientation
      paddingHorizontal: isPortrait ? 20 : 30, // Adjust padding based on orientation
      borderRadius: 20,
      marginBottom: isPortrait ? 10 : 15, // Adjust margin based on orientation
    },

    todayText: {
      color: colors.default,
      fontSize: isPortrait ? 16 : 16, // Adjust font size based on orientation
    },

    // Message styles
    messageContainer: {
      maxWidth: isPortrait ? '80%' : '70%', // Adjust maxWidth based on orientation
      padding: isPortrait ? 10 : 15, // Adjust padding based on orientation
      borderRadius: 20,
      marginBottom: isPortrait ? 5 : 10, // Adjust margin based on orientation
    },

    sentMessage: {
      alignSelf: 'flex-end',
      backgroundColor: colors.primary,
    },

    receivedMessage: {
      alignSelf: 'flex-start',
      backgroundColor: colors.secondary,
    },

    messageText: {
      color: colors.white,
      fontSize: isPortrait ? 16 : 18, // Adjust font size based on orientation
    },

    messageTime: {
      color: colors.darkGray,
      fontSize: isPortrait ? 12 : 14, // Adjust font size based on orientation
      alignSelf: 'flex-end',
      marginTop: isPortrait ? 2 : 4, // Adjust margin based on orientation
    },

    // Input container styles
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: isPortrait ? 10 : 15, // Adjust padding based on orientation
      backgroundColor: colors.lightGray,
      borderRadius: 30,
      margin: isPortrait ? 10 : 15, // Adjust margin based on orientation
    },

    textInput: {
      flex: 1,
      fontSize: isPortrait ? 16 : 18, // Adjust font size based on orientation
      color: colors.primary,
      paddingLeft: 10, // Fixed padding
    },

    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10, // Fixed margin
    },
    avatar: {
      width: 50, // Fixed width
      height: 50, // Fixed height
      borderRadius: 25, // Fixed border radius
      marginRight: 40,
    },

    dropdownContainer: {
      position: 'absolute',
      top: 60, // Adjust based on your header height
      right: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      elevation: 5, // For Android shadow
      zIndex: 1000, // Ensure it appears above other components
    },
    dropdownOption: {
      padding: 10,
    },
    dropdownOptionText: {
      color: 'black',
    },

    //MessageScreen.tsx

    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: isPortrait ? 20 : 40, // Adjust padding for landscape mode
      paddingTop: isPortrait ? 40 : 20, // Adjust padding for landscape mode
      paddingBottom: 10,
      backgroundColor: '#fff',
    },
    logo: {
      width: isPortrait ? '80%' : '60%', // Adjust width based on orientation
      height: isPortrait ? 40 : 30, // Adjust height based on orientation
      resizeMode: 'contain',
      marginRight: isPortrait ? 27 : 15,
    },
    backButton_Message: {
      position: 'absolute',
      left: 0,
      marginRight: isPortrait ? 27 : 15,
      resizeMode: 'contain',
    },
    backButton_chat: {
      position: 'absolute',
      left: 0,
      marginRight: isPortrait ? 27 : 15,
      resizeMode: 'contain',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: isPortrait ? 15 : 10, // Adjust padding based on orientation
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },

    infoContainer: {
      flex: 1,
      paddingHorizontal: isPortrait ? 10 : 5, // Adjust padding based on orientation
    },
    name: {
      fontSize: isPortrait ? 16 : 14, // Adjust font size based on orientation
      fontWeight: 'bold',
      color: '#000',
    },
    message: {
      fontSize: isPortrait ? 14 : 12, // Adjust font size based on orientation
      color: '#555',
    },
    timeContainer: {
      alignItems: 'flex-end',
    },
    time: {
      fontSize: isPortrait ? 12 : 10, // Adjust font size based on orientation
      color: '#666',
      marginBottom: 5,
    },
    badgeContainer: {
      backgroundColor: '#94daff',
      width: isPortrait ? 24 : 20, // Adjust size based on orientation
      height: isPortrait ? 24 : 20, // Adjust size based on orientation
      borderRadius: isPortrait ? 12 : 10, // Adjust border radius
      alignItems: 'center',
      justifyContent: 'center',
    },
    badgeText: {
      color: '#fff',
      fontSize: isPortrait ? 12 : 10, // Adjust font size based on orientation
      fontWeight: 'bold',
    },
    // PostPage.tsx
    container_for_postProduct: {
      flex: 1,
      backgroundColor: '#142b6f',
    },
    header_for_postProduct: {
      padding: isPortrait ? 10 : 0.5,
      alignItems: 'center',
      marginBottom: isPortrait ? 28 : 10,
    },
    logoImage: {
      width: logoSize.width,
      height: logoSize.height,
      marginTop: isPortrait ? 0.5 : 10,
    },
    scrollView: {
      flex: 1,
    },
    featuredSection: {
      padding: isPortrait ? 20 : 12,
    },
    sectionTitle: {
      color: '#fff',
      fontSize: sectionTitleFontSize,
      textAlign: 'center',
      marginBottom: isPortrait ? 20 : 10,
    },
    carousel: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: isPortrait ? 10 : 20,
    },
    carouselButton: {
      padding: isPortrait ? 10 : 15,
    },
    carouselArrow: {
      color: '#f8f8f8',
      fontSize: isPortrait ? 22 : 28,
    },
    carouselImage: {
      width: carouselImageSize.width,
      height: carouselImageSize.height,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    productCaption: {
      color: '#fff',
      fontSize: isPortrait ? 16 : 18,
      textAlign: 'center',
      marginTop: isPortrait ? 10 : 15,
    },
    productList: {
      marginBottom: isPortrait ? 20 : 30,
    },
    productItem: {
      backgroundColor: '#1c368a',
      padding: isPortrait ? 15 : 20,
      marginVertical: isPortrait ? 10 : 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    productImage: {
      width: productImageSize.width,
      height: productImageSize.height,
      marginRight: 20,
      borderRadius: 10,
    },
    productInfo: {
      flex: 1,
    },
    productName: {
      color: '#94daff',
      fontSize: isPortrait ? 14 : 16,
      fontWeight: 'bold',
      marginBottom: isPortrait ? 5 : 8,
    },
    productDesc: {
      color: '#fff',
      marginBottom: isPortrait ? 10 : 15,
    },
    quoteBtn: {
      backgroundColor: '#94daff',
      paddingVertical: quoteBtnPadding.paddingVertical,
      paddingHorizontal: quoteBtnPadding.paddingHorizontal,
      borderRadius: 5,
    },
    quoteBtnText: {
      color: '#fff',
      fontSize: isPortrait ? 12 : 14,
      textAlign: 'center',
    },
    bottomNav_for_postProduct: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#94daff',
      height: isPortrait ? 60 : 50,
      paddingBottom: isPortrait ? 10 : 15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'absolute',
      bottom: 0.5,
      width: '100%',
    },
    addButtonContainer: {
      position: 'absolute',

      width: isPortrait ? 60 : 60,
      height: isPortrait ? 60 : 60,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: isPortrait ? 20 : 10,
      left: '50%',
      transform: [{translateX: -30}], // Adjust -30 to half of button container width
      backgroundColor: '#1c368a',
    },
    addButton: {
      width: '80%', // Adjust as needed
      height: '80%', // Adjust as needed
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#94daff',
      borderRadius: 25, // Half of width/height for circle
    },
    addButtonText: {
      color: '#ffffff',
      fontSize: isPortrait ? 30 : 30, // Adjusted for better fit
    },
    //Sector.tsx
    container_for_sectors: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header_for_sectors: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: isPortrait ? 10 : 15,
      paddingTop: isPortrait ? 15 : 15,
      backgroundColor: '#ffff',
    },
    logo_for_sectors: {
      width: logoSize.width,
      height: logoSize.height,
      marginTop: isPortrait ? 4 : -10,
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#d1cdcd',
      paddingVertical: isPortrait ? 10 : 10,
    },
    infoContainer_for_sectors: {
      flex: 1,
    },
    tabItem: {
      fontSize: isPortrait ? 15 : 18,
      color: '#000',
      fontWeight: 'bold',
    },
    hoveredTab: {
      color: colors.tabHoverColor, // Use color from commonStyles
    },
    listContent: {
      paddingHorizontal: isPortrait ? 10 : 15,
      paddingVertical: isPortrait ? 10 : 15,
    },
    itemContainer_for_sectors: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      padding: isPortrait ? 10 : 15,
      marginBottom: isPortrait ? 10 : 20,
      borderRadius: 25,
    },
    avatar_for_sectors: {
      width: 60,
      height: 60,
      borderRadius: 25,
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 50,
    },
    infoContainer_for_sector: {
      flex: 1,
    },
    name_for_sectors: {
      fontSize: isPortrait ? 16 : 18,
      fontWeight: 'bold',
      marginBottom: isPortrait ? 10 : 20,
    },
    message_for_sectors: {
      fontSize: isPortrait ? 16 : 18,
      color: '#7a7a7a',
    },
    itemContainer_for_sector: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: isPortrait ? 10 : 10,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    timeContainer_for_sectors: {
      alignItems: 'center',
    },
    time_for_sectors: {
      fontSize: isPortrait ? 16 : 16,
      color: '#7a7a7a',
    },
    notification: {
      backgroundColor: colors.notificationColor, // Use color from commonStyles
      borderRadius: 25,
      width: isPortrait ? 25 : 25,
      height: isPortrait ? 25 : 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: isPortrait ? 10 : 10,
    },
    name_for_sector: {
      fontSize: isPortrait ? 16 : 18,
      fontWeight: 'bold',
      color: '#000',
    },
    message_for_sector: {
      fontSize: isPortrait ? 16 : 18,
      color: '#555',
      textAlign: 'center',
    },
    timeContainer_for_sector: {
      alignItems: 'flex-end',
    },
    time_for_sector: {
      fontSize: isPortrait ? 16 : 18,
      color: '#666',
      marginBottom: isPortrait ? 10 : 20,
    },
    notificationText: {
      color: '#fff',
      fontSize: isPortrait ? 16 : 18,
      fontWeight: 'bold',
    },
    addButtonContainer_for_sectors: {
      position: 'absolute',
      width: isPortrait ? 60 : 60,
      height: isPortrait ? 60 : 60,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: isPortrait ? 20 : 10,
      left: '50%',
      transform: [{translateX: -30}], // Adjust -30 to half of button container width
      backgroundColor: colors.active,
    },

    addButton_for_sectors: {
      width: '80%', // Adjust as needed
      height: '80%', // Adjust as needed
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#94daff',
      borderRadius: 25, // Half of width/height for circle
    },
    addButtonText_for_sectors: {
      color: '#ffffff',
      fontSize: isPortrait ? 30 : 30, // Adjusted for better fit
    },

    userInfo_for_sectors: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    username_for_sectors: {
      color: colors.white,
      fontSize: isPortrait ? 22 : 28,
      fontWeight: 'bold',
    },
    typingText_for_sectors: {
      color: colors.darkGray,
      fontSize: isPortrait ? 22 : 28,
    },
    selectedImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginVertical: 10,
    },
    bottomNav_for_sectors: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: colors.bottomNavBgColor,
      height: isPortrait ? 60 : 50,
      paddingBottom: isPortrait ? 10 : 15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'relative',
    },
    //InquiryScreen.tsx
    header_for_inquiry_screen: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: screenSizeCategory === 'SmallPhone' ? 10 : 20,
      paddingTop: screenSizeCategory === 'SmallPhone' ? 15 : 20,
      paddingBottom: screenSizeCategory === 'SmallPhone' ? 8 : 10,
      backgroundColor: '#fff',
    },
    logo_for_inquiry_screen: {
      width: screenSizeCategory === 'SmallPhone' ? 60 : 80,
      height: screenSizeCategory === 'SmallPhone' ? 30 : 40,
      resizeMode: 'contain',
      marginLeft: screenSizeCategory === 'SmallPhone' ? 20 : 20,
    },
    title_for_inquiry_screen: {
      fontSize: screenSizeCategory === 'SmallPhone' ? 20 : 24,
      fontWeight: 'bold',
      color: '#94daff',
      marginLeft: screenSizeCategory === 'SmallPhone' ? 10 : 20,
      marginTop: screenSizeCategory === 'SmallPhone' ? 5 : 10,
    },
    list: {
      paddingHorizontal: screenSizeCategory === 'SmallPhone' ? 10 : 20,
    },
    inquiryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: screenSizeCategory === 'SmallPhone' ? 8 : 10,
      marginVertical: screenSizeCategory === 'SmallPhone' ? 8 : 10,
      borderRadius: screenSizeCategory === 'SmallPhone' ? 8 : 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: screenSizeCategory === 'SmallPhone' ? 4 : 5,
      elevation: screenSizeCategory === 'SmallPhone' ? 1 : 2,
    },
    inquiryTextContainer: {
      flex: 1,
      marginLeft: screenSizeCategory === 'SmallPhone' ? 8 : 10,
    },
    category: {
      color: '#555',
    },
    description: {
      color: '#555',
    },
    budgetLabel: {
      color: '#fff',
      marginTop: screenSizeCategory === 'SmallPhone' ? 8 : 10,
      fontWeight: 'bold',
      backgroundColor: '#1c368a',
      borderRadius: screenSizeCategory === 'SmallPhone' ? 8 : 10,
      width: screenSizeCategory === 'SmallPhone' ? '50%' : '62%',
      paddingVertical: screenSizeCategory === 'SmallPhone' ? 8 : 10,
      paddingHorizontal: screenSizeCategory === 'SmallPhone' ? 8 : 10,
    },
    budget: {
      color: '#000',
    },
    date: {
      color: '#999',
      fontSize: screenSizeCategory === 'SmallPhone' ? 12 : 14,
    },
    backButton: {
      position: 'absolute',
      left: 0,
      top: screenSizeCategory === 'SmallPhone' ? 20 : 20,
      padding: 12,
    },

    // for Advertise.tsx

    container_for_advertise: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo_for_advertise: {
      width: 150,
      height: 100,
      marginTop: 10,
    },
    advertiseText_for_advertise: {
      fontSize: 24,
      marginVertical: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    messageText_for_advertise: {
      borderWidth: 1,
      borderColor: '#000',
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 8,
    },
    button_for_advertise: {
      fontSize: 18,
      color: '#000',
    },
    bottomNav_for_advertise: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 60,
      flexDirection: 'row',
      backgroundColor: '#1c368a',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    navItem_for_advertise: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    // for post products
    imagePickerButton: {
      width: '100%',
      backgroundColor: colors.primary,
      paddingVertical: 12,
      borderRadius: 8,
      marginBottom: 20,
      alignItems: 'center',
    },
    imagePickerButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    attachedImage: {
      width: 100,
      height: 100,
      marginBottom: 20,
      borderRadius: 8,
    },
    postButton: {
      backgroundColor: colors.primary,
      paddingVertical: 15,
      width: '100%',
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
};

export default DynamicStyles;
