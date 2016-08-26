import React from "react";
import Toys from "../../util/toy_selector.js";
// import PokemonIndexItem from './pokemon_index_item';
const PokemonDetail = ({pokemon}) => {
    if (!pokemon) {
      return (<div>Fetching pokemon!</div>);
    }
        return(
      // <div>
      //   <h1>{this.props.pokemon.name}</h1>
      //   <a>Type:{this.props.pokemon.poke_type}</a>
      //   <a>Atk:{this.props.pokemon.attack}</a>
      //   <a>Def:{this.props.pokemon.defense}</a>
      //   <a>Moves:{this.props.pokemon.moves}</a>
      //   <h1>Toys</h1>
      //   // this.toy
      // </div>

      <section className="pokemon-detail">
        <ul>
          <img src={pokemon.image_url}/>
            <li><h2>{pokemon.name}</h2></li>
            <li>Type: {pokemon.poke_type}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Moves: {pokemon.moves.join(", ")}</li>
          <section className="toys">
              <h3>Toys</h3>
            <ul className="toy-list">
              {pokemon.toys.map(toy => toy.name).join(", ")}
            </ul>
          </section>
        </ul>
      </section>

    );
  };

export default PokemonDetail;
