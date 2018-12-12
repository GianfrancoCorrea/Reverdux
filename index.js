import React from 'react';
import { render } from 'react-dom';
import Game from './src/containers/game';
import { Provider } from 'react-redux';
import store from './src/reducers/store';




const container = document.getElementById('app')



console.log(store.getState())




render( 
  <Provider>	
	  <Game store={store} />	
	</Provider>, container)