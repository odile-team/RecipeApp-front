import React, { useContext } from 'react';

import { TitleContainer, DescContainer, DescriptionContainer } from './styles';
import { DescriptionProps } from './types';
import { Context } from '../../ListRecipeScreen';

const Description = ({ index }: DescriptionProps): JSX.Element => {
  const ContextValues = useContext(Context);
  const { title, desc } = ContextValues[index];
  return (
    <DescriptionContainer>
      <TitleContainer numberOfLines={1}>{title}</TitleContainer>
      <DescContainer numberOfLines={1}>{desc}</DescContainer>
    </DescriptionContainer>
  );
};

export default Description;
