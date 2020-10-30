import React from 'react';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import { percentOf } from 'utils/percentOf';

import { colors } from 'globalStyles/color';
import { icons, Index } from './config';

import { Container, styles, Label, Icon } from './style';

// TODO: Essayer d'enlever les any, mais il y'a l'air
// d'avoir un conflit avec la libraire react navigation

const Tab = ({
  label,
  accessibilityState,
  onPress,
}: {
  label: Index;
  accessibilityState: any;
  onPress: any;
}) => {
  const focused: boolean = accessibilityState.selected;
  const icon: string = icons[label];
  const windowWidth: number = Dimensions.get('window').width;

  const isFocused: Animated.SharedValue<number> = useSharedValue(focused ? 1 : 0);
  const transition: Animated.SharedValue<number> = useDerivedValue(() =>
    withSpring(isFocused.value)
  );

  const animatedStyle = useAnimatedStyle(() => {
    const width = mix(
      transition.value,
      (windowWidth * 21) / 100 - 12,
      (windowWidth * 38) / 100 - 12
    );
    return { width };
  });

  return (
    <Container
      onPress={() => {
        onPress();
      }}
    >
      <Animated.View style={[styles.background, animatedStyle]}>
        <Icon>
          <MaterialCommunityIcons
            name={icon}
            size={percentOf(windowWidth, 5)}
            color={colors.mainBlue}
          />
        </Icon>
        {focused ? (
          <Label fontSize={percentOf(windowWidth, 4).toString()} numberOfLines={1}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        ) : (
          <></>
        )}
      </Animated.View>
    </Container>
  );
};

export default Tab;
