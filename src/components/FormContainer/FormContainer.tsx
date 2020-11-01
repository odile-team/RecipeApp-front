import React from 'react';
import { Dimensions, Platform } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import { styles } from './style';

const FormContainer = ({
  signUp,
  children,
}: {
  signUp: boolean;
  children?: JSX.Element;
}): JSX.Element => {
  const windowHeight = Dimensions.get('window').height;
  const isSignUp: Animated.SharedValue<number> = useSharedValue(signUp ? 0 : 1);
  const transition: Animated.SharedValue<number> = useDerivedValue(() =>
    withSpring(isSignUp.value)
  );

  const AnimatedStyle = useAnimatedStyle(() => {
    const marginTopValue = mix(
      transition.value,
      (windowHeight * 10) / 100,
      (windowHeight * 25) / 100
    );

    const heightValue =
      Platform.OS === 'android'
        ? windowHeight - marginTopValue + 30
        : windowHeight - marginTopValue;

    return {
      marginTop: marginTopValue,
      height: heightValue,
    };
  });

  return <Animated.View style={[styles.FormStyle, AnimatedStyle]}>{children}</Animated.View>;
};

export default FormContainer;
