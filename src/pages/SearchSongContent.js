import React, { useRef, useState } from "react";
import SearchResults from "../components/SearchResults";
import LoadingSpinner from "../components/LoadingSpinner";

const SearchSongContent = () => {
  const contentInputRef = useRef();
  const [songs, setSongs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addInput = (e) => {
    e.preventDefault();
    const input = contentInputRef.current.value;
    findSongs(input);
  };

  const findSongs = async (input) => {
    if (input) {
      setIsLoading(true);
      setHasSearched(true);
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=content`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setSongs(data.results);
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
          {songs.map((song) => {
            return (
              <SearchResults
                content={song.content}
                author={song.author}
                length={song.length}
                tag={song.tag}
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

export default SearchSongContent;
