import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      viewingFront: true
    }
  }

  toggleImage = (event) => {
    this.setState({ viewingFront: !this.state.viewingFront })
  }

  render() {
    return (
      <Card>
        <div onClick={this.toggleImage}>
          <div className="image">
            <img src={this.state.viewingFront ?
              this.props.pokemon.sprites.front :
              this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
