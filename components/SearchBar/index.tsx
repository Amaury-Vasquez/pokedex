import { AiOutlineSearch } from 'react-icons/ai';

import { useSearch } from 'hooks/useSearch';
import styles from './searchBar.module.css';
import animation from 'styles/animation.module.css';

const { wrapper, bar, label, icon, input } = styles;

export const SearchBar = (props: { callback: Function }) => {
  const { callback } = props;
  const { value, handleChange } = useSearch(callback);

  return (
    <div className={`${wrapper} ${animation.fadeIn}`}>
      <div className={bar}>
        <span className={icon}>
          <AiOutlineSearch />
        </span>
        <input
          className={input}
          value={value}
          type="text"
          placeholder="mew"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
