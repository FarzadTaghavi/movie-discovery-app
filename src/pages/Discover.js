import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState(""); // used to store the users input(searcterm) in the state
  const [movies, setMovies] = useState([]); // used to store the fetched movie data from the API request
  const params = useParams(); // gets the parameters in the URL page/:param
  const history = useHistory(); // used to push the user to the detailspage after search is complete
  console.log("What is the URL param", params); // textToSearch: will return undefined on page load
  console.log("history", history); // history: will return /discover as current page

  useEffect(() => {
    // we only want this function to run once when the user performs a search
    console.log("useEffect 1st run"); // making sure the function gets run on pageload as it should
    const doSearch = async () => {
      // doSearch is used to fetch data from the API
      const queryParam = encodeURIComponent(params.textToSearch); // this will be undefined (eg .com/discover/undefined) on first page load but will hold a value (searchterm) after a search action
      const response = await axios.get(
        // this simply runs the API call
        `http://www.omdbapi.com/?i=tt3896198&apikey=f0d0fe5&s=${queryParam}` //${queryParam is the encoded searchterm}
      );
      console.log("What Did The API Fetch?", response.data); // lets see what our data looks like
      setMovies(response.data.Search); // after a closer look we find the specific data inside the Search field and set the state
    };
    if (params.textToSearch) {
      // without this the function will show Undefined movie results
      doSearch();
    }
  }, [params.textToSearch]); // This is the useEffect listener or 2nd argument. It only runs if it detects an event. In this case a new search action.

  const setSearchUrl = async (e) => {
    // the function that pushed the searched term to the URL
    e.preventDefault(); // prevent the entire page from loading
    const parsedTerm = encodeURIComponent(searchTerm); // this const holds the encoded searchterm that was pushed to state after the search action
    history.push(`/discover/${parsedTerm}`); // gets the parsed term (searchterm of user) and adds it to the URL (eg .com/discover/searchterm)
    console.log("history after search", history); // lets check if the search path is set correctly after the search term
  };

  return (
    <div>
      <form onSubmit={setSearchUrl}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button type="submit">Search</button>
        {movies.map((m) => (
          <div key={m.imdbID}>
            <h2>{m.Title}</h2>
            <img alt={m.Description} src={m.Poster} />
            <p>
              <Link to={`/details/${m.imdbID}`}>See Details</Link>
            </p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Discover;
