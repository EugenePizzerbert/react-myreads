import React, { Component } from "react";
import SelectShelf from "./SelectShelf";
import PropTypes from "prop-types";

class Book extends Component {
  /**
   * Update book shelf handler
   * @param shelf
   * @description handles the data for this book and the new shelf it should be assigned to
   */
  handleUpdateBookShelf = shelf => {
    const { book, onUpdateBookShelf } = this.props;
    onUpdateBookShelf(book, shelf);
  };

  render() {
    const { book, shelves } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />
            <SelectShelf
              book={book}
              shelves={shelves}
              onUpdateBookShelf={this.handleUpdateBookShelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
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
