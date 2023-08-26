import { useState, useContext, createContext, useMemo } from 'react';

export const PokemonsContext = createContext();

export default function PokemonsProvider( { children } ) {
	const [ pokemons, setPokemons ] = useState( [] );
	const [ currentPokemonId, setCurrentPokemonId ] = useState( -1 );

	const currentPokemon = pokemons[ currentPokemonId ];
	const contextValue = useMemo(() => ({
		pokemons,
		setPokemons,
		currentPokemonId,
		setCurrentPokemonId,
		currentPokemon
	  }), [pokemons, currentPokemonId, currentPokemon]);

	return (
		<PokemonsContext.Provider value={contextValue}>
			{ children }
		</PokemonsContext.Provider>
	);
}

export const usePokemons = () => {
	return useContext( PokemonsContext );
};
