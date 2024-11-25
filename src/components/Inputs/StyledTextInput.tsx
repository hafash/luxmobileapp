import React, {FunctionComponent, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  StyleProp,
  Text,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import useResponsive from '../../hooks/useResponsive'; // Import the custom hook
import SmallText from '../Texts/SmallText';
import {colors} from '../colors';

// Function to ensure fontSize is always positive and above a minimum threshold
const getFontSize = (value: number, minSize: number = 10): number => {
  const fontSize = Math.max(value, minSize); // Ensure fontSize is at least minSize (default is 10)
  if (fontSize <= 0) {
    throw new Error('Font size calculation resulted in an invalid value.');
  }
  return fontSize;
};

const secondary = '#a6abac'; // Border color and text color
const gray = '#e3e1e1'; // Placeholder color

interface StyledInputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  icon?: string;
  label?: string;
  isPassword?: boolean;
  regex?: RegExp; // Added regex prop for validation
  errorMessage?: string; // Added errorMessage prop
  labelStyle?: StyleProp<ViewStyle>;
}

const StyledTextInput: FunctionComponent<StyledInputProps> = ({
  icon,
  label,
  style,
  labelStyle,
  onFocus,
  onBlur,
  isPassword = false,
  regex,
  errorMessage,
  ...props
}) => {
  const {sizes, isPortrait} = useResponsive(); // Use the responsive sizes and isPortrait
  const [inputBorderColor, setInputBorderColor] = useState<string>(secondary);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // State to manage error message

  // Apply getFontSize function to calculate sizes with a fallback
  const textSize = getFontSize(sizes?.textSize ?? 16); // Validate textSize with a fallback value of 16
  const iconSize = getFontSize(sizes?.iconSize ?? 24); // Validate iconSize with a fallback value of 24

  const customOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setInputBorderColor(gray);
    if (onFocus) {
      onFocus(e);
    }
  };

  const customOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setInputBorderColor(secondary);
    if (onBlur) {
      onBlur(e);
    }
    if (regex && props.value && !regex.test(props.value)) {
      setError(errorMessage || 'Invalid input');
    } else {
      setError(null);
    }
  };

  return (
    <View style={[{width: '100%'}, style]}>
      {label && (
        <SmallText
          style={[{color: gray, fontSize: textSize * 0.4}, labelStyle]} // Apply validated textSize for label
        >
          {label}
        </SmallText>
      )}
      <View style={{position: 'relative'}}>
        <RNTextInput
          {...props}
          placeholderTextColor={gray}
          style={{
            paddingLeft: icon ? iconSize * 0.9 : textSize * 0.2, // Validate iconSize and textSize
            borderBottomWidth: 1,
            borderBottomColor: inputBorderColor,
            fontSize: textSize, // Apply validated textSize
            marginBottom: isPortrait ? 10 : 8,
            color: colors.buttonText,
          }}
          secureTextEntry={isPassword && hidePassword}
          onFocus={customOnFocus}
          onBlur={customOnBlur}
          onChangeText={text => {
            if (regex && !regex.test(text)) {
              setError(errorMessage || 'Invalid input');
            } else {
              setError(null);
            }
            props.onChangeText?.(text); // Call the original onChangeText handler
          }}
        />
        {icon && (
          <View
            style={{
              position: 'absolute',
              top: 20,
              left: 0,
              zIndex: 1,
            }}>
            <FontAwesome5Icon name={icon} size={iconSize} color={gray} />{' '}
            {/* Apply validated iconSize */}
          </View>
        )}
        {isPassword && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 1,
              padding: 10,
            }}
            onPress={() => setHidePassword(!hidePassword)}>
            <FontAwesome5Icon
              name={hidePassword ? 'eye-slash' : 'eye'}
              size={iconSize} // Apply validated iconSize
              color={gray}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{color: 'red', marginTop: textSize * 0.3}}>
          {' '}
          {/* Apply validated textSize */}
          {error}
        </Text>
      )}
    </View>
  );
};

export default StyledTextInput;
