import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStack} from './MainStack';
import {ProfileStack} from './ProfileStack';
import {CartStack} from './CartStack';
import {FavoriteStack} from './FavoriteStack';
import {MyOrdersStack} from './MyOrdersStack';
import {Config} from '../screens/Config';
import {Search} from '../screens/Search';
import {Address, CreateAddress} from '../screens';

const Tab = createBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 14},
        tabStyle: {justifyContent: 'center', alignItems: 'center'},
      }}
      initialRouteName="MainStack">
      <Tab.Screen
        options={{title: 'Home'}}
        name="MainStack"
        component={MainStack}
      />
      <Tab.Screen name="Profile" component={ProfileStack} />
      {/* <Tab.Screen
        options={{title: 'My Cart'}}
        name="CartStack"
        component={CartStack}
      /> */}
      <Tab.Screen name="Favorite" component={FavoriteStack} />
      <Tab.Screen
        options={{title: 'My Orders'}}
        name="MyOrders"
        component={MyOrdersStack}
      />
      <Tab.Screen name={'Settings'} component={Config} />
    </Tab.Navigator>
  );
};
