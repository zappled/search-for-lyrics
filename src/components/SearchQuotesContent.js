import React, { useRef, useState } from "react";
import SearchResults from "./SearchResults";
import LoadingSpinner from "./LoadingSpinner";

const SearchQuotesContent = (props) => {
  // sets input used when fetching data from API
  const inputRef = useRef();
  const [quotes, setQuotes] = useState([]);

  // toggles collapsible box content
  const [showDetails, setShowDetails] = useState(false);

  const [currentInput, setCurrentInput] = useState();

  // toggles between input form & search results
  const [hasSearched, setHasSearched] = useState(false);

  // function to fetch API data based on submitted input
  const findQuotes = async (input) => {
    if (input) {
      props.setIsLoading(true);
      setHasSearched(true);
      setCurrentInput(input);
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=content`;
      const res = await fetch(url);
      const data = await res.json();
      setQuotes(data.results);
      props.setIsLoading(false);
    }
  };

  // passes input to API fetch function
  const addInput = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    findQuotes(input);
  };

  // toggles back to input form
  // empties previous search results array
  const searchAgain = () => {
    setHasSearched(false);
    setQuotes([]);
  };

  let content = "";

  // loading spinner only appears while isLoading is true
  if (props.isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <>
      {/* display toggles depending on whether a search input has been submitted */}
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
          <div>Search quote contents using specific keywords:</div>
          <form onSubmit={addInput}>
            <input
              type="text"
              placeholder="Enter keyword"
              className="input"
              ref={inputRef}
              required
            />
            <button className="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default SearchQuotesContent;
