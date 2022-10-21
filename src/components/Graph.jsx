import Graph1 from "./Graph1";
import Graph2 from "./Graph2";

export default function Graph({ name, username }) {
  return (
    <div className="graph">
      <select>
        <option>Commits</option>
        <option>Addition</option>
        <option>Deletions</option>
      </select>
      <div className="graph-1">
        <h1 className="heading">
          <Graph1 />
        </h1>
      </div>{" "}
      <div className="graph-1">
        <h1 className="heading">
          <Graph2 />
        </h1>
      </div>
    </div>
  );
}
