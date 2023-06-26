import { parsePokemonId } from "../parsePokemonId";
import { colors } from "../PokemonTypesColors";
import { getType } from "../PokemonTypesAssetSelector";

export const PokemonInfo = ({ pokemon }) => {
  return `
    <div class="md:perspective dark:text-white">
    <div class="flex flex-col gap-4 md:rotate-y-45 hover:rotate-0 duration-300">
      <span>Id: #${parsePokemonId(`${pokemon.id}`)}</span>
      <span>Height: ${pokemon.height}</span>
      <span>Weight: ${pokemon.weight}</span>
      <div class="flex gap-4">
        Abilities:
        ${pokemon.abilities
          .map(
            (ability) => `
          <span
            class="capitalize px-2"
            style="
              background-color: ${colors[pokemon.types[0].type.name]}
            "
          >
            ${ability.ability.name}
          </span>`
          )
          .join("")}
      </div>
      <div class="flex gap-4">
        Types:
        ${pokemon.types
          .map(
            (type) => `
          <div
            class="flex gap-8 items-center px-8 py-1"
            style="
              background: ${colors[type.type.name]};
              box-shadow: 0 0 25px 5px ${colors[type.type.name]};
              "
          >
            <span class="capitalize">${type.type.name}</span>
            <img
              src=${getType(type.type.name)}
              alt="${type.type.name}-image"
            class="h-6 w-6"
            />
          </div>`
          )
          .join("")}
      </div>
    </div>
  </div>`;
};
