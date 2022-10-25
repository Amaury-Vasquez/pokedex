import { FaDragon } from 'react-icons/fa';
import { SiCircle } from 'react-icons/si';
import { CgDarkMode } from 'react-icons/cg';
import { AiFillFire, AiFillBug } from 'react-icons/ai';
import {
  GiAngelWings,
  GiWaterDrop,
  GiHighGrass,
  GiElectric,
  GiMailedFist,
  GiPoison,
  GiIceCube,
  GiEarthSpit,
  GiPsychicWaves,
  GiStoneWall,
  GiGhost,
  GiSteelClaws,
  GiFairyWings,
} from 'react-icons/gi';

import styles from 'styles/types.module.css';

const {
  fire,
  icon,
  flying,
  normal,
  poison,
  water,
  grass,
  electric,
  ice,
  fighting,
  ground,
  psychic,
  bug,
  rock,
  ghost,
  dark,
  dragon,
  steel,
  fairy,
} = styles;

export const usePokemonTypes = () => {
  const types = {
    normal: <SiCircle className={`${icon} ${normal}`} />,
    fire: <AiFillFire className={`${fire} ${icon}`} />,
    water: <GiWaterDrop className={`${icon} ${water}`} />,
    grass: <GiHighGrass className={`${icon} ${grass}`} />,
    electric: <GiElectric className={`${icon} ${electric}`} />,
    ice: <GiIceCube className={`${icon} ${ice}`} />,
    fighting: <GiMailedFist className={`${icon} ${fighting}`} />,
    poison: <GiPoison className={`${icon} ${poison}`} />,
    ground: <GiEarthSpit className={`${icon} ${ground}`} />,
    flying: <GiAngelWings className={`${flying} ${icon}`} />,
    psychic: <GiPsychicWaves className={`${icon} ${psychic}`} />,
    bug: <AiFillBug className={`${icon} ${bug}`} />,
    rock: <GiStoneWall className={`${icon} ${rock}`} />,
    ghost: <GiGhost className={`${icon} ${ghost}`} />,
    dark: <CgDarkMode className={`${icon} ${dark}`} />,
    dragon: <FaDragon className={`${icon} ${dragon}`} />,
    steel: <GiSteelClaws className={`${icon} ${steel}`} />,
    fairy: <GiFairyWings className={`${icon} ${fairy}`} />,
  };

  return { types };
};
