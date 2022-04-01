import { useEffect, useState } from "react";
import getGifs from "../getGifs";

export function useGifs({ keyword }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword: "rick" }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  return { loading, gifs };
}
