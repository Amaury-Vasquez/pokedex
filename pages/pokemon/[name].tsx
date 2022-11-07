import Head from 'next/head';
import dynamic from 'next/dynamic';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Suspense } from 'react';
import { FallbackScreen } from 'components/fallbackScreen';

const PokemonInfo = dynamic(() => import('components/Pokemon/index'));

interface IParams extends ParsedUrlQuery {
  name: string;
}

const Pokemon = (props: { name: string }) => {
  const { name } = props;
  const title = `${name} | Pokedex`;

  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={`Information about ${name}`} />
      </Head>
      <Suspense fallback={<FallbackScreen />}>
        <PokemonInfo name={name} />
      </Suspense>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
  );
  const data = await res.json().then();

  const paths = data.results.map((poke: { name: string; url: string }) => ({
    params: { name: poke.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as IParams;

  return {
    props: { name, key: name },
  };
};
export default Pokemon;
