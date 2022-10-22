import Link from 'next/link';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import styles from './pokeCard.module.css';
import { useImageLoad } from 'hooks/useImageLoad';
import animation from 'styles/animation.module.css';

const { spinLoader, fadeIn } = animation;
const { card, number, pokeName, imgWrapper, image } = styles;

interface CardProps {
  name: string;
  num: number;
}

export const PokeCard = (props: CardProps) => {
  const { name, num } = props;
  const { img, loaded } = useImageLoad(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`
  );
  // Functions
  const addCeros = (n: number) => {
    let str = n > 100 ? '' : n > 10 ? '0' : '00';
    return str + n.toString();
  };

  return (
    <Link href={`/pokemon/${num}`}>
      <a className={card}>
        <span className={number}>
          <MdOutlineCatchingPokemon /> {addCeros(num)}
        </span>
        <span className={imgWrapper}>
          {loaded ? (
            <img className={`${image} ${fadeIn}`} src={img} alt={name} />
          ) : (
            <div className={spinLoader} />
          )}
        </span>
        <span className={pokeName}>{name} </span>
      </a>
    </Link>
  );
};
