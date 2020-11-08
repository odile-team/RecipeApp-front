import React from 'react';
import { Animated } from 'react-native';
import LottieView from 'lottie-react-native';

import { DURATION, END_VALUE, START_VALUE } from './config';
import { ButtonContainer, styles, LikedText, LikeContainer } from './styles';
import { LikeProps } from './types';

const LikeButton = ({ isLiked, onPress }: LikeProps): JSX.Element => {
  const progressValue = new Animated.Value(isLiked ? END_VALUE : START_VALUE);

  const press = () => {
    Animated.timing(progressValue, {
      toValue: isLiked ? START_VALUE : END_VALUE,
      duration: DURATION,
      useNativeDriver: true,
    }).start(() => {
      onPress();
    });
  };

  return (
    <LikeContainer>
      <ButtonContainer onPress={press}>
        <LottieView
          style={styles.Lottie}
          source={require('assets/like.json')}
          progress={progressValue}
        />
      </ButtonContainer>
      {isLiked && <LikedText>Saved !</LikedText>}
    </LikeContainer>
  );
};

export default LikeButton;
