import { useEffect, useState } from 'react';

import { fetchUrl, artworkUrl, baseUrl } from 'utils/functions';
import { PokemonData, Data } from 'interfaces/pokemonInterfaces';

export interface Poke {
  name: string;
  imgUrl: string;
}

export const useEvolutions = (data: PokemonData) => {
  const [basePoke, setBasePoke] = useState<Poke>();
  const [evolutionChain, setEvolutionChain] = useState<Poke[][]>();
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    if (!basePoke && !evolutionChain) {
      (async () => {
        try {
          // Util functions
          const getArtworkId = async (name: string) => {
            const poke: PokemonData = await fetchUrl(
              `${baseUrl}/pokemon/${name}`
            );
            return artworkUrl(poke.id);
          };

          const getPoke = async (name: string) => {
            return { name, imgUrl: await getArtworkId(name) };
          };
          //

          const speciesData = await fetchUrl(data.species.url);
          const result = await fetchUrl(speciesData.evolution_chain.url);

          (async () => {
            const { chain } = result;

            if (chain.evolves_to.length > 0) {
              const chainArray: Poke[][] = [];

              const { species } = chain;
              const { name } = species;
              const base = await getPoke(name);

              chain.evolves_to.forEach(
                async (
                  evol: {
                    evolves_to: {
                      evolves_to: { evolves_to: []; species: Data }[];
                      species: Data;
                    }[];
                    species: Data;
                  },
                  i: number
                ) => {
                  const { species } = evol;
                  const { name } = species;
                  chainArray[i] = [];
                  const poke = await getPoke(name);
                  chainArray[i].push(poke);

                  if (evol.evolves_to.length > 0) {
                    const poke = await getPoke(evol.evolves_to[0].species.name);
                    chainArray[i].push(poke);
                  }
                  setBasePoke(base);
                  setEvolutionChain(() => chainArray);
                  setLoad(false);
                }
              );
            } else {
              setBasePoke(() => ({
                imgUrl: artworkUrl(data.id),
                name: data.name,
              }));
              setLoad(false);
              setEvolutionChain([]);
            }
          })();
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [basePoke, evolutionChain]);

  return { basePoke, evolutionChain, loading };
};
