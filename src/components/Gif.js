import React from "react";
import "./Gif.css";
import { Link, Route } from "wouter";
import SingleGif from "./SingleGif";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/singlegif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </Link>
      <Route
        path="/singlegif/"
        element={<SingleGif key={id} title={title} id={id} url={url} />}
      />
    </div>
  );
}
// `https://i.giphy.com/media/${id}/giphy.webp`
