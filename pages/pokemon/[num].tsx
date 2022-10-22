import type { NextPage } from 'next';
import { useRouter } from 'next/router';

interface PokemonPageProps {
  data: any;
}

const Pokemon: NextPage<PokemonPageProps> = ({ data }) => {
  const router = useRouter();
  const { num } = router.query;
  return <h1> Soy {num}</h1>;
};

// export async function getStaticProps() {
//   try {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/151/');
//     const data = await res.json();
//     console.log(data);

//     return {
//       props: {
//         data,
//       },
//     };
//   } catch {
//     return {
//       notFound: true,
//     };
//   }
// }

export default Pokemon;
