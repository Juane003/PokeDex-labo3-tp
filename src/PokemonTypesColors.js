export const colors = {
    normal: "#9FA39D",
    fighting: "#FF202E",
    flying: "#89BDFF",
    poison: "#F149FF",
    ground: "#FF6B0D",
    rock: "#D8BC5A",
    bug: "#7BCF00",
    ghost: "#4E6AFF",
    steel: "#23A1BD",
    fire: "#FF9900",
    water: "#14A8FF",
    grass: "#1CD80E",
    electric: "#FFDE00",
    psychic: "#FF6C64",
    ice: "#2EE4C6",
    dragon: "#0076FF",
    dark: "#5A566A",
    fairy: "#FF76FF",
  };
  
  export const getGradientBgFromTypes = (firstType, secondType) => {
    if (secondType === undefined)
      return `linear-gradient(to right, ${colors[firstType]}, ${colors[firstType]})`;
    const firstColor = colors[firstType];
    const secondColor = colors[secondType];
    return `linear-gradient(to right, ${firstColor}, ${secondColor})`;
  };
  
  export const statBarColors = {
    hp: "#E53E3E",
    attack: "#DD6B20",
    defense: "#D69E2E",
    "special-attack": "#3182ce",
    "special-defense": "#38A169",
    speed: "#D53F8C",
  };