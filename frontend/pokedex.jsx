import React from 'react';
import ReactDOM from 'react-dom';
import * as API from "./util/api_util.js";
import * as Actions from "./actions/pokemon_actions";
import configureStore from "./store/store.js";
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = window.store = configureStore;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  // API.fetchAllPokemon((pokemons) => store.dispatch(Actions.receiveAllPokemon(pokemons)));
});
