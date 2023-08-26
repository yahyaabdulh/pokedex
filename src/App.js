import React from "react";
import PokemonsProvider from "./context";
import Heading from "./components/heading";
import PokeCard from "./components/pokeCard";
import Detail from "./components/detail";
import "./App.css";

function App() {
  return (
    <PokemonsProvider>
      <div className="pokedex-app">
        <Heading />
        <PokeCard />
        <Detail />
      </div>
    </PokemonsProvider>
  );
}

export default App;
