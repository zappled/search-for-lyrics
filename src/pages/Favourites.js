import React from "react";

const Favourites = (props) => {
  const removeFromFav = (newItem) => {
    props.setFavList((prevState) =>
      prevState.filter((item) => item !== newItem)
    );
  };

  return (
    <>
      <div className="result-container">
        <div className="quote-author">{props.author}</div>
        <div className="quote-content">{props.content}</div>
        <div className="quote-extra">
          Quote length: {props.content.split(" ").length} words, tags:{" "}
          <u>{props.tags?.toString().replace(",", ", ")}</u>
        </div>
        <button
          className="quote-extra remove-fav"
          onClick={() => removeFromFav(props.fav)}
        >
          <i className="material-icons" style={{ margin: "0 auto" }}>
            close
          </i>
          Remove from Favourites
        </button>
      </div>
    </>
  );
};

export default Favourites;
