import { useState } from "react";
import Graph from "./Graph";

import "./card.css";
import { RiArrowDropDownFill } from "react-icons/ri";

export default function Card({
  avatar,
  name,
  discription,
  star,
  issue,
  username,
  pushed_at,
}) {
  const [show, setShow] = useState(false);
  const showGraph = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={avatar} />
        </div>
        <div className="details-section">
          <h3>{name}</h3>
          <p>{discription}</p>
          <div className="box-cont">
            <div className="box">{" star: " + star}</div>
            <div className="box">{" issue: " + issue}</div>
          </div>
          <div>{" Username: " + username}</div>
          <div style={{ display: "flex" }}>
            Last pushed {pushed_at.slice(0, 19) + " "} by {username}
          </div>
          <button onClick={showGraph}>
            <RiArrowDropDownFill />
          </button>
        </div>
      </div>
      {show ? <Graph name={name} username={username} /> : null}
    </>
  );
}
