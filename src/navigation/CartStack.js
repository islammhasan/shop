import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Address,
  Cart,
  Checkout,
  Confirmation,
  CreateAddress,
  Home,
  ItemDetails,
} from '../screens';
import {cartNavOptions} from './navigationOptions';

const Stack = createStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName={Cart} screenOptions={cartNavOptions}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="CreateAddress" component={CreateAddress} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
};
