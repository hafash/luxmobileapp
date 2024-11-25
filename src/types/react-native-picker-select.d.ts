declare module 'react-native-picker-select' {
  import {Component} from 'react';
  import {TextStyle, ViewStyle} from 'react-native';

  interface PickerSelectProps {
    onValueChange: (value: any, index: number) => void;
    items: Array<{label: string; value: any; color?: string}>;
    value?: any;
    placeholder?: {label: string; value: any; color?: string} | {};
    style?: {
      inputIOS?: TextStyle;
      inputAndroid?: TextStyle;
      iconContainer?: ViewStyle;
      placeholder?: TextStyle;
    };
    useNativeAndroidPickerStyle?: boolean;
    Icon?: Component;
    disabled?: boolean;
  }

  export default class RNPickerSelect extends Component<PickerSelectProps> {}
}
