declare module '@react-native-community/checkbox' {
  import {Component} from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  interface CheckBoxProps {
    value?: boolean;
    onValueChange?: (value: boolean) => void;
    disabled?: boolean;
    tintColors?: {true?: string; false?: string};
    style?: StyleProp<ViewStyle>;
  }

  export default class CheckBox extends Component<CheckBoxProps> {}
}
