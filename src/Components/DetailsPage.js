import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DetailsPage = () => {
  const [movie, setMovie] = useState(null); // the state is set to null
  const params = useParams(); // this simply holds the params in the URL like .com/details/(params)
  console.log(params); // lets check the params first in the URL

  useEffect(() => {
    const getMovieById = async () => {
      // function that runs to get the movie data by id
      const movieId = params.movieId; // this assigns the movieId that we got from the URL to the const movieId
      const response = await axios.get(
        // simple API fetch
        `http://www.omdbapi.com/?apikey=f0d0fe5&i=${movieId}` // here we use the const movieId to get the specific movie data
      );
      console.log(response.data); // lets check if the API fetch works
      setMovie(response.data); // It worked! lets add the fetched data to the state
    };
    getMovieById(); // always call the function at the end when using the useEffect hook
  }, [params.movieId]); // this lets the useEffect listen to changes. In this case run everytime the const params changes.

  return (
    <div>
      {movie ? ( // simple ternary operator that checks if there is any movie data, if yes it shows all the information below if not it shows loading
        <div>
          <h2>{movie.Title}</h2>
          <img alt={movie.Description} src={movie.Poster} />
          <h2>{movie.Actors}</h2>
          <h2>{movie.Year}</h2>
          <h2>{movie.Director}</h2>
          <h2>{movie.Genre}</h2>
          <Link to={`/discover/`}>Do another search</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DetailsPage;
