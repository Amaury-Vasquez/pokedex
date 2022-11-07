import Link from 'next/link';

import { Arrow } from 'components/arrow';
import styles from 'styles/pokemon.module.css';
import animation from 'styles/animation.module.css';
import { useAdyacentPokes } from 'hooks/useAdyacentPokes';
import { PokemonData } from 'interfaces/pokemonInterfaces';

const { fadeIn } = animation;

const { closePokes, linkButton, closeName } = styles;

export const Adyacents = (props: { data: PokemonData }) => {
  const { data } = props;
  const { previous, next } = useAdyacentPokes(data);

  return (
    <div className={closePokes}>
      {previous ? (
        <Link href={`/pokemon/${previous}`}>
          <a className={linkButton + ' ' + fadeIn}>
            <Arrow type="prev" />
            <span className={closeName}>{previous}</span>
          </a>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={{
            pathname: '/pokemon/[name]',
            query: { name: next },
          }}
        >
          <a className={linkButton + ' ' + fadeIn}>
            <span className={closeName}> {next} </span>
            <Arrow type="next" />
          </a>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};
