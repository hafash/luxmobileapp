declare module 'react-native-multiple-select' {
  import React from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  export interface MultipleSelectProps {
    items: Array<{id: string; name: string}>;
    uniqueKey: string;
    onSelectedItemsChange: (selectedItems: string[]) => void;
    selectedItems: string[];
    searchInputPlaceholderText?: string;
    tagRemoveIconColor?: string;
    tagBorderColor?: string;
    tagTextColor?: string;
    selectedItemTextColor?: string;
    selectedItemIconColor?: string;
    itemTextColor?: string;
    displayKey?: string;
    searchInputStyle?: StyleProp<ViewStyle>;
    submitButtonColor?: string;
    submitButtonText?: string;
    style?: StyleProp<ViewStyle>;
  }

  const MultipleSelect: React.FC<MultipleSelectProps>;
  export default MultipleSelect;
}
