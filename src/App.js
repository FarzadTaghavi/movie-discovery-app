import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Discover from "./pages/Discover";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  /* const apiKey = "e52a9138"; */

  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <Switch>
        <Route path="/discover" component={Discover} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
