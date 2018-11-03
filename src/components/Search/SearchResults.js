import React from "react";
import Book from "../Book";

// todo: When using the connectDragSource wrapper, the state of the book isn't updating when using the shelfSelect input on the search results view.  But without the react-dnd connectDragSource wrapper, it works fine.  For testing purposes, replace the Book component with BookList to replicate & test this.  Not sure why this issue is occuring?

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
            draggable
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
