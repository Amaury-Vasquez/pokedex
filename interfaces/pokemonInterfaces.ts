export interface Data {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Data;
}

interface PokemonAbilitie {
  ability: Data;
  is_hidden: boolean;
  slot: number;
}

interface PokemonMove {
  move: Data;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: Data;
    version_group: Data;
  }[];
}

export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;

  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: Data;
}

interface PokemonType {
  slot: number;
  type: Data;
}

export interface PokemonData {
  abilities: PokemonAbilitie[];
  base_experience: number;
  forms: Data[];
  game_indices: GameIndex[];
  height: number;
  id: number;
  moves: PokemonMove[];
  name: string;
  order: number;
  species: Data;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface PokeChain {
  evolves_to: [];
  species: Data;
}
