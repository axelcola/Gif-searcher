import React from "react";
import "./Gif.css";
import { Link } from "wouter";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <div className="Gif-link">
        <Link to={`/singlegif/${id}`} className="Gif-link">
          <img src={url} alt={title} />
          <h4>{title}</h4>
        </Link>
      </div>
    </div>
  );
}
// `https://i.giphy.com/media/${id}/giphy.webp`
