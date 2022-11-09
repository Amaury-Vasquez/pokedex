import Image from 'next/image';

import { Info } from './info';
import { Evolutions } from './evolutions';
import { addCeros } from 'utils/functions';
import { usePokemon } from 'hooks/usePokemon';
import styles from 'styles/pokemon.module.css';
import animation from 'styles/animation.module.css';
import { FallbackScreen } from 'components/fallbackScreen';

const { fadeIn } = animation;
const { content, pokeName, pokemon, info, artworkWrapper } = styles;

const Pokemon = (props: { name: string }) => {
  const { name } = props;
  const { data, artwork, spritesImages } = usePokemon(name);

  if (data)
    return (
      <div className={`${content}`}>
        <div className={`${pokemon} ${fadeIn}`}>
          <article className={info}>
            <h1 className={pokeName}>
              {`N.º ${addCeros(data.id)} ${data.name}`}
            </h1>
            <div className={artworkWrapper}>
              {artwork && (
                <Image
                  src={artwork}
                  width={475}
                  height={475}
                  alt={data.name + 'artwork'}
                />
              )}
            </div>
            <Info data={data} sprites={spritesImages} />
            <Evolutions data={data} />
          </article>
        </div>
      </div>
    );
  return <FallbackScreen />;
};

export default Pokemon;
