import React from 'react';
import { withRouter } from 'react-router';

const _handleClick = (pokemon, router) => {
  router.push(`/pokemon/${pokemon.id}`);
};

const PokemonIndexItem = ({pokemon, router}) => {
  return (
    <li className="pokemon-index-item" onClick={_handleClick.bind(null, pokemon, router)}>
      <span>{pokemon.id}</span>
        <img src={pokemon.image_url} alt="Image loading"/>
      <span>{pokemon.name}</span>
    </li>
  );


};

export default withRouter(PokemonIndexItem);
