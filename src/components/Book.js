import React, { Component } from "react";
import SelectShelf from "./SelectShelf";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

class Book extends Component {
  /**
   * Update book shelf handler
   * @description handles the data for this book and the new shelf it should be assigned to
   * @param shelfId
   */
  handleUpdateBookShelf = shelfId => {
    const { book, onUpdateBookShelf } = this.props;
    onUpdateBookShelf(book, shelfId);
    this.setUpdateNotification(shelfId);
  };

  /**
   * Update notification
   * @param shelfId
   */
  setUpdateNotification = shelfId => {
    const updatedShelf = this.props.shelves.find(s => s.id === shelfId);
    toast.success(`Book moved to ${updatedShelf.name}`, {
      className: "alert alert-success",
      progressClassName: "bg-success",
      autoClose: 15000
    });
  };

  render() {
    const { book, shelves } = this.props;
    const authors = book.authors ? book.authors.join(", ") : "Unknown";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
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
