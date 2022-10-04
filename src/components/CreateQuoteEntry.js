import React from "react";

const CreateQuoteEntry = (props) => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col-5">
            <br />
            <button className="add-fav" onClick={props.createAgain}>
              Create Another Quote
            </button>
            <div className="result-container">
              <div className="quote-author">{props.nameInput}:</div>
              <div className="quote-content">"{props.quoteInput}"</div>

              <div className="quote-extra">
                Quote length: <b>{props.quoteInput.split(" ").length} words</b>,
                tags:{" "}
                <b>
                  <u>{props.tagInput}</u>
                </b>
              </div>
            </div>
            <button
              className="add-fav"
              onClick={() => props.addToFav(props.quote)}
            >
              <i className="material-icons">favorite</i>Add to Favourites
            </button>
          </div>

          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default CreateQuoteEntry;
