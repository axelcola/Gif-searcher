import React from "react";
import { useState, useEffect } from "react";
import getGifs from "../getGifs";
import Spinner from "./Spinner";
import ListOfGifs from "./ListOfGifs";

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
  // if (loading) return <Spinner />;

  return loading ? <Spinner /> : <ListOfGifs gifs={gifs} />;
}
