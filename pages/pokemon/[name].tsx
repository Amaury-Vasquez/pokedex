import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

import { PokemonInfo } from 'components/PokemonInfo';

interface IParams extends ParsedUrlQuery {
  name: string;
}

const Pokemon = (props: { name: string }) => {
  const router = useRouter();
  const { name } = props;
  const title = `${name} | Pokedex`;

  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={`Information about ${name}`} />
      </Head>
      <PokemonInfo name={name} />
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
    props: { name },
  };
};
export default Pokemon;
