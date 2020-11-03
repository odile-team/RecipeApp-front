import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultNavigatorOptions } from 'navigation/navigationOptions/mainNavigatorOptions';
import ListRecipeScreen from './Screens/ListRecipe/ListRecipeScreen';

import { NavigatorProps } from './Screens/ListRecipe/types';

const Stack = createStackNavigator();

const RecipeScreenNavigation: FunctionComponent<NavigatorProps> = () => (
  <Stack.Navigator screenOptions={defaultNavigatorOptions}>
    <Stack.Screen name="ListRecipeScreen" component={ListRecipeScreen} />
  </Stack.Navigator>
);

export default RecipeScreenNavigation;
