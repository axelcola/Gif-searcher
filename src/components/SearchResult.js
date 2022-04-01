import React from "react";
import Gif from "./Gif";
import { useState, useEffect } from "react";
import getGifs from "../getGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );
  if (loading) return <i>cargando</i>;

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} id={id} url={url} />
      ))}
    </div>
  );
}
