import React from 'react';
import { TouchableWithoutFeedback, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';
import { styles } from './style';
import { colors } from 'globalStyles/color';
import { CategoriesTitleProps } from './types';

const CategoriesTitle = ({ title, whoFocused, onPress }: CategoriesTitleProps): JSX.Element => {
  const focused: boolean = whoFocused === title;
  const windowWidth: number = Dimensions.get('window').width;

  const isFocused: Animated.SharedValue<number> = useSharedValue(focused ? 1 : 0);
  const transition: Animated.SharedValue<number> = useDerivedValue(() =>
    withSpring(isFocused.value)
  );

  const animatedContainerStyle = useAnimatedStyle(() => {
    const width = mix(transition.value, (windowWidth * 24) / 100, (windowWidth * 28) / 100);
    const paddingTop = mix(transition.value, 4, 0);
    return { width, paddingTop };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const fontSize = mix(transition.value, 15, 20);
    return { fontSize };
  });

  const animatedBorderStyle = useAnimatedStyle(() => {
    const width = mix(transition.value, 0, 35);
    const borderWidth = mix(transition.value, 0, 2);
    return { width, borderWidth };
  });

  return (
    <TouchableWithoutFeedback onPress={() => onPress(title)}>
      <Animated.View style={[styles.ContainerStyle, animatedContainerStyle]}>
        <>
          <Animated.Text
            style={[
              styles.CategoriesTitleText,
              animatedTextStyle,
              { color: focused ? '#000' : colors.grey },
            ]}
          >
            {title}
          </Animated.Text>
          <Animated.View style={[styles.borderStyle, animatedBorderStyle]} />
        </>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesTitle;
