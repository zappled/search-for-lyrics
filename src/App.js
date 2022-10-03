import React from "react";
import MainMenu from "./pages/MainMenu";
import styles from "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import SearchByContent from "./components/SearchByContent";
import Favourites from "./pages/Favourites";
import RandomQuote from "./pages/RandomQuote";
import AppInfo from "./pages/AppInfo";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-nav">
          <div className="navbar-brand">
            <i className="material-icons header-icon">format_quote</i>
            Search for Quotes
            <i className="material-icons header-icon">format_quote</i>
          </div>
          <Link to="/" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">search</i>
              Search by Author
            </div>
          </Link>
          <Link to="search-content" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">search</i>
              Search by Content
            </div>
          </Link>
          <Link to="favourites" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">favorite</i>
              Favourites
            </div>
          </Link>
          <Link to="random" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">question_mark</i>
              Random Quote
            </div>
          </Link>
          <Link to="app-info" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">info</i>
              App Info
            </div>
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <MainMenu />
        </Route>
        <Route exact path="/search-content">
          <SearchByContent />
        </Route>
        <Route exact path="/favourites">
          <Favourites />
        </Route>
        <Route exact path="/random">
          <RandomQuote />
        </Route>
        <Route exact path="/app-info">
          <AppInfo />
        </Route>
      </Switch>
    </>
  );
}

export default App;
