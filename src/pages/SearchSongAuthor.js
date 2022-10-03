import React, { useRef, useState } from "react";
import SearchResults from "../components/SearchResults";
import LoadingSpinner from "../components/LoadingSpinner";

const SearchSongAuthor = () => {
  const authorInputRef = useRef();
  const [songs, setSongs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addInput = (e) => {
    e.preventDefault();
    const input = authorInputRef.current.value;
    findSongs(input);
  };

  const findSongs = async (input) => {
    if (input) {
      setIsLoading(true);
      setHasSearched(true);
      // const url = `https://api.musixmatch.com/ws/1.1/?apikey=${key}?q=${input}`;
      // const url = `http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=${input}`;
      // const url = `https://api.quotable.io/random`;
      // const url = `https://api.quotable.io/search/quotes?query=${input}`;
      const url = `https://api.quotable.io/search/quotes?query=${input}&fields=author`;
      // const url = `https://api.ksoft.si/lyrics/search?q=${input}`;
      // const url = `https://api.genius.com/search?q=Kendrick%20Lamar`;
      // const url = `https://api.lyrics.ovh/v1/suggest/${input}`;
      // const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay`;
      // const url = `https://theaudiodb.com/api/v1/json/2/track.php?h=32793500`;
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
                tags={song.tags}
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

export default SearchSongAuthor;
