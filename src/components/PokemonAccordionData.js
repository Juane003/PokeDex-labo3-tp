import { PokemonType } from "./PokemonType";
import { StatBar } from "./StatBar";

export const PokemonAccordionData = ({ pokemonData }) => {
  return `
    <div>
        <div class="flex gap-2 items-center justify-center">
            ${PokemonType({ pokemonData })}
        </div>
            ${pokemonData.stats
              .map(
                (stat) =>
                  `
                    <div class="flex flex-col items-center justify-center">
                        <div class="flex items-center justify-center ">
                            <p class="capitalize w-16 text-sm">
                                ${stat.stat.name}: 
                            </p> 
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
    </div>
    `;
};