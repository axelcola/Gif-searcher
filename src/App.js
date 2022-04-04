import "./App.css";
import React, { useState } from "react";
import SearchResult from "./components/SearchResult";
import { Route, useLocation } from "wouter";
import { TextField } from "@mui/material";

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
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={keyword}
            id="filled-basic"
            label="Type here"
            variant="filled"
            InputProps={{
              style: { color: "white" },
            }}
          />
        </form>
        <div className="gif-container">
          <Route path="/gif/:keyword" component={SearchResult} />
        </div>
      </section>
    </div>
  );
}

export default App;
