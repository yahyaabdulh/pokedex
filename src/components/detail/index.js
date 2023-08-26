import ReactDOM from "react-dom";
import { useCallback, useState } from "react";
import { usePokemons } from "../../context";
import Card from "../card";
import Modal from "../modal";
import View from "./view";
import "./detail.css";

export default function Detail() {
  const { currentPokemon, setCurrentPokemonId } = usePokemons();
  const [isHidden, seIsHidden] = useState(false);

  const closeModal = useCallback(() => {
    seIsHidden(true);
  }, []);

  const handleAnimationEnd = useCallback(
    ({ animationName }) => {
      if (animationName !== "pull-down-center") {
        return;
      }

      seIsHidden(false);
      setCurrentPokemonId(-1);
    },
    [setCurrentPokemonId]
  );

  if (!currentPokemon) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Modal hidden={isHidden} onClick={closeModal} />

      <div
        className={`details-view-container ${isHidden && "hidden"}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Card pokemon={currentPokemon} />
        <View pokemon={currentPokemon} />
      </div>
    </>,
    document.body
  );
}
