import { getType, getTypeBgColor } from "../PokemonTypesAssetSelector";
export const PokemonType = ({ pokemonData }) => {
  return `
    <span class="font-semibold">${
      pokemonData.types.length > 1 ? "Types: " : "Type: "
    } </span>
          ${pokemonData.types
            .map(
              (type) =>
                `<img src="${getType(
                  type.type.name
                )}" style="background-color: ${getTypeBgColor(
                  type.type.name
                )}" class="w-10 h-10 rounded-full p-1.5"/>`
            )
            .join("")}`;
};