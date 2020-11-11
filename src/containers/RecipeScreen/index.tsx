import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultNavigatorOptions } from 'navigation/navigationOptions/mainNavigatorOptions';
import ListRecipeScreen from './Screens/ListRecipe/ListRecipeScreen';
import RecipeScreen from './Screens/Recipe/RecipeScreen';

import { NavigatorProps } from './Screens/ListRecipe/types';

const Stack = createStackNavigator();

const RecipeScreenNavigation: FunctionComponent<NavigatorProps> = () => (
  <Stack.Navigator screenOptions={defaultNavigatorOptions}>
    <Stack.Screen name="ListRecipeScreen" component={ListRecipeScreen} />
    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
  </Stack.Navigator>
);

export default RecipeScreenNavigation;
