import { useState } from "react";

import Button from "@mui/material/Button";

import List from "./List";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  const dec = () => {
    if (page > 1) setPage(page - 1);
  };
  const inc = () => {
    setPage(page + 1);
  };
  return (
    <div className="page">
      <List page={page} />

      <Button variant="contained" color="success" onClick={dec}>
        pre
      </Button>

      <Button variant="outline">{page}</Button>

      <Button variant="contained" onClick={inc}>
        next
      </Button>
    </div>
  );
}
