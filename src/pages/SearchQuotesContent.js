import React, { useRef, useState } from "react";
import SearchResults from "../components/SearchResults";
import LoadingSpinner from "../components/LoadingSpinner";

const SearchQuotesContent = () => {
  const contentInputRef = useRef();
  const [quotes, setQuotes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addInput = (e) => {
    e.preventDefault();
    const input = contentInputRef.current.value;
    findQuotes(input);
  };

  const findQuotes = async (input) => {
    if (input) {
      setIsLoading(true);
      setHasSearched(true);
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=content`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setQuotes(data.results);
      setIsLoading(false);
    }
  };

  const searchAgain = () => {
    setHasSearched(false);
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
          {content}
          {quotes.map((quote) => {
            return (
              <SearchResults
                content={quote.content}
                author={quote.author}
                length={quote.length}
                tag={quote.tag}
                key={Math.random()}
                setHasSearched={setHasSearched}
                setShowDetails={setShowDetails}
                showDetails={showDetails}
              />
            );
          })}
        </>
      ) : (
        <>
          <div>Search quote contents using specific keywords:</div>
          <form onSubmit={addInput}>
            <input
              type="text"
              placeholder="Enter keyword"
              className="input"
              ref={contentInputRef}
              required
            />
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default SearchQuotesContent;
