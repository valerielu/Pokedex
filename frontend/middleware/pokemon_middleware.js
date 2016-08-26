import store from "../store/store";
import * as Actions from "../actions/pokemon_actions";
import * as API from "../util/api_util.js";

const PokemonMiddleware = ({dispatch}) => (next) => (action) => {
  let success;
  switch (action.type) {
    case Actions.PC.REQUEST_ALL_POKEMON:
      success = (pokemons) => dispatch(Actions.receiveAllPokemon(pokemons));
      API.fetchAllPokemon(success);
      next(action);
      break;

    case Actions.PC.REQUEST_POKEMON:
      success = (pokemon) => dispatch(Actions.receivePokemon(pokemon));
      API.fetchPokemon(action.pokemonId, success);
      next(action);
      break;

    default:
      next(action);
  }
};

export default PokemonMiddleware;
