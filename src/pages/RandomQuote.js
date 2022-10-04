import { useEffect, useState } from "react";
import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const RandomQuote = (props) => {
  const [quote, setQuote] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      setQuote({
        content: data.content,
        author: data.author,
        tags: data.tags,
      });
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const randomQuote = async () => {
    setIsLoading(true);
    const url = `https://api.quotable.io/random`;
    const res = await fetch(url);
    const data = await res.json();
    setQuote({
      content: data.content,
      author: data.author,
      tags: data.tags,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const url = `https://api.quotable.io/random`;
    fetchQuote(url);
  }, []);

  let content = "";

  if (quote) {
    content = (
      <>
        <div className="result-container">
          <div className="quote-author">{quote.author}:</div>
          <div className="quote-content">"{quote.content}"</div>

          <div className="quote-extra">
            Quote length: <b>{quote.content?.split(" ").length} words</b>, tags:{" "}
            <b>
              <u>{quote.tags?.toString().replace(",", ", ")}</u>
            </b>
          </div>
        </div>
        <button className="add-fav" onClick={() => addToFav(quote)}>
          <i className="material-icons">favorite</i>Add to Favourites
        </button>
      </>
    );
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  const addToFav = (newItem) => {
    props.setFavList((prevState) => [...prevState, newItem]);
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5"></div>
          <br />
          <p>Be inspired by our selection of random quotes!</p>
          <button
            className="search-again"
            style={{
              width: "150px",
              display: "block",
              margin: "0 auto",
              marginBottom: "6px",
            }}
            onClick={randomQuote}
          >
            Find Another Quote
          </button>

          {content}
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default RandomQuote;
