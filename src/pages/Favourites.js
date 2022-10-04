import React from "react";
import FavouritesEntry from "../components/FavouritesEntry";

const Favourites = (props) => {
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
