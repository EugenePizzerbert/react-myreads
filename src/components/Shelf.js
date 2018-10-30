import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import SelectShelf from "./SelectShelf";

const Shelf = props => {
  const { books, shelf, shelves, onUpdateBookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
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
