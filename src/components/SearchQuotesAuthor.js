import React, { useRef, useState } from "react";
import SearchResults from "./SearchResults";
import LoadingSpinner from "./LoadingSpinner";

const SearchQuotesAuthor = (props) => {
  // sets input used when fetching data from API
  const inputRef = useRef();
  const [quotes, setQuotes] = useState([]);

  // toggles collapsible box content
  const [showDetails, setShowDetails] = useState(false);

  // shows input string on results page
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
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=author`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.totalCount !== 0) {
        setQuotes(data.results);
        setHasData(true);
      } else if (data.totalCount == 0) {
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

  // loading spinner only appears while isLoading is true
  let content = "";

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
          ""
        )
      ) : (
        <>
          <div>
            Search quotes by person name. For exact match, wrap your search
            query in quotation marks (" "):
          </div>
          <form onSubmit={addInput}>
            <input
              type="text"
              placeholder="Enter name"
              className="input"
              ref={inputRef}
              required
            />
            <button className="submit">Submit</button>
          </form>
        </>
      )}
      {hasSearched && noData ? (
        <>
          <button className="search-again" onClick={searchAgain}>
            Search Again
          </button>
          <div className="quote-extra">
            No result returned, try another name
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchQuotesAuthor;
