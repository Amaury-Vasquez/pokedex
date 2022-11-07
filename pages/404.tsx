import Head from 'next/head';
import Link from 'next/link';
import { HiOutlineHome } from 'react-icons/hi';

import styles from 'styles/notFound.module.css';

const { text, notFound, warning, home } = styles;

const NotFound = () => {
  return (
    <>
      <Head>
        <title> 404 Not found | Pokedex </title>
      </Head>
      <div className={notFound}>
        <p className={warning}> This page does not exists!</p>
        <p className={text}>
          Remember this web app only includes results for Kanto region 151
          pokemons
        </p>
        <Link href={'/'}>
          <a className={home}>
            Take me home <HiOutlineHome />{' '}
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
