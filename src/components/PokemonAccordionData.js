import { PokemonType } from "./PokemonType";
import { parsePokemonId } from '../utils/parsePokemonId'
import { StatBar } from "./StatBar";

export const PokemonAccordionData = ({ pokemonData }) => {
  return `
    <section>
        <div class="flex gap-2 items-center justify-center">
            ${PokemonType({ pokemonData })}
        </div>
            ${pokemonData.stats
              .map(
                (stat) =>
                  `
                    <div class="flex flex-col items-center justify-center">
                        <div class="flex items-center justify-center ">
                            <span class="capitalize w-16 text-sm">
                                ${stat.stat.name}: 
                            </span> 
                            ${StatBar({ stat })}
                        </div>
                    </div>
                `
              )
              .join("")}
            <div class="flex justify-end w-full">
                <span class=" mb-2 mr-2">
                    Total: 
                    ${pokemonData.stats.reduce((prev, current) => {
                      return prev + current.base_stat;
                    }, 0)}
                </span>
            </div>
            <button id="pokemon-${parsePokemonId(
              `${pokemonData.id}`
            )}" class="bg-gray-500 text-gray-200 px-4 py-2 mb-4 rounded-md hover:bg-gray-700 duration-300">View More</button>
    </section>
    `;
};
