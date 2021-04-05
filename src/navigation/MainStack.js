import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ItemDetails, Checkout} from '../screens';
import {navigationOptions} from './navigationOptions';
import {Search} from '../screens/Search';
import {CartStack} from './CartStack';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="CartStack" component={CartStack} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
