import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { CenteredContainer } from 'globalStyles/index';
import { ProfileProps } from './types';

const ProfileScreen: FunctionComponent<ProfileProps> = () => (
  <CenteredContainer>
    <Text>Profile Screen</Text>
  </CenteredContainer>
);

export default ProfileScreen;
