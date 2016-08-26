import * as ACTIONS from "../actions/pokemon_actions";
import merge from "lodash/merge";

export default (state = {pokemons: [], pokemon: {}}, action) => {
  switch (action.type) {
    case ACTIONS.PC.RECEIVE_ALL_POKEMON:
      return {pokemons: action.pokemons};
    case ACTIONS.PC.RECEIVE_POKEMON:
      return merge({}, state, {pokemon: action.pokemon});
    default:
      return state;
  }
};
