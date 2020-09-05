import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/HomePage";
import Discover from "./pages/Discover";
import NavBar from "./Components/NavBar";
import DetailsPage from "./Components/DetailsPage";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <Switch>
        <Route path="/discover/:textToSearch?" component={Discover} />
        <Route path="/details/:movieId" component={DetailsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
