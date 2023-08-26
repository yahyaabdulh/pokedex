function About({ pokemon }) {
  const types = pokemon.types.map(({ type: { name } }) => name).join(", ");

  const abilities = pokemon.abilities
    .map(({ ability: { name } }) => name)
    .join(", ");

  const height = pokemon.height * 10;
  const weight = pokemon.weight / 10;

  return (
    <div className="tab tab-about">
      <table>
        <tbody>
          <tr>
            <td>Species</td>
            <td>{types}</td>
          </tr>

          <tr>
            <td>Height</td>
            <td>{height}cm</td>
          </tr>

          <tr>
            <td>Weight</td>
            <td>{weight}kg</td>
          </tr>

          <tr>
            <td>Abilities</td>
            <td>{abilities}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
