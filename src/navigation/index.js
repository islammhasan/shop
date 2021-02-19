import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './MainStack';

export const AppContainer = (isAuthenticated) => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
