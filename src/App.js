import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Discover from "./pages/Discover";
import NavBar from "./Components/NavBar";
import MoviePage from "./Components/MoviePage";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/discover/:searchtext?" component={Discover} />
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
