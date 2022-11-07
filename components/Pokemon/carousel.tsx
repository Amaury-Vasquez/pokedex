import Image from 'next/image';
import { useEffect } from 'react';

import styles from 'styles/carousel.module.css';

const { carousel, spriteWrapper, label } = styles;

export const Carousel = (props: { sprites: string[] }) => {
  const { sprites } = props;

  return (
    <div className={carousel}>
      <label className={label}> Sprites </label>
      {sprites &&
        sprites.length > 0 &&
        sprites.map((sprite, i) => (
          <div className={spriteWrapper} key={sprite + i}>
            <Image
              src={sprite}
              width={96}
              height={96}
              alt={`pokemonsprite${sprite}`}
            />
          </div>
        ))}
    </div>
  );
};
