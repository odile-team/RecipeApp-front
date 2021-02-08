import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';

import BackView from 'components/BackView/BackView';
import RecipeList from 'components/RecipeList';

import { colors } from 'globalStyles/color';
import { percentOf } from 'utils/percentOf';
import { ResultListProps } from './types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';
import { getStyles } from './styles';

const ResultList = ({ navigation, route }: ResultListProps): JSX.Element => {
  const { data } = route.params;
  const [isOnList, setIsOnList] = useState(true);
  const isHeaderHided: Animated.SharedValue<number> = useSharedValue(isOnList ? 0 : 1);
  const transitionHeader: Animated.SharedValue<number> = useDerivedValue(() =>
    withSpring(isHeaderHided.value)
  );

  const height = Dimensions.get('window').height;
  const styles = getStyles(height);

  const topHideValue = -percentOf(height, 10);

  const topAnimatedStyle = useAnimatedStyle(() => {
    const top = mix(transitionHeader.value, 0, topHideValue);
    return { top, height: height - topHideValue };
  });

  const getRoute = (routeName: string) => {
    setIsOnList(routeName === 'RecipeList');
  };

  return (
    <Animated.View style={[topAnimatedStyle]}>
      <BackView onPress={() => navigation.goBack()} color={colors.black}>
        <View style={styles.resultContainer}>
          <RecipeList data={data} getRoute={getRoute} />
        </View>
      </BackView>
    </Animated.View>
  );
};

export default ResultList;
