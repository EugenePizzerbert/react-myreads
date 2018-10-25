import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { books, shelf, shelves } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book book={book} shelves={shelves} key={book.id} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
