import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

import styles from './pokeCard.module.css';
import { addCeros } from 'utils/functions';
import animation from 'styles/animation.module.css';

const { fadeIn } = animation;
const { card, number, pokeName, imgWrapper } = styles;

interface CardProps {
  name: string;
  num: number;
}

export const PokeCard = (props: CardProps) => {
  const { name, num } = props;

  return (
    <Link href={`/pokemon/${name}`}>
      <div className={`${card} ${fadeIn}`}>
        <span className={number}>
          <MdOutlineCatchingPokemon /> {addCeros(num)}
        </span>
        <div className={imgWrapper}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`}
            alt={name}
            width={475}
            height={475}
          />
        </div>
        <span className={pokeName}>{name} </span>
      </div>
    </Link>
  );
};
