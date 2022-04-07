import "./App.css";
import React, { useState } from "react";
import SearchResult from "./components/SearchResult";
import { Route, useLocation } from "wouter";
import { TextField } from "@mui/material";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

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
        <h1>Gif searcher</h1>
        <p>Type your keyword and press Enter</p>
        <form className="searcher" onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={keyword}
            id="filled-basic"
            label="Type here"
            variant="filled"
          />
        </form>
        <div className="gif-container">
          <GifsContextProvider>
            <Route path="/gif/:keyword" component={SearchResult} />
            <Route path="/Gif-searcher" component={SearchResult} />
            <Route component={Detail} path="/singlegif/:id" />
          </GifsContextProvider>
        </div>
      </section>
    </div>
  );
}

export default App;
