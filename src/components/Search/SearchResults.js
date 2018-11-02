import React from "react";
import Book from "../Book";

const SearchResults = props => {
  const { books, shelves, onUpdateBookShelf } = props;
  return (
    <div className="search-books-results">
      <div className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            shelves={shelves}
            key={book.id}
            onUpdateBookShelf={onUpdateBookShelf}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
