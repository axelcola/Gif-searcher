import React from "react";
import "./Gif.css";
import { Link, Route } from "wouter";
import SingleGif from "./SingleGif";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/singlegif/${id}`} className="Gif-link">
        <img src={url} alt={title} />
        <h4>{title}</h4>
      </Link>
    </div>
  );
}
// `https://i.giphy.com/media/${id}/giphy.webp`
