const BASE_URL = "https://pokeapi.co/api/v2/";

const cache = {};

const get = async (endpoint) => {
  if (!cache[endpoint]) {
    const data = await fetch(BASE_URL + endpoint).then((res) => res.json());

    cache[endpoint] = data;
  }

  return cache[endpoint];
};

export const fetchPokemons = (limit, offset) => {
  return get(`pokemon?limit=${limit}&offset=${offset}`);
};

export const fetchPokemonData = (pokemonId) => {
  return get(`pokemon/${pokemonId}`);
};
