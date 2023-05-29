import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="page1" component={Page1} />
      <Stack.Screen name="page2" component={Page2} />
      <Stack.Screen name="page3" component={Page3} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
