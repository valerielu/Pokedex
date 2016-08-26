import PokemonIndex from './pokemon_index.jsx';
import { connect } from 'react-redux';
import * as Actions from './../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

// const mapDispatchToProps = dispatch => ({
//   requestAllPokemon: () => (Actions.requestAllPokemon())
// });

export default connect (
  mapStateToProps,
  null
)(PokemonIndex);
