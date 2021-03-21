import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserSignup} from '../screens/UserSignup';
import {UserConfirm} from '../screens/UserConfirm';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UserSignup" component={UserSignup} />
      <Stack.Screen name="UserConfirm" component={UserConfirm} />
    </Stack.Navigator>
  );
};
