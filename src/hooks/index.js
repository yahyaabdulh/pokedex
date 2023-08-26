import { useCallback, useEffect, useState } from "react";
import { fetchPokemonData, fetchPokemons } from "../components/api";
const pagination = {
  offset: 0,
  limit: 52,
};

export const usePokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    setPokemons([]);

    fetchPokemons(pagination.limit, pagination.offset)
      .then(async ({ results }) => {
        const data = [];

        await Promise.all(
          results.map(async ({ name }) => {
            const pokemon = await fetchPokemonData(name);

            data[pokemon.id] = pokemon;
          })
        );

        setPokemons(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => fetchData(), [fetchData]);

  return {
    data: pokemons,
    refetch: fetchData,
    isLoading,
  };
};
