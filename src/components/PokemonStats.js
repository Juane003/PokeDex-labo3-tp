import { StatBar } from "./StatBar";

export const PokemonStats = ({ stats }) => {
  return `
      <section class="sm:perspective dark:text-white">
        <div class="sm:rotate-x-45 hover:rotate-0 duration-300">
          <div class="flex flex-col flex-wrap items-end">
            ${stats
              .map(
                (stat) => `
                <div class="flex flex-col">
                  <span class="capitalize whitespace-nowrap">
                    ${stat.stat.name}
                  </span>
                ${StatBar({ stat })}
                </div>`
              )
              .join("")}
            <span>
              Total:
              ${stats.reduce((prev, current) => {
                return prev + current.base_stat;
              }, 0)}
            </span>
          </div>
        </div>
      </section>
      `;
};
