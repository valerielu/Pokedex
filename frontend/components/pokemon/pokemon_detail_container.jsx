import PokemonDetail from './pokemon_detail';
import { connect } from 'react-redux';
import * as Actions from './../../actions/pokemon_actions';

const mapStateToProps = state => {

  return (
    {
      pokemon: state.pokemon
    });
  // toys: state.toys
};

// const mapDispatchToProps = dispatch => ({
//   requestPokemon: (pokemonId) => (Actions.requestPokemon(pokemonId))
// });

export default connect (
  mapStateToProps
)(PokemonDetail);
