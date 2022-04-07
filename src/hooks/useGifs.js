import { useEffect, useState, useContext } from "react";
import getGifs from "../getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    function () {
      setLoading(true);

      const keywordToUse =
        keyword || localStorage.getItem("lastkeyword") || "random";
      console.log(keywordToUse);

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );

  return { loading, gifs };
}
