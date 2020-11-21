import React from 'react';

import FadeInEntrance from 'components/FadeInEntrance/FadeInEntrance';

import Stars from '../Stars/Stars';
import LikeNumber from '../LikeNumber/LikeNumber';

import { CommunityInfoContainer } from './styles';

import { CommunityInfoProps } from './types';

const CommunityInfo = ({ stars, like, position }: CommunityInfoProps): JSX.Element => (
  <FadeInEntrance position={position}>
    <CommunityInfoContainer>
      <Stars stars={stars} />
      <LikeNumber like={like} />
    </CommunityInfoContainer>
  </FadeInEntrance>
);

export default CommunityInfo;
