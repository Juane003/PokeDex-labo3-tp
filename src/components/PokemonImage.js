import { pokemonHdSpriteUrl } from "../constants";
import { parsePokemonId } from "../parsePokemonId";

export const PokemonImage = ({ pokemon }) => {
  return `
      <article class="flex items-center flex-col gap-8 dark:text-white">
        <h1 class="text-3xl capitalize">${pokemon.name}</h1>
        <img
          src="${pokemonHdSpriteUrl}/${parsePokemonId(
    pokemon.id.toString()
  )}.png"
          class="sm:w-[400px]"
          alt="pokemon-sprite-${pokemon.id.toString()}"
        />
      </article>
      `;
};
