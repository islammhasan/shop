import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyOrders } from '../screens';
import { navigationOptions } from './navigationOptions';

const Stack = createStackNavigator();

export const MyOrdersStack = () => {
    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen name="MyOrders" component={MyOrders} />
        </Stack.Navigator>
    );
};
