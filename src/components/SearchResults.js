import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import SongDetails from "./SongDetails";

const SearchResults = (props) => {
  const history = useHistory();
  const showDetails = () => {
    history.push("/details");
    <SongDetails author={props.author} content={props.content} />;
  };
  return (
    <>
      <button className="result-container" onClick={showDetails}>
        <div className="quote-author">{props.author}:</div>
        <div>{props.content}</div>
      </button>
    </>
  );
};

export default SearchResults;
