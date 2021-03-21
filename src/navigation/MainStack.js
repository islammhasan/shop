import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ItemDetails, Checkout, Cart} from '../screens';
import {navigationOptions} from './navigationOptions';
import {Search} from '../screens/Search';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
