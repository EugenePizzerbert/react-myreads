import React from "react";
import { Link } from "react-router-dom";

const SearchError = props => {
  return (
    <div className="error-container mt-3 mb-2">
      <div className="alert alert-warning text-center">
        <h4 className="alert-heading">Well that didn't work very well...</h4>
        <p className="alert-warning">
          <span className="font-weight-bold">Error Message: </span>
          {props.errorMessage}
        </p>
        <p>
          Make sure you're using the appropriate search terms when attempting to
          search our api
        </p>
        <hr />
        <ul className="list-group list-group-flush flex-wrap flex-row justify-content-between">
          {props.searchTerms.map(term => (
            <li
              key={term}
              className="list-group-item list-group-item-warning d-flex justify-content-between align-items-center"
            >
              <Link to="/" className="alert-link">
                {term}
              </Link>
              <span className="badge badge-warning badge-pill ml-1">0</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchError;
