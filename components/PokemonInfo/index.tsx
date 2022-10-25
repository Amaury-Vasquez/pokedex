import Image from 'next/image';

import styles from './pokemon.module.css';
import { addCeros } from 'utils/functions';
import { usePokemon } from 'hooks/usePokemon';
import animation from 'styles/animation.module.css';
import { usePokemonTypes } from 'hooks/usePokemonTypes';

const { fadeIn } = animation;
const {
  content,
  pokeName,
  pokemon,
  info,
  artworkWrapper,
  textInfo,
  pokeTypes,
  typeSpan,
  typeWrapper,
} = styles;

export const PokemonInfo = (props: { name: string }) => {
  const { name } = props;
  const { data, artwork } = usePokemon(name);
  const { types } = usePokemonTypes();

  if (data)
    return (
      <div className={`${content}`}>
        <div className={`${pokemon} ${fadeIn}`}>
          <div className={info}>
            <h1 className={pokeName}>
              {`N.º ${addCeros(data.id)} ${data.name}`}
            </h1>
            <div className={artworkWrapper}>
              {artwork && <Image src={artwork} width={475} height={475} />}
            </div>
            <div className={textInfo}>
              <p> Base experience: {data.base_experience} </p>
              <div className={typeWrapper}>
                <span>{data.types.length > 1 ? 'Types' : 'Type'}:</span>
                <div className={pokeTypes}>
                  {data.types.map((obj, i) => {
                    const item = obj.type.name;
                    const icon = types[item as keyof typeof types];
                    return (
                      <span
                        className={typeSpan}
                        key={obj.slot + obj.type.name + i}
                      >
                        {obj.type.name}
                        {icon}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className={content}>
        <h1>Loading</h1>
      </div>
    );
  }
};
