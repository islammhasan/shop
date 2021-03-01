import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ItemDetails,Checkout} from '../screens';
import {colors} from '../assets';
import {navigationOptions} from './navigationOptions';
import {Cart} from '../screens/Cart';
const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};
