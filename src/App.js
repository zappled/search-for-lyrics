import React from "react";
import MainMenu from "./components/MainMenu";
import styles from "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import SearchSong from "./components/SearchSong";
import Favourites from "./components/Favourites";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-nav">
          <Link to="/" className="navbar-brand">
            Search for Lyrics
          </Link>
          <Link to="/search-song" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">search</i>
              Find Song
            </div>
          </Link>
          <Link to="favourites" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">favorite</i>
              Favourites
            </div>
          </Link>
          <Link to="trending" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">bolt</i>
              Trending
            </div>
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <MainMenu />
        </Route>
        <Route exact path="/search-song">
          <SearchSong />
        </Route>
        <Route exact path="/favourites">
          <Favourites />
        </Route>
        <Route exact path="/trending">
          <Trending />
        </Route>
      </Switch>
    </>
  );
}

export default App;
