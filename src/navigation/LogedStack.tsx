import React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabComponent from 'components/TabNavigation/Tab';

import SearchScreen from 'containers/SearchScreen';
import GroceryScreen from 'containers/GroceryScreen';
import ProfileScreen from 'containers/ProfileScreen';
import RecipeScreen from 'containers/RecipeScreen';

import { RECIPE, SEARCH, GROCERY, PROFILE } from 'data/ScreenName';
import { styles } from './styleSheet';

import { mainNavigatorOptions } from './navigationOptions/mainNavigatorOptions';

const Tab = createBottomTabNavigator();

const LogedStack = (): JSX.Element => {
  const windowHeight = Dimensions.get('window').height;
  const style = styles(windowHeight);

  return (
    <>
      <Tab.Navigator
        screenOptions={mainNavigatorOptions}
        tabBarOptions={{ style: style.navigator }}
      >
        <Tab.Screen
          name={RECIPE}
          component={RecipeScreen}
          options={{
            tabBarButton: ({ accessibilityState, onPress }) => (
              <TabComponent
                label={RECIPE}
                accessibilityState={accessibilityState}
                onPress={onPress}
                testID="RecipeButton"
              />
            ),
          }}
        />
        <Tab.Screen
          name={SEARCH}
          component={SearchScreen}
          options={{
            tabBarButton: ({ accessibilityState, onPress }) => (
              <TabComponent
                label={SEARCH}
                accessibilityState={accessibilityState}
                onPress={onPress}
                testID="SearchButton"
              />
            ),
          }}
        />
        <Tab.Screen
          name={GROCERY}
          component={GroceryScreen}
          options={{
            tabBarButton: ({ accessibilityState, onPress }) => (
              <TabComponent
                label={GROCERY}
                accessibilityState={accessibilityState}
                onPress={onPress}
                testID="GroceryButton"
              />
            ),
          }}
        />
        <Tab.Screen
          name={PROFILE}
          component={ProfileScreen}
          options={{
            tabBarButton: ({ accessibilityState, onPress }) => (
              <TabComponent
                label={PROFILE}
                accessibilityState={accessibilityState}
                onPress={onPress}
                testID="ProfileButton"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default LogedStack;
