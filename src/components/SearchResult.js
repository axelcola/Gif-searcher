import React from "react";
import Gif from "./Gif";
import Spinner from "./Spinner";
import ListOfGifs from "./ListOfGifs";
import { useGifs } from "../hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });
  // const [loading, setLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);

  // useEffect(
  //   function () {
  //     setLoading(true);
  //     getGifs({ keyword }).then((gifs) => {
  //       setGifs(gifs);
  //       setLoading(false);
  //     });
  //   },
  //   [keyword]
  // );
  // if (loading) return <Spinner />;

  return loading ? <Spinner /> : <ListOfGifs gifs={gifs} />;
}
