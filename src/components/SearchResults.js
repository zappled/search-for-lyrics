import React, { useState } from "react";

const SearchResults = (props) => {
  // const [extraContent, setExtraContent] = useState("");

  const [details, setDetails] = useState(false);

  const addToFav = (newItem) => {
    props.setFavList((prevState) => [...prevState, newItem]);
    console.log(props.favList);
  };

  return (
    <>
      <div className="result-container" onClick={() => setDetails(!details)}>
        <div className="quote-author">{props.author}:</div>
        <div className="quote-content">"{props.content}"</div>
        {details ? (
          <>
            <div className="quote-extra">
              Quote length: <b>{props.content.split(" ").length} words</b>,
              tags:{" "}
              <b>
                <u>{props.tags?.toString().replace(",", ", ")}</u>
              </b>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {details ? (
        <button className="add-fav" onClick={() => addToFav(props.quote)}>
          <i className="material-icons">favorite</i>Add to Favourites
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResults;

// add 'create own quote' function as stretch goal
