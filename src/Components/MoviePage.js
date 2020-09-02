import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const [movieData, set_movieData] = useState({});

  const route_parameters = useParams();
  console.log("MOVIE ID:", route_parameters);

  useEffect(() => {
    async function fetchData(imdbID) {
      const res = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=e52a9138&s`
      );
      console.log("FETCHED MOVIE:", res.data);
      set_movieData(res.data);
    }
    fetchData(route_parameters.imdb_id);
  }, [route_parameters.imdb_id]);

  return (
    <div>
      <h1>Movie details</h1>
      <div>
        <h3>{movieData.Title}</h3>
        <img src={movieData.Poster} alt={movieData.Title} />
        <p>Actos: {movieData.Actors}</p>
        <p>Director: {movieData.Director}</p>
        <p>Genre: {movieData.Genre}</p>
        <p>Rating: {movieData.imdbRating}</p>
        <p>Plot: {movieData.Plot}</p>
      </div>
    </div>
  );
}
