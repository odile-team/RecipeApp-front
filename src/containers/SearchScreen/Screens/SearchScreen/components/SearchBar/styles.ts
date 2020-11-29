// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';

export const SearchBarContainer = styled.View`
  margin: 30px 10px;
  padding: 10px 20px;
  flex-direction: row;
  border: 0.5px solid ${colors.grey};
  border-radius: 30px;
`;

export const SearchInput = styled.TextInput`
  padding: 0px 10px;
`;
