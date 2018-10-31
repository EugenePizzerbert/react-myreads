import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import SelectShelf from "./SelectShelf";

const Shelf = props => {
  const {
    books,
    shelf,
    shelves,
    onUpdateBookShelf,
    getBooksByShelfCount
  } = props;

  return (
    <div className="bookshelf">
      <div className="bookshelf-title-container d-flex align-items-start">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <span className="badge badge-pill badge-success ml-2">
          {getBooksByShelfCount(shelf.id)}
        </span>
      </div>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book
              book={book}
              shelves={shelves}
              key={book.id}
              onUpdateBookShelf={onUpdateBookShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

/**
 * Prop Types Declaration
 * @type {{book: (*|shim), shelves: (*|shim), onUpdateBookShelf: (*|shim)}}
 */
SelectShelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default Shelf;
