import { useEffect } from "react";
import Card  from "../card";
import Loader from "../loader";
import { usePokemons } from "../../context";
import { usePokemonList } from "../../hooks";
import "./pokeCard.css";

function PokeCard() {
  const { pokemons, setPokemons, setCurrentPokemonId } = usePokemons();
  const { data, isLoading } = usePokemonList();

  useEffect(() => {
    setPokemons(data);
  }, [data, setPokemons]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pokedex-view">
      {pokemons.map((pokemon) => {
        return (
          <Card
            pokemon={pokemon}
            key={pokemon.id}
            onClick={() => setCurrentPokemonId(pokemon.id)}
          />
        );
      })}
    </div>
  );
}

export default PokeCard;
