import {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water,
  } from "../Assets";
  import { colors } from "./PokemonTypesColors";
  
  export const types = {
    normal: normal,
    fighting: fighting,
    flying: flying,
    poison: poison,
    ground: ground,
    rock: rock,
    bug: bug,
    ghost: ghost,
    steel: steel,
    fire: fire,
    water: water,
    grass: grass,
    electric: electric,
    psychic: psychic,
    ice: ice,
    dragon: dragon,
    dark: dark,
    fairy: fairy,
  };
  
  export const getType = (type) => types[type];
  
  export const getTypeBgColor = (type) => colors[type];