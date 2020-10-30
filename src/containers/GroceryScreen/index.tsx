import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultNavigatorOptions } from 'navigation/navigationOptions/mainNavigatorOptions';
import GroceryScreen from './GroceryScreen';

import { NavigatorProps } from './types';

const Stack = createStackNavigator();

const GroceryScreenNavigation: FunctionComponent<NavigatorProps> = () => (
  <Stack.Navigator screenOptions={defaultNavigatorOptions}>
    <Stack.Screen name="GroceryScreen" component={GroceryScreen} />
  </Stack.Navigator>
);

export default GroceryScreenNavigation;
