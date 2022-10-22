import Link from 'next/link';

import styles from 'styles/layout.module.css';

const { content, header, pokemon } = styles;

export const Layout = (props: { children: JSX.Element }) => {
  const { children } = props;

  return (
    <>
      <header className={header}>
        <Link href={'/'}>
          <a className={pokemon}>Pokedex</a>
        </Link>
      </header>
      <main className={content}>{children}</main>
    </>
  );
};
