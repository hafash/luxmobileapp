import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../components/colors';

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const SellerRegisterStyle = StyleSheet.create({
  container_Signupform: {
    flex: 1,
    width: dimensions.width * 0.85,
    justifyContent: 'flex-start', // Keeps the content aligned from the top
    padding: dimensions.width * 0.05,
    marginTop: dimensions.height * 0.1, // Moves the form 40% down from the top
    marginBottom: dimensions.height * 0.1,
  },
  input_Signupform: {
    fontSize: 18,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1.2,
    marginBottom: 5,
    color: colors.white,
  },
  checkboxContainer_Signupform: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxLabel_Signupform: {
    marginLeft: 2,
    color: colors.white,
  },
  pickerContainer_Signupform: {
    position: 'relative',
    marginBottom: 15,
  },
  ArrowDownIcons: {
    color: colors.iconColor,
    fontSize: 14,
  },
});

export default SellerRegisterStyle;
