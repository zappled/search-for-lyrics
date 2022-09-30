import React from "react";

const SearchSong = () => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter lyrics or song/singer name"
          className="input"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default SearchSong;
