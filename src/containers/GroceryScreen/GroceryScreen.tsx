import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

import { CenteredContainer } from 'globalStyles/index';

import { GroceryProps } from './types';

const GroceryScreen: FunctionComponent<GroceryProps> = () => (
  <CenteredContainer>
    <Text>Grocery Screen</Text>
  </CenteredContainer>
);

export default GroceryScreen;
