// src/App.tsx
import React from 'react';
import {enableScreens} from 'react-native-screens';

enableScreens(); // This optimizes your navigation performance by enabling screens to be handled natively.

import AppNavigator from './src/navigation/AppNavigator';

import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />;{/* Your app components */}
    </SafeAreaProvider>
  );
};

export default App;
