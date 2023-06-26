import "./style.css";

import { fetchPokemon } from "./src/api";
import { pokeApiBaseUrl } from "./src/constants";
import { PokemonAccordion } from "./src/components/PokemonAccordion";
import { PokemonAccordionData } from "./src/components/PokemonAccordionData";
import "./style.css";
let limit = 32;
let offset = 0;
let currentClicked;

document.addEventListener("DOMContentLoaded", async () => {
  const initialPokemons = await fetchPokemon(
    `${pokeApiBaseUrl}?limit=${limit}&offset=${offset}`
  );
  renderApp(initialPokemons);
});

const renderApp = (initialPokemons) => {
  document.querySelector("#accordion-container").innerHTML = `
        
              ${initialPokemons.results
                .map((pokemon) =>
                  PokemonAccordion({
                    pokemonName: pokemon.name,
                    pokemonUrl: pokemon.url,
                  })
                )
                .join("")}
            `;
  document.querySelectorAll(".accordion").forEach((acc) => {
    acc.addEventListener("click", async () => {
      const pokemonName = acc.querySelector(".pokemon-name");
      const animatedAccordion = acc.querySelector(".accordion-child");
      const expandedDataAccordion = acc.querySelector(".accordion-data");
      if (
        currentClicked &&
        currentClicked !== pokemonName.innerHTML.toLowerCase()
      )
        return;
      currentClicked = pokemonName.innerHTML.toLowerCase();

      const pokemonData = await fetchPokemon(
        `${pokeApiBaseUrl}/${pokemonName.innerHTML.toLowerCase()}`
      );

      expandedDataAccordion.innerHTML = PokemonAccordionData({ pokemonData });

      const isExpanded = animatedAccordion.classList.contains(
        "[grid-template-rows:1fr]"
      );

      if (isExpanded) {
        animatedAccordion.classList.remove("[grid-template-rows:1fr]");
        animatedAccordion.classList.add("[grid-template-rows:0fr]");
        currentClicked = "";
        return;
      }
      animatedAccordion.classList.remove("[grid-template-rows:0fr]");
      animatedAccordion.classList.add("[grid-template-rows:1fr]");
    });
  });
};
