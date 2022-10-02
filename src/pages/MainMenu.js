import React from "react";
import SearchSong from "./SearchSong";

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
            <SearchSong />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
