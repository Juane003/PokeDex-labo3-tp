import { pokemonSpriteUrl } from "../constants";

export const PokemonAccordion = ({ pokemonName, pokemonUrl }) => {
  const pokemonId = pokemonUrl.split("/")[pokemonUrl.split("/").length - 2];
  return `
    <section class="accordion w-64 bg-gray-300  rounded-md dark:bg-slate-700  dark:text-slate-200">
      <article class="flex items-center justify-center">
          <img src="${pokemonSpriteUrl}${pokemonId}.png" class="w-16 h-16"/>
          <span class="capitalize pokemon-name">${pokemonName}</span>
      </article>
      <div class="grid [grid-template-rows:0fr] px-2 transition-all duration-300 accordion-child" id="accordion-${pokemonName}">
        <section class="overflow-hidden accordion-data">
        </section>
      </div>
      </section>
      `;
};
