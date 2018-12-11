import React from 'react';
import { render } from 'react-dom';
import Game from './src/containers/game';
import data from './src/api.json';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reversiApp from './src/reducers/game'




const container = document.getElementById('app')

const initialState = {
  board: [],
  turn: 1,
  score: []
}

let store = createStore(
  reversiApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState())




render( 
  <Provider>	
	  <Game store={store} />	
	</Provider>, container)