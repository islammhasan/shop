import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile} from '../screens/Profile';
import {Cart} from '../screens/Cart';
import {Favorite} from '../screens/Favorite';
import {MyOrders} from '../screens/MyOrders';
import {MainStack} from './MainStack';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="MainStack">
      <Drawer.Screen
        options={{title: 'Home'}}
        name="MainStack"
        component={MainStack}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        options={{title: 'My Cart'}}
        name="Cart"
        component={Cart}
      />
      <Drawer.Screen name="Favorite" component={Favorite} />
      <Drawer.Screen
        options={{title: 'My Orders'}}
        name="MyOrders"
        component={MyOrders}
      />
    </Drawer.Navigator>
  );
};
