import pokemonReducer from "../reducers/pokemon_reducer.js";
import {createStore, applyMiddleware} from "redux";
import PokemonMiddleware from "../middleware/pokemon_middleware";

const configureStore = createStore((pokemonReducer), applyMiddleware(PokemonMiddleware));

export default configureStore;
