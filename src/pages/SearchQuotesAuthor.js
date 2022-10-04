import React, { useRef, useState } from "react";
import SearchResults from "../components/SearchResults";
import LoadingSpinner from "../components/LoadingSpinner";

const SearchQuotesAuthor = (props) => {
  const authorInputRef = useRef();
  const [quotes, setQuotes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentInput, setCurrentInput] = useState();

  const addInput = (e) => {
    e.preventDefault();
    const input = authorInputRef.current.value;
    findQuotes(input);
  };

  const findQuotes = async (input) => {
    if (input) {
      setIsLoading(true);
      setHasSearched(true);
      setCurrentInput(input);
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=author`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setQuotes(data.results);
      setIsLoading(false);
    }
  };

  const searchAgain = () => {
    setHasSearched(false);
    setQuotes([]);
  };

  let content = "";

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <>
      {hasSearched ? (
        <>
          <button className="search-again" onClick={searchAgain}>
            Search Again
          </button>
          <br />
          You searched for "{currentInput}"
          <br />
          {content}
          {quotes.map((quote) => {
            return (
              <SearchResults
                content={quote.content}
                author={quote.author}
                length={quote.length}
                tags={quote.tags}
                key={Math.random()}
                setHasSearched={setHasSearched}
                setShowDetails={setShowDetails}
                showDetails={showDetails}
                setFavList={props.setFavList}
                favList={props.favList}
                quote={quote}
              />
            );
          })}
        </>
      ) : (
        <>
          <div>Search quotes by person name:</div>
          <form onSubmit={addInput}>
            <input
              type="text"
              placeholder="Enter name"
              className="input"
              ref={authorInputRef}
              required
            />
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default SearchQuotesAuthor;
