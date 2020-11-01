import React from 'react';
import LottieView from 'lottie-react-native';

const Loader = (): JSX.Element => {
  return <LottieView source={require('assets/loader.json')} autoPlay loop />;
};

export default Loader;
