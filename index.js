import React from 'react';
import { render } from 'react-dom';
import Game from './src/board/containers/game';
import data from './src/api.json';

import { Provider } from 'react-redux';

import { createStore } from 'redux';




const container = document.getElementById('app')

const initialState = {
  data: {
  	...data,
  },
 color: 'white'
  
}

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render( <Provider>	
	<Game store={store} />	
	</Provider>, container)