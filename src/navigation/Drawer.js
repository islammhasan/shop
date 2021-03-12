import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Favorite} from '../screens/Favorite';
import {MyOrders} from '../screens/MyOrders';
import {MainStack} from './MainStack';
import {ProfileStack} from './ProfileStack';
import {CartStack} from './CartStack';
import {FavoriteStack} from './FavoriteStack';
import {MyOrdersStack} from './MyOrdersStack';
import {Config} from '../screens/Config';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator
      edgeWidth={50}
      drawerStyle={{paddingTop: 50}}
      initialRouteName="MainStack">
      <Drawer.Screen
        options={{title: 'Home'}}
        name="MainStack"
        component={MainStack}
      />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen
        options={{title: 'My Cart'}}
        name="CartStack"
        component={CartStack}
      />
      <Drawer.Screen name="Favorite" component={FavoriteStack} />
      <Drawer.Screen
        options={{title: 'My Orders'}}
        name="MyOrders"
        component={MyOrdersStack}
      />
      <Drawer.Screen name={'Settings'} component={Config} />
    </Drawer.Navigator>
  );
};
