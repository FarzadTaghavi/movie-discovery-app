import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchMode, setSearchMode] = useState("idle");
  const [movies, setMovies] = useState([]);

  const search = async () => {
    const queryParam = encodeURIComponent(searchText);

    setSearchMode("searching");

    const data = await axios.get(
      `https://omdbapi.com/?apikey=e52a9138&s=${queryParam}`
    );

    console.log("Success!", data);

    setSearchMode("done");

    setMovies(data.data.Search);

    console.log(data.data.Search);

    console.log("Start searching for:", searchText);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <div>{searchMode}</div>
      <p>
        <input
          type="text"
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <h1>
                {movie.Title} ({movie.Year})
              </h1>
              <img alt={movie.Title} src={movie.Poster} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
