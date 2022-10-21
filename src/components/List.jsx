import { useEffect, useState } from "react";
import Card from "./Card";

import "./list.css";

export default function List({ page }) {
  // console.log(d);
  const [data, setData] = useState();
  async function fetching() {
    const date = new Date();
    const dd = date.getDate();
    const mm =
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const d = `${yyyy}-${mm}-${dd - 1}`;
    const url = `https://api.github.com/search/repositories?q=created:>${d}&sort=stars&order=desc&page=${page}`;
    // console.log(url);

    const res = await fetch(url);
    const result = await res.json();
    setData(result);
    // console.log(d);
  }
  useEffect(() => {
    fetching();
    return setData();
  }, [page]);
  return (
    <div className="list-container">
      {data ? (
        data.items.map((i) => (
          <div key={i.id}>
            <Card
              avatar={i.owner.avatar_url}
              name={i.name}
              discription={i.description}
              star={i.stargazers_count}
              issue={i.open_issues_count}
              username={i.owner.login}
            />
          </div>
        ))
      ) : (
        <h1 className="loader">Loading</h1>
      )}
    </div>
  );
}
