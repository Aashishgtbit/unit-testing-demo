import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

// add other navigation functions that you need and export them

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
