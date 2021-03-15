import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ItemDetails, Checkout, Cart } from '../screens';
import { colors } from '../assets';
import { navigationOptions } from './navigationOptions';
import { Search } from '../screens/Search';
import { UserSignup } from '../screens/UserSignup';
import { UserConfirm } from '../screens/UserConfirm';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="User Signup" component={UserSignup} />
      <Stack.Screen name="User Confirm" component={UserConfirm} />
    </Stack.Navigator>
  );
};
