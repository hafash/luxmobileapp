import {StyleSheet} from 'react-native';
import {colors} from '../components/colors';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
  },
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    marginTop: 1,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f6',
    borderRadius: 10,
    padding: 6,
    marginBottom: 5,
    width: '100%',
  },
  icon: {
    marginHorizontal: 10,
    color: colors.primary,
  },
  textInput: {
    flex: 1,
    color: '#333',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: colors.primary,
    alignSelf: 'flex-end',
    marginBottom: 6,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: '100%',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#666',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  signUpLink: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
