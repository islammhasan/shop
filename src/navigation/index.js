import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './Drawer';


export const AppContainer = (isAuthenticated) => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};
