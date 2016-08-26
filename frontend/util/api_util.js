import $ from "jquery";

export const fetchAllPokemon = (success) => {
  $.ajax({
    method: "GET",
    url: "/api/pokemon",
    dataType: "json",
    success
  });
};

export const fetchPokemon = (pokemonId, success) => {
  $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}`,
    dataType: "json",
    success
  });
};
