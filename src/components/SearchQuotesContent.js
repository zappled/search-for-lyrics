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
  const [hasData, setHasData] = useState(false);
  const [noData, setNoData] = useState(false);

  // function to fetch API data based on submitted input
  const findQuotes = async (input) => {
    if (input) {
      props.setIsLoading(true);
      setHasSearched(true);
      setCurrentInput(input);
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=content`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.totalCount !== 0) {
        setQuotes(data.results);
        setHasData(true);
      } else if (data.totalCount === 0) {
        setNoData(true);
      }
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
    setHasData(false);
    setNoData(false);
  };

  let content = "";

  // loading spinner only appears while isLoading is true
  if (props.isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <>
      {content}
      {/* display toggles depending on whether a search input has been submitted */}
      {hasSearched ? (
        hasData ? (
          <>
            <button className="search-again" onClick={searchAgain}>
              Search Again
            </button>
            <br />
            You searched for "{currentInput.replaceAll(`"`, ``)}"
            <br />
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
                  favIndicate={props.favIndicate}
                  setFavIndicate={props.setFavIndicate}
                />
              );
            })}
          </>
        ) : (
          ""
        )
      ) : (
        // input form appears by default (hasSearched state is false)
        <>
          <div>
            Search quote contents using specific keywords. For exact match, wrap
            your search query in quotation marks (" "):
          </div>
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
      {hasSearched && noData ? (
        // returns error page if hasSearched has triggered but no result is returned from API
        <>
          <button className="search-again" onClick={searchAgain}>
            Search Again
          </button>
          <div className="quote-extra">
            No result returned, try another keyword. Certain common words like '
            <u>and</u>' may not be accepted as part of the search parameters.
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchQuotesContent;
