import { Carousel } from './carousel';
import { Adyacents } from './adyacents';
import styles from 'styles/pokemon.module.css';
// import animation from 'styles/animation.module.css';
import { usePokemonTypes } from 'hooks/usePokemonTypes';
import { PokemonData } from 'interfaces/pokemonInterfaces';
// const { fadeIn } = animation;

const { textInfo, pokeTypes, typeSpan, typeWrapper, abilities } = styles;

export const Info = (props: { data: PokemonData; sprites: string[] }) => {
  const { data, sprites } = props;
  const { types } = usePokemonTypes();

  return (
    <div className={textInfo}>
      <div className={typeWrapper}>
        <span>{data.types.length > 1 ? 'Types' : 'Type'}:</span>
        <div className={pokeTypes}>
          {data.types.map((obj, i) => {
            const item = obj.type.name;
            const icon = types[item as keyof typeof types];
            return (
              <span className={typeSpan} key={obj.slot + obj.type.name + i}>
                {obj.type.name}
                {icon}
              </span>
            );
          })}
        </div>
      </div>
      <div className={abilities}>
        {data.abilities.map((abil, i) => (
          <span key={abil.ability.name + abil.is_hidden + i}>
            {(abil.is_hidden ? 'Hidden abilitie' : 'Abilitie') +
              ': ' +
              abil.ability.name}
          </span>
        ))}
      </div>
      <Carousel sprites={sprites} />
      <Adyacents data={data} />
    </div>
  );
};
