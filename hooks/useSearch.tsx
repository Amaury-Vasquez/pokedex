import { ChangeEvent, useEffect, useRef, useState } from 'react';

export const useSearch = (callback: Function) => {
  // State
  const [value, setValue] = useState('');
  // Functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target.value;
    setValue(input);
    callback(input.toLowerCase());
  };
  // Effects

  return { value, handleChange };
};
