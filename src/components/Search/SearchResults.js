import React from "react";
import Book from "../Book";

const SearchResults = props => {
  const { books, shelves, onUpdateBookShelf } = props;
  return (
    <div className="search-books-results">
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
  );
};

export default SearchResults;
