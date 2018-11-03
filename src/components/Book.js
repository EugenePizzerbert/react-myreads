import React, { Component } from "react";
import SelectShelf from "./SelectShelf";
import PropTypes from "prop-types";

class Book extends Component {
  /**
   * Update book shelf handler
   * @description handles the data for this book and the new shelf it should be assigned to
   * @param shelfId
   */
  handleUpdateBookShelf = shelfId => {
    const { book, onUpdateBookShelf } = this.props;
    onUpdateBookShelf(book, shelfId);
  };

  render() {
    console.log('bookComponent', this.props);
    const { book, shelves } = this.props;
    const authors = book.authors ? book.authors.join(", ") : "Unknown";

    return (
        <div className="book" style={{ cursor: "pointer" }}>
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                backgroundImage: `url(${
                  book.imageLinks ? book.imageLinks.thumbnail : ""
                })`
              }}
            />
            <SelectShelf
              book={book}
              shelves={shelves}
              onUpdateBookShelf={this.handleUpdateBookShelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
    );
  }
}

/**
 * Prop Types Declaration
 * @type {{book: (*|shim), shelves: (*|shim), onUpdateBookShelf: (*|shim)}}
 */
SelectShelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default Book;
