import React from "react";
import PokemonIndexItem from './pokemon_index_item';
class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }
  //
  // componentDidMount() {
  //   this.props.requestAllPokemon();
  // }

  render() {
    const pokemons = this.props.pokemons.map((pokemon, idx) => (
      <PokemonIndexItem key={pokemon.name + pokemon.id} pokemon={pokemon}/>
    ));
    return(
      <section className="pokedex">
        <ul>
          {pokemons}
        </ul>
        {this.props.children}
      </section>

    );
  }
}

export default PokemonIndex;
