import { memo } from "react";
import { getImageURL } from "../utils";
import "./card.css";

function Card({ pokemon, onClick }) {
  if (!pokemon) {
    return null;
  }

  const { name, id, types } = pokemon;

  const imgURL = getImageURL(id),
    className = types.map(({ type }) => "type-" + type.name).join(" "),
    paddedId = "#" + String(id)?.padStart(3, "000");

  return (
    <div className="card-container" onClick={onClick}>
      <div className={`card ${className}`}>
        <div className="bg-pokeball"></div>
        <span className="pokemon-id">{paddedId}</span>

        <div className="card-title">
          <h2>{name}</h2>

          <div className="pokemon-types">
            {types.map(({ type }) => (
              <span className="type" key={type.name}>
                {type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="pokemon-image">
          <img alt={name} src={imgURL} />
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
