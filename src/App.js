import React, { useState, useEffect } from "react";
import styles from "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import SearchByContent from "./pages/SearchByContent";
import Favourites from "./pages/Favourites";
import RandomQuote from "./pages/RandomQuote";
import SearchByAuthor from "./pages/SearchByAuthor";
import CreateQuote from "./pages/CreateQuote";

function App() {
  const [favList, setFavList] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const sortArray = (type) => {
      const property = type;
      const sortList = [...favList];
      if (property === "author" || property === "tags") {
        sortList.sort((a, b) =>
          a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0
        );
      } else if (property === "length") {
        sortList.sort((a, b) =>
          b.content.split(" ").length > a.content.split(" ").length
            ? 1
            : a.content.split(" ").length > b.content.split(" ").length
            ? -1
            : 0
        );
      }
      setFavList(sortList);
    };

    sortArray(sortType);
  }, [sortType]);

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
      </nav>

      <Switch>
        <Route exact path="/">
          <SearchByAuthor setFavList={setFavList} favList={favList} />
        </Route>
        <Route exact path="/search-content">
          <SearchByContent setFavList={setFavList} favList={favList} />
        </Route>

        <Route exact path="/random">
          <div className="container text-center">
            <div className="row">
              <div className="col"></div>
              <div className="col-5">
                <RandomQuote favList={favList} setFavList={setFavList} />
              </div>
              <div className="col"></div>
            </div>
          </div>
        </Route>
        <Route exact path="/create-quote">
          <CreateQuote favList={favList} setFavList={setFavList} />
        </Route>
        <Route exact path="/favourites">
          <div className="container text-center">
            <div className="row">
              <div className="col"></div>
              <div className="col-5">
                <br />
                <div>Need a reference? View your favourite quotes here:</div>

                {favList.length !== 0 ? (
                  <>
                    <div className="quote-extra">
                      <br />
                      <select
                        style={{ marginLeft: "5px", marginBottom: "7px" }}
                        onChange={(e) => setSortType(e.target.value)}
                      >
                        <option>Sort favourites by...</option>
                        <option value="author">Author</option>
                        <option value="length">Length</option>
                        <option value="tags">Tags</option>
                      </select>
                    </div>
                    {favList.map((fav) => {
                      return (
                        <Favourites
                          content={fav.content}
                          author={fav.author}
                          length={fav.length}
                          tags={fav.tags}
                          key={Math.random()}
                          favList={favList}
                          setFavList={setFavList}
                          fav={fav}
                        />
                      );
                    })}
                  </>
                ) : (
                  <>
                    <br />
                    <div className="fav-empty">
                      <i>Add a favourite to start viewing your list</i>
                    </div>
                  </>
                )}
              </div>
              <div className="col"></div>
            </div>
          </div>
        </Route>
      </Switch>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-bottom">
        <div className="navbar-nav footer-to-center">
          <div className="navbar-brand">
            <a
              className="nav-input footer-text"
              href="https://github.com/zappled/search-for-quotes"
              target="_blank"
            >
              View Project on Github
            </a>{" "}
            <a
              className="nav-input footer-text"
              href="https://github.com/lukePeavey/quotable"
              target="_blank"
            >
              Powered by Quotable API
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
