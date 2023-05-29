import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import {Page1} from '../screens/Page1';
import {Page2} from '../screens/Page2';
import {Page3} from '../screens/Page3';
import {Settings} from '../screens/Settings';

export type RootStackParams = {
  page1: undefined;
  page2: undefined;
  page3: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootStackParams>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="page1" component={Page1} />
      <Drawer.Screen name="page2" component={Page2} />
      <Drawer.Screen name="page3" component={Page3} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
