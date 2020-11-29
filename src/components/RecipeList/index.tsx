import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultNavigatorOptions } from 'navigation/navigationOptions/mainNavigatorOptions';
import RecipeList from './Screens/RecipeList/RecipeList';
import RecipeScreen from './Screens/Recipe/RecipeScreen';

import { NavigatorProps } from './types';

// const Stack = createSharedElementStackNavigator();
const Stack = createStackNavigator();

const RecipeScreenNavigation: FunctionComponent<NavigatorProps> = ({ data, getRoute }) => (
  <Stack.Navigator screenOptions={defaultNavigatorOptions}>
    <Stack.Screen name="RecipeList">
      {(props) => <RecipeList {...props} data={data} sendRoute={getRoute} />}
    </Stack.Screen>
    <Stack.Screen name="RecipeScreen">
      {(props) => <RecipeScreen {...props} sendRoute={getRoute} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default RecipeScreenNavigation;
