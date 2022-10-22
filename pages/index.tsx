import Head from 'next/head';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

import { FallbackScreen } from 'components/fallbackScreen';

const Pokedex = dynamic(() => import('components/Pokedex'));

interface HomeProps {
  data: any;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const results = data.results.map(
    (poke: { name: string; url: string }, i: number) => {
      return {
        name: poke.name,
        num: i + 1,
        url: poke.url,
      };
    }
  );

  return (
    <>
      <Head>
        <title> Pokedex | Amaury Vasquez </title>
        <meta
          name="description"
          content="Pokedex of the first 151 kanto pokemons, the information shown is 
          gathered trough the pokeapi"
        />
      </Head>
      <Suspense fallback={<FallbackScreen />}>
        <Pokedex results={results} />
      </Suspense>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Home;
