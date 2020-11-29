// @ts-ignore
import styled from '@emotion/native';
import { colors } from 'globalStyles/color';

export const CategoryContainer = styled.TouchableOpacity`
  height: 150px;
  padding: 10px 0px;
  box-shadow: 0px 0px 5px ${colors.shadowGrey};
`;

export const CategoryTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
  padding-left: 20px;
  box-shadow: 1px 1px 3px white;
`;

export const CategoryTitleContainer = styled.View``;

export const CategoryPictureContainer = styled.View`
  height: 100%;
  width: 100%;
  border-radius: 30px;
  position: absolute;
`;

export const CategoryPicture = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;
