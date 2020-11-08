import React from 'react';

import { TitleContainer, DescContainer, DescriptionContainer } from './styles';
import { DescriptionProps } from './types';

const Description = ({ title, desc }: DescriptionProps): JSX.Element => {
  return (
    <DescriptionContainer>
      <TitleContainer numberOfLines={1}>{title}</TitleContainer>
      <DescContainer numberOfLines={1}>{desc}</DescContainer>
    </DescriptionContainer>
  );
};

export default Description;
