import { PokemonSprites } from 'interfaces/pokemonInterfaces';
import { useEffect, useState } from 'react';

export const usePokemonImages = (
  id: number | undefined,
  sprites: PokemonSprites | undefined
) => {
  const [artwork, setArtwork] = useState<string | null>(null);
  const [spritesImages, setSprites] = useState<string[]>([]);

  useEffect(() => {
    if (id)
      setArtwork(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      );
  }, [id]);

  useEffect(() => {
    if (sprites) {
      const tmp: string[] = [];

      const keys = Object.keys(sprites);
      const spritesArray = keys.map(
        (key) => sprites[key as keyof typeof sprites]
      );
      spritesArray.forEach((sprite) => {
        typeof sprite === 'string' && tmp.push(sprite);
      });

      setSprites(tmp);
    }
  }, [sprites]);
  return { artwork, spritesImages };
};
