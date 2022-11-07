import { PokeCard } from './pokeCard';
import { SearchBar } from './searchBar';
import { usePokedex, Result } from 'hooks/usePokedex';

import styles from 'styles/pokedex.module.css';
import animation from 'styles/animation.module.css';

const Pokedex = (props: { results: Result[] }) => {
  const { results } = props;
  const { callback, pokes } = usePokedex(results);

  return (
    <>
      <SearchBar callback={callback} />
      <div className={`${styles.grid} ${animation.fadeIn}`}>
        {pokes.map((poke, i) => (
          <PokeCard
            name={poke.name}
            num={poke.num}
            key={poke.name + 'card' + i}
          />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
