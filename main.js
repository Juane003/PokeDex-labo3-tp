import { fetchPokemon } from "./src/api";
import { pokeApiBaseUrl } from "./src/constants";
import { PokemonAccordion } from "./src/components/PokemonAccordion";
import { PokemonAccordionData } from "./src/components/PokemonAccordionData";
import { PokemonDetailsCard } from "./src/components/PokemonDetailsCard";
import "./style.css";
import sun from "./src/Assets/modes/sun.svg";
import moon from "./src/Assets/modes/moon.svg";
export { sun, moon };
let limit = 32;
let offset = 0;
let currentClicked;

let initialPageSnapshot;

const addPokemonOnScroll = async () => {
  const $pokemonContainerEl = document.querySelector("#accordion-container");
  const initialPokemons = await fetchPokemon(
    `${pokeApiBaseUrl}?limit=${limit}&offset=${offset}`
  );

  if (!initialPageSnapshot) {
    initialPageSnapshot = `
      ${initialPokemons.results
        .map((pokemon) =>
          PokemonAccordion({
            pokemonName: pokemon.name,
            pokemonUrl: pokemon.url,
          })
        )
        .join("")}`;
  }

  $pokemonContainerEl.innerHTML += `
  ${initialPokemons.results
    .map((pokemon) =>
      PokemonAccordion({
        pokemonName: pokemon.name,
        pokemonUrl: pokemon.url,
      })
    )
    .join("")}`;

  document.querySelectorAll(".accordion").forEach((acc) => {
    acc.addEventListener("click", async () => {
      const $pokemonName = acc.querySelector(".pokemon-name");
      const $animatedAccordion = acc.querySelector(".accordion-child");
      const $expandedDataAccordion = acc.querySelector(".accordion-data");
      const $pokemonContainerEl = document.querySelector(
        "#accordion-container"
      );
      if (
        currentClicked &&
        currentClicked !== $pokemonName.innerHTML.toLowerCase()
      )
        return;
      currentClicked = $pokemonName.innerHTML.toLowerCase();

      const pokemonData = await fetchPokemon(
        `${pokeApiBaseUrl}/${$pokemonName.innerHTML.toLowerCase()}`
      );

      $expandedDataAccordion.innerHTML = PokemonAccordionData({
        pokemonData,
      });

      const pokemonLinks = document.querySelectorAll('[id^="pokemon-"]');
      pokemonLinks.forEach((link) => {
        link.addEventListener("click", () => {
          history.pushState("", "", link.id);
          const $loadingBtn = document.querySelector("#loading");
          $loadingBtn.classList.add("hidden");
          $pokemonContainerEl.classList.remove("grid");
          const goBack = () => {
            history.back();
            $loadingBtn.classList.remove("hidden");
            $pokemonContainerEl.classList.add("grid");
            $pokemonContainerEl.innerHTML = "";
            offset = 0;
          };
          $pokemonContainerEl.innerHTML = `<div class="w-full relative ">
          <button id="go-back-btn" class="absolute border border-black rounded-md p-2 hover:bg-black hover:text-white duration-300 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
            Go Back
          </button>
            ${PokemonDetailsCard({ pokemon: pokemonData })}
          </div>`;

          document
            .querySelector("#go-back-btn")
            .addEventListener("click", goBack);
        });
      });

      const isExpanded = $animatedAccordion.classList.contains(
        "[grid-template-rows:1fr]"
      );

      if (isExpanded) {
        $animatedAccordion.classList.remove("[grid-template-rows:1fr]");
        $animatedAccordion.classList.add("[grid-template-rows:0fr]");
        currentClicked = "";
        return;
      }
      $animatedAccordion.classList.remove("[grid-template-rows:0fr]");
      $animatedAccordion.classList.add("[grid-template-rows:1fr]");
    });
  });
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

(function () {
  const $loadingBtn = document.querySelector("#loading");

  $loadingBtn.addEventListener("click", addPokemonOnScroll);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        addPokemonOnScroll();
        offset += 64;
      }
    });
  }, options);

  observer.observe($loadingBtn);
})();

(function () {
  const $htmlEl = document.querySelector("html");
  const $darkModeBtn = document.querySelector("#dark-mode");

  const initialModePreferenceIsDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (initialModePreferenceIsDark) {
    document.documentElement.classList.add("dark");
    $darkModeBtn.innerHTML = `<img src="${sun}" alt="sun" class="h-6 w-6"/>`;
  } else {
    document.documentElement.classList.remove("dark");
    $darkModeBtn.innerHTML = `<img src="${moon}" alt="moon" class="h-6 w-6"/>`;
  }

  const toggleDarkMode = () => {
    $htmlEl.classList.toggle("dark");
    const isDarkMode = $htmlEl.classList.contains("dark");
    if (isDarkMode) {
      $darkModeBtn.innerHTML = `<img src="${sun}" alt="sun" class="h-6 w-6"/>`;
    } else {
      $darkModeBtn.innerHTML = `<img src="${moon}" alt="moon" class="h-6 w-6"/>`;
    }
  };

  $darkModeBtn.addEventListener("click", toggleDarkMode);
})();
