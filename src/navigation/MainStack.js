import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, ItemDetails } from '../screens';

const Stack = createStackNavigator()

export const MainStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ItemDetails' component={ItemDetails} />
        </Stack.Navigator>
    )
}