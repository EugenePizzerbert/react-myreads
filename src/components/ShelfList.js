import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

const ShelfList = props => {
  const { shelves, onUpdateBookShelf, getBooksByShelf } = props;

  return (
    <React.Fragment>
      {shelves.map(shelf => (
        <div className="list-books" key={shelf.id}>
          <div className="list-books-content">
            <Shelf
              shelf={shelf}
              shelves={shelves}
              books={getBooksByShelf(shelf.id)}
              onUpdateBookShelf={onUpdateBookShelf}
            />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

/**
 * Prop Types Declaration
 * @type {{shelves: (*|shim), getBooksByShelf: (*|shim), onUpdateBookShelf: (*|shim)}}
 */
ShelfList.propTypes = {
  shelves: PropTypes.array.isRequired,
  getBooksByShelf: PropTypes.func.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default ShelfList;
