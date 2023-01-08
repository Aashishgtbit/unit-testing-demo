/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/Navigation';
import {setupStore} from './src/Store';

const App = () => {
  return (
    <Provider store={setupStore()}>
      <NativeBaseProvider>
        <MainNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
