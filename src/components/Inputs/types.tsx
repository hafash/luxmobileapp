import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ReactNode, ComponentProps} from 'react';
import {TextInputProps} from 'react-native';

export interface ExtraInputProps {
    
  label: ReactNode;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  isPassword?: boolean;
}

export type InputProps = TextInputProps & ExtraInputProps;
