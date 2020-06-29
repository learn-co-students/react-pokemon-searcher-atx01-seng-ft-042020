import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      filterString: '',
      pokemon: []
    }
  }

  filterPokemon = () => {
    return this.state.filterString ?
      this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.filterString)) :
      this.state.pokemon
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(json => this.setState({ pokemon: json }))
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  updateFilterString = (event) => {
    this.setState( { filterString: event.target.value } )
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm fetchPokemon={this.fetchPokemon}/>
        <br />
        <Search updateFilterString={this.updateFilterString} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
