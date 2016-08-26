import React from 'react';
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, onEnter } from 'react-router';
import * as Actions from "../actions/pokemon_actions";

const Root = ({store}) => {

  const requestPokemon = (nextState) => {
    let pokemonId = nextState.params.id;
    store.dispatch(Actions.requestPokemon(pokemonId));
  };

  const requestAllPokemon = () => {
    store.dispatch(Actions.requestAllPokemon());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestAllPokemon}>
          <Route path="pokemon/:id" component={PokemonDetailContainer} onEnter={requestPokemon}>
            <Route path="pokemon/:pokeId/toy/:id" component={PokemonDetailContainer} onEnter={requestPokemon}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
