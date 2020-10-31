import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { mainNavigatorOptions } from './navigationOptions/mainNavigatorOptions';

import LoginScreen from 'containers/LoginScreen';

const Stack = createStackNavigator();

const NotLogedStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={mainNavigatorOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};

export default NotLogedStack;
