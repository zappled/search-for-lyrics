import React, { useState } from "react";

const SearchResults = (props) => {
  // toggles whether expanded box appears
  const [details, setDetails] = useState(false);

  // adds selected entry to favourites list
  const addToFav = (newItem) => {
    props.setFavList((prevState) => [...prevState, newItem]);
    props.setFavIndicate("block");
    setTimeout(() => {
      props.setFavIndicate("none");
    }, 2000);
  };

  return (
    <>
      {/* on click, expands box to show more details */}
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
        <>
          <button className="add-fav" onClick={() => addToFav(props.quote)}>
            <i className="material-icons">favorite</i>Add to Favourites
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResults;
