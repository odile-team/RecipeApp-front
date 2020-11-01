import React from 'react';
// @ts-ignore
import { NavigationContainer } from '@react-navigation/native';

import LogedStack from './LogedStack';
import NotLogedStack from './NotLogedStack';

const isSignIn: boolean = false;

const MainStack = () => {
  return <NavigationContainer>{isSignIn ? <LogedStack /> : <NotLogedStack />}</NavigationContainer>;
};

export default MainStack;
