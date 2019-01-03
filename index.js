import React from 'react';
import { render } from 'react-dom';
import Game from './src/containers/game';
import { Provider } from 'react-redux';
import store from './src/reducers/store';

const container = document.getElementById('app');

render(
  <Provider store={store}>
    <Game />
  </Provider>, container,
);
