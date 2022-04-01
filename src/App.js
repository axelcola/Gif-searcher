import "./App.css";
import React, { useState, useEffect } from "react";
import getGifs from "./getGifs";
import SearchResult from "./components/SearchResult";
import { Link, Route, useLocation } from "wouter";
import ListOfGifs from "./components/ListOfGifs";

const POPULAR_GIFS = [" Diego", " Ecuador", " Rick", " Morty"];

function App() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  // <..................................
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
  // <..................................

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/gif/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className="App">
      <section className="App-content">
        <h1>hola</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" value={keyword} />
        </form>
        <h3>Ultima busqueda</h3>
        <ListOfGifs gifs={gifs} />
        <ul>
          {POPULAR_GIFS.map((popularGif) => (
            <p key={popularGif}>
              <Link to={`/gif/${popularGif}`}>
                Gifs de
                {popularGif}
              </Link>
            </p>
          ))}
        </ul>

        <Route path="/gif/:keyword" component={SearchResult} />
      </section>
    </div>
  );
}

export default App;
