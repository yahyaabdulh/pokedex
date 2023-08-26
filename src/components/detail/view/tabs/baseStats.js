import ProgressBar from "../../../progressBar";

const labels = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

function BaseStats({ stats }) {
  const total = stats.reduce((a, b) => a + parseInt(b.base_stat), 0);

  return (
    <div className="tab tab-base-stats">
      <table>
        <tbody>
          {labels.map((label, i) => (
            <tr key={label}>
              <td>{label}</td>
              <td>
                {stats[i].base_stat}
                <ProgressBar value={stats[i].base_stat} />
              </td>
            </tr>
          ))}

          <tr>
            <td>Total</td>
            <td>
              {total}
              <ProgressBar value={total} max="600" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BaseStats;
