import React from "react";
import SearchSongAuthor from "./SearchSongAuthor";

const MainMenu = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            Search quotes by person name:
            <br />
            <SearchSongAuthor />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
