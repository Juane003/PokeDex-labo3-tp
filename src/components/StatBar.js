import { statBarColors } from "../PokemonTypesColors";

export const StatBar = ({ stat }) => {
  return ` <div class="h-4 w-32 rounded-md m-4 bg-gray-400/70">
    <div
        class=" h-4 rounded-md flex items-center justify-end"
        style="width: ${stat.base_stat}px; background-color: ${
    statBarColors[stat.stat.name]
  }"
    >
    <div class="flex">
        <p class="p-[5px] capitalize text-xs font-semibold">
            ${stat.base_stat}
        </p>
        </div>
  </div>`;
};