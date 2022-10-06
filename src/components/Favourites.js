import React from "react";
import FavouritesEntry from "./FavouritesEntry";

const Favourites = (props) => {
  // removes selected entry from favourites list
  const removeFromFav = (newItem) => {
    props.setFavList((prevState) =>
      prevState.filter((item) => item !== newItem)
    );
  };

  return (
    <>
      <FavouritesEntry
        favList={props.favList}
        setFavList={props.setFavList}
        removeFromFav={removeFromFav}
        fav={props.fav}
        author={props.author}
        content={props.content}
        tags={props.tags}
      />
    </>
  );
};

export default Favourites;
