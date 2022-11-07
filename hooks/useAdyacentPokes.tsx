import { useEffect, useState } from 'react';

import { baseUrl, fetchUrl } from 'utils/functions';
import { PokemonData } from 'interfaces/pokemonInterfaces';

export const useAdyacentPokes = (data: PokemonData) => {
  // State
  const [previous, setPrevious] = useState<string>();
  const [next, setNext] = useState<string>();

  // Constants
  const { id } = data;

  // Effects
  useEffect(() => {
    if (!previous && id - 1 > 0) {
      try {
        (async () => {
          await fetchUrl(`${baseUrl}/pokemon/${data.id - 1}`).then(
            (data: PokemonData) => setPrevious(data.name)
          );
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [previous]);

  useEffect(() => {
    if (!next && id + 1 < 152) {
      try {
        (async () => {
          await fetchUrl(`${baseUrl}/pokemon/${data.id + 1}`).then(
            (data: PokemonData) => setNext(data.name)
          );
        })();
      } catch (e) {
        console.log(e);
      }
    }
  }, [next]);

  return { next, previous };
};
