import React from 'react';
import MainStack from 'navigation/MainStack';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
