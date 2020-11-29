import React from 'react';
import { View, Dimensions } from 'react-native';

import BackView from 'components/BackView/BackView';
import RecipeList from 'components/RecipeList';

import { colors } from 'globalStyles/color';
import { percentOf } from 'utils/percentOf';
import { ResultListProps } from './types';

const ResultList = ({ navigation, route }: ResultListProps): JSX.Element => {
  const { data } = route.params;
  const height = Dimensions.get('window').height;

  return (
    <BackView onPress={() => navigation.goBack()} color={colors.black}>
      <View
        style={{
          width: '100%',
          height: percentOf(height, 90),
          paddingTop: percentOf(height, 10),
          backgroundColor: 'white',
        }}
      >
        <RecipeList data={data} />
      </View>
    </BackView>
  );
};

export default ResultList;
