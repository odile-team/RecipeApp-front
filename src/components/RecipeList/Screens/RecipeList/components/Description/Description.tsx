import React, { useContext } from 'react';

import { TitleContainer, DescContainer, DescriptionContainer } from './styles';
import { DescriptionProps } from './types';

const Description = ({ index, Context }: DescriptionProps): JSX.Element => {
  const ContextValues = useContext(Context);
  //TODO: PropsType context
  const { title, desc } = ContextValues[index];
  return (
    <DescriptionContainer>
      <TitleContainer numberOfLines={1}>{title}</TitleContainer>
      <DescContainer numberOfLines={1}>{desc}</DescContainer>
    </DescriptionContainer>
  );
};

export default Description;
