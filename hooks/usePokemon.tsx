import { useEffect, useState } from 'react';

import { usePokemonImages } from './usePokemonImages';
import { PokemonData } from 'interfaces/pokemonInterfaces';
// import { fetchUrl } from 'utils/functions';

export const usePokemon = (name: string | string[] | undefined) => {
  // Constants
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  // State
  const [data, setData] = useState<PokemonData | undefined>(undefined);
  const [error, setError] = useState<unknown | null>(null);
  const [attempts, setAttemtps] = useState(0);
  const { artwork, spritesImages } = usePokemonImages(data?.id, data?.sprites);
  // const [evolutionChain, setEvolutions] = useState();

  // Functions
  const fetchPokemon = async () => {
    try {
      const res = await fetch(url);
      await res.json().then((poke) => {
        setData(poke);
        setError(null);
      });
    } catch (e) {
      setError(e);
    }
  };

  // Effects
  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    let render = true;

    if (render) {
      if (attempts < 10 && !data && error) {
        setTimeout(() => {
          fetchPokemon();
          setAttemtps(attempts + 1);
        }, 3000);
      }
    }

    return () => {
      render = false;
    };
  }, [attempts, data, error]);

  return { data, artwork, spritesImages };
};
