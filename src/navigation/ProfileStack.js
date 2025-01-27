import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../screens';
import { navigationOptions } from './navigationOptions';

const Stack = createStackNavigator();

export const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};
