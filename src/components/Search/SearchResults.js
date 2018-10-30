import { Component } from "react";
import React from "react";
import Book from "../Book";

class SearchResults extends Component {
  render() {
    const { books, shelves, onUpdateBookShelf } = this.props;
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
  }
}

export default SearchResults;
