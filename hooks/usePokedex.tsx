import { useState } from 'react';

export interface Result {
  name: string;
  num: number;
}

export const usePokedex = (results: Result[]) => {
  // State
  const [pokes, setPokes] = useState(results);

  // Callback function for pokemon search
  const callback: Function = (input: string) => {
    const matches = results.filter((poke) => poke.name.includes(input));
    setPokes(matches);
  };

  return { callback, pokes };
};
