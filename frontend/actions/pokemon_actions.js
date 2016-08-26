export const PC = {
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON",
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  REQUEST_POKEMON: "REQUEST_POKEMON",
  RECEIVE_POKEMON: "RECEIVE_POKEMON"
};

export const receiveAllPokemon = (pokemons) => (
  {
    type: PC.RECEIVE_ALL_POKEMON,
    pokemons
  }
);
export const requestAllPokemon = () => (
  {
    type: PC.REQUEST_ALL_POKEMON,
  }
);

export const requestPokemon = (pokemonId) => (
  {
    type: PC.REQUEST_POKEMON,
    pokemonId
  }
);

export const receivePokemon = (pokemon) => (
  {
    type: PC.RECEIVE_POKEMON,
    pokemon
  }
);
