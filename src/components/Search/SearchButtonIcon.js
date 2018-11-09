import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchButtonIcon = () => {
  return (
    <div className="brk-search brk-header_border-bottom-20 brk-header__item">
      <div className="brk-search__open">
        <FontAwesomeIcon icon={["fas", "search"]} aria-hidden="true" />
        <div className="brk-search__title">Search website</div>
      </div>
      <div className="brk-search__block">
        <div className="brk-search__header">
          <span className="font__family-montserrat font__weight-bold font__size-18">
            Search
          </span>
        </div>
        <form className="brk-search__form">
          <input
            name="s"
            maxLength="50"
            type="search"
            placeholder="Enter search text"
          />
          <button type="submit">
            <FontAwesomeIcon icon={["fas", "search"]} />
          </button>
        </form>
        <span className="brk-search__close font__family-montserrat font__weight-medium">
          Close <FontAwesomeIcon icon={["fas", "times"]} />
        </span>
      </div>
    </div>
  );
};

export default SearchButtonIcon;
