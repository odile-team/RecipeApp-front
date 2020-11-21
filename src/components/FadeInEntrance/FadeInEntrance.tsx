import React from 'react';
import * as Animatable from 'react-native-animatable';

const FadeInEntrance = ({ position, children }) => (
  <Animatable.View animation="fadeIn" easing="ease-in" delay={300 * position} duration={500}>
    {children}
  </Animatable.View>
);

export default FadeInEntrance;
