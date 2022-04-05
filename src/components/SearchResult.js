import React from "react";
import Spinner from "./Spinner";
import ListOfGifs from "./ListOfGifs";
import { useGifs } from "../hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
