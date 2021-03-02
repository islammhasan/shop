import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Favorite, ItemDetails } from '../screens';
import { navigationOptions } from './navigationOptions';

const Stack = createStackNavigator();

export const FavoriteStack = () => {
    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="ItemDetails" component={ItemDetails} />
        </Stack.Navigator>
    );
};
