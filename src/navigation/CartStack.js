import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cart } from '../screens';
import { navigationOptions } from './navigationOptions';

const Stack = createStackNavigator();

export const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};
