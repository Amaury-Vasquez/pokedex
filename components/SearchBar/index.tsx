import { AiOutlineSearch } from 'react-icons/ai';

import { useSearch } from 'hooks/useSearch';
import styles from './searchBar.module.css';

const { wrapper, bar, label, icon, input } = styles;

export const SearchBar = (props: { callback: Function }) => {
  const { callback } = props;
  const { value, handleChange } = useSearch(callback);

  return (
    <div className={wrapper}>
      <label className={label}> Search pokemon </label>
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
