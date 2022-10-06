import React, { useState, useEffect } from "react";
import styles from "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import SearchByContent from "./pages/SearchByContent";
import RandomQuote from "./pages/RandomQuote";
import SearchByAuthor from "./pages/SearchByAuthor";
import CreateQuote from "./pages/CreateQuote";
import useLocalStorage from "./useLocalStorage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  // favList state is propped down to generate favourites list
  const [favList, setFavList] = useLocalStorage("favList", "");

  // displays loading spinner when state is true
  const [isLoading, setIsLoading] = useState(false);

  // adds fav list entries to localStorage
  useEffect(() => {
    localStorage.setItem("favList", JSON.stringify(favList));
  }, [favList]);

  const [favIndicate, setFavIndicate] = useState("none");

  return (
    // navigation bar
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
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
          <Link to="random" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">question_mark</i>
              Random Quote
            </div>
          </Link>
          <Link to="create-quote" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">sms</i>
              Create A Quote
            </div>
          </Link>
          <Link to="favourites" className="nav-link">
            <div className="nav-input">
              <i className="material-icons">favorite</i>
              Favourites
            </div>
          </Link>
        </div>
        <span className="navbar-text" style={{ display: favIndicate }}>
          <i
            className="material-icons"
            style={{
              fontSize: "150%",
              paddingRight: "0px",
            }}
          >
            arrow_left
          </i>
          Added to Favourites
        </span>
      </nav>

      <Switch>
        <Route exact path="/">
          <SearchByAuthor
            setFavList={setFavList}
            favList={favList}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            favIndicate={favIndicate}
            setFavIndicate={setFavIndicate}
          />
        </Route>
        <Route exact path="/search-content">
          <SearchByContent
            setFavList={setFavList}
            favList={favList}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            favIndicate={favIndicate}
            setFavIndicate={setFavIndicate}
          />
        </Route>

        <Route exact path="/random">
          <div className="container text-center">
            <div className="row">
              <div className="col"></div>
              <div className="col-5">
                <RandomQuote
                  favList={favList}
                  setFavList={setFavList}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  favIndicate={favIndicate}
                  setFavIndicate={setFavIndicate}
                />
              </div>
              <div className="col"></div>
            </div>
          </div>
        </Route>
        <Route exact path="/create-quote">
          <CreateQuote
            favList={favList}
            setFavList={setFavList}
            favIndicate={favIndicate}
            setFavIndicate={setFavIndicate}
          />
        </Route>
        <Route exact path="/favourites">
          <FavouritesPage favList={favList} setFavList={setFavList} />
        </Route>
      </Switch>

      {/*  footer  */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-bottom">
        <div className="container-fluid">
          <div className="navbar-brand">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/zappled/search-for-quotes"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project on Github
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/lukePeavey/quotable"
                  target="_blank"
                  rel="noreferrer"
                >
                  Powered by Quotable API
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://icons8.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Favicon: icons8.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
