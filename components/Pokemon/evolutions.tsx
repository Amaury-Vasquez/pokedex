import Link from 'next/link';
import Image from 'next/image';
import { MdDoubleArrow } from 'react-icons/md';

import { Fragment } from 'react';
import styles from 'styles/pokemon.module.css';
import animation from 'styles/animation.module.css';
import { BounceLoader } from 'components/bounceLoader';
import { useEvolutions, Poke } from 'hooks/useEvolutions';
import { PokemonData } from 'interfaces/pokemonInterfaces';

const { fadeIn } = styles;
const { pokeChain, evolutions, evolWrapper, imgEvolWrapper } = styles;

export const Evolutions = (props: { data: PokemonData }) => {
  const { data } = props;
  const { basePoke, evolutionChain, loading } = useEvolutions(data);

  const EvolutionImg = (props: { name: string; url: string }) => {
    const { name, url } = props;

    return (
      <Link href={`/pokemon/${name}`}>
        <a className={evolWrapper}>
          <div className={imgEvolWrapper}>
            <Image
              src={url}
              alt={`evolution ${name}`}
              width={475}
              height={475}
            />
          </div>
          <p> {name} </p>
        </a>
      </Link>
    );
  };

  const Chain = (props: { basePoke: Poke; evolChain: Poke[][] }) => {
    const { basePoke, evolChain } = props;

    return (
      <div className={evolutions + ' ' + fadeIn}>
        {evolChain.map((chain, i) => {
          return (
            <div
              key={'evolve-chain' + '#' + data.id + '/' + i}
              className={pokeChain}
            >
              <EvolutionImg name={basePoke.name} url={basePoke.imgUrl} />
              {/* <div> */}
              {chain.map((poke, j) => (
                <Fragment key={data.name + 'pokemon#' + i + '/evol/' + j}>
                  <MdDoubleArrow />
                  <EvolutionImg name={poke.name} url={poke.imgUrl} />
                </Fragment>
              ))}
              {/* </div> */}
            </div>
          );
        })}
      </div>
    );
  };

  if (loading)
    return (
      <div className={evolutions}>
        <BounceLoader />
      </div>
    );
  if (basePoke && evolutionChain) {
    return evolutionChain.length > 0 ? (
      <Chain evolChain={evolutionChain} basePoke={basePoke} />
    ) : (
      <div className={evolutions + ' ' + fadeIn}>
        <EvolutionImg name={basePoke.name} url={basePoke.imgUrl} />
      </div>
    );
  }
  return null;
};
