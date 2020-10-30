import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultNavigatorOptions } from 'navigation/navigationOptions/mainNavigatorOptions';
import RecipeScreen from './RecipeScreen';

import { NavigatorProps } from './types';

const Stack = createStackNavigator();

const RecipeScreenNavigation: FunctionComponent<NavigatorProps> = () => (
  <Stack.Navigator screenOptions={defaultNavigatorOptions}>
    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
  </Stack.Navigator>
);

export default RecipeScreenNavigation;
