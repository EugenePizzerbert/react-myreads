import React from "react";
import BookList from "../BookList";
import Book2 from "../Book2";

//When using the connectDragSource wrapper, the state of the book isn't updating when using the shelfSelect input on the search results view.  But without the react-dnd connectDragSource wrapper, it works fine.  For testing purposes, replace the BookList component with Book2 to replicate & test this.  Not sure why this issue is occuring?


const SearchResults = props => {
  const { books, shelves, onUpdateBookShelf } = props;
  return (
    <div className="search-books-results">
      <div className="books-grid">
        {books.map(book => (
          <BookList
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
