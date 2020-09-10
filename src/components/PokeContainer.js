import React from "react";

import PokeCard from "./PokeCard";
import "../styles/index.css";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

class PokeContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    idList: undefined,
    pokeData: undefined,
    pokeCards: [],
  };

  createCards(pokeData) {
    pokeData.forEach((element) => {
      this.setState({
        pokeCards: [...this.state.pokeCards, <PokeCard data={element} />],
      });
    });
  }

  async getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchData() {
    this.setState({ loading: true, error: null });

    try {
      const data = await this.getData(URL).then();
      const pokeData = await this.fetchPokes(data.results).then((res) =>
        Promise.all(res)
      );
      this.setState({ loading: false, idList: data, pokeData });
      this.createCards(pokeData);
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  async fetchPokes(pokeList) {
    const tmp = pokeList.map(
      async (element) => await this.getData(element.url).catch(() => ({}))
    );
    return tmp;
  }

  componentDidMount() {
    console.log(2);
    this.fetchData();
  }

  componentDidUpdate() {}

  render() {
    return <div className="poke-container">{this.state.pokeCards}</div>;
  }
}

export default PokeContainer;
