import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppDrawer} from './Drawer';
import {AuthStack} from './AuthStack';
import {useSelector} from 'react-redux';
import {TabNav} from './TabNav';

export const AppContainer = () => {
  const isAuthenticated = useSelector((state) => state.user.token);
  console.log(isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNav /> : <AuthStack />}
    </NavigationContainer>
  );
};
