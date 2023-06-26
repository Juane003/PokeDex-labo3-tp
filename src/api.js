export const fetchPokemon = async (URL) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Error on response");
      return await response.json();
    } catch (e) {
      console.log(e.message);
    }
  };