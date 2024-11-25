declare module 'react-native-multi-select' {
  import React from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  interface MultiSelectProps {
    items: Array<{id: string | number; name: string}>;
    uniqueKey: string;
    onSelectedItemsChange: (selectedItems: string[] | number[]) => void;
    selectedItems: string[] | number[];
    style?: StyleProp<ViewStyle>;
    // Add more props as needed
  }

  const MultiSelect: React.FC<MultiSelectProps>;
  export default MultiSelect;
}
