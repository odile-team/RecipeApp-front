import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultNavigatorOptions } from 'navigation/navigationOptions/mainNavigatorOptions';
import SearchScreen from './SearchScreen';

import { NavigatorProps } from './types';

const Stack = createStackNavigator();

const SearchScreenNavigation: FunctionComponent<NavigatorProps> = () => (
  <Stack.Navigator screenOptions={defaultNavigatorOptions}>
    <Stack.Screen name="searchScreen" component={SearchScreen} />
  </Stack.Navigator>
);

export default SearchScreenNavigation;
