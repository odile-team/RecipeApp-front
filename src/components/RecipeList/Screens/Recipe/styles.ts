// @ts-ignore
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  AnimatedContainer: {
    position: 'absolute',
    borderRadius: 30,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
});

export const PictureContainer = styled.Image`
  height: 45%;
  width: 100%;
  z-index: 0;
  border-radius: 10px;
`;

export const ScrollContainer = styled.View`
  position: absolute;
  border-radius: 30px;
  background: white;
  height: 100%;
  z-index: 10;
`;

export const DescriptionContainer = styled.View`
  padding: 29px;
`;

export const SubContainer = styled.View`
  padding-top: 7%;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  padding-bottom: 2%;
  color: grey;
`;
