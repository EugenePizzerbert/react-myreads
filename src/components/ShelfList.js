import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

const ShelfList = props => {
  const {
    shelves,
    onUpdateBookShelf,
    getBooksByShelf,
    getBooksByShelfCount
  } = props;

  return (
    <div className="row">
      <div className="col-12">
        {shelves.map(shelf => (
          <div className="row list-books" key={shelf.id}>
            <div className="col-12">
              <div className="list-books-content">
                <Shelf
                  shelf={shelf}
                  shelves={shelves}
                  books={getBooksByShelf(shelf.id)}
                  onUpdateBookShelf={onUpdateBookShelf}
                  getBooksByShelfCount={getBooksByShelfCount}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
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
