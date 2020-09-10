import React from "react";

import "../styles/index.css";

class PokeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  render() {
    return (
      <div className="poke-card">
        <img
          src="https://pokeres.bastionbot.org/images/pokemon/{pokeData.id}.png"
          alt={this.state.data.name}
        />
      </div>
    );
  }
}

export default PokeCard;
