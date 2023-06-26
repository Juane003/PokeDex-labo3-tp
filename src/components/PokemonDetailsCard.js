import { PokemonImage } from "./PokemonImage";
import { PokemonInfo } from "./PokemonInfo";
import { PokemonStats } from "./PokemonStats";

export const PokemonDetailsCard = ({ pokemon }) => {
  return `
  <div class="w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:grid md:grid-cols-3 items-center justify-center pt-8 gap-4 sm:gap-0">
    <div class="block md:hidden">
      ${PokemonImage({ pokemon })}
    </div>
    ${PokemonInfo({ pokemon })}
    <div class="hidden md:block">
      ${PokemonImage({ pokemon })}
    </div>
    ${PokemonStats({ stats: pokemon.stats })}
</div>
    `;
};
