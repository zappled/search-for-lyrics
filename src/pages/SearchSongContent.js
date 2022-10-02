import React, { useRef, useState } from "react";
import SearchResults from "../components/SearchResults";

const SearchSongContent = () => {
  const contentInputRef = useRef();
  const [songs, setSongs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const addInput = (e) => {
    e.preventDefault();
    const input = contentInputRef.current.value;
    findSongs(input);
  };

  const findSongs = async (input) => {
    if (input) {
      setHasSearched(true);
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=content`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setSongs(data.results);
    }
  };

  const searchAgain = () => {
    setHasSearched(false);
  };

  return (
    <>
      {hasSearched ? (
        <>
          <button onClick={searchAgain}>Search Again</button>
          {songs.map((song) => {
            return (
              <SearchResults
                content={song.content}
                author={song.author}
                length={song.length}
                tag={song.tag}
                key={Math.random()}
                setHasSearched={setHasSearched}
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
              placeholder="Search by quote content"
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
