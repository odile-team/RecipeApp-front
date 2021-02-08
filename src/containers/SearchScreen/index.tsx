import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultNavigatorOptions } from 'navigation/navigationOptions/mainNavigatorOptions';

import SearchScreen from './Screens/SearchScreen/SearchScreen';
import ResultList from './Screens/ResultList/ResultList';

import { NavigatorProps } from './types';

const Stack = createStackNavigator();

const SearchScreenNavigation: FunctionComponent<NavigatorProps> = () => (
  <Stack.Navigator screenOptions={defaultNavigatorOptions}>
    <Stack.Screen name="searchScreen" component={SearchScreen} />
    <Stack.Screen name="resultList" component={ResultList} />
  </Stack.Navigator>
);

export default SearchScreenNavigation;
