import React, { Component } from "react";
import SelectShelf from "./SelectShelf";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import { ItemTypes } from "../api/Helpers";

/**
 * Implements the drag source contract.
 * @author http://react-dnd.github.io/react-dnd/
 * @package react-dnd
 */
const itemSource = {
  beginDrag(props) {
    return {
      book: props.book
    };
  }
};

/**
 * Specifies the props to inject into your component.
 * @param connect
 * @param monitor
 * @return {{connectDragSource: ConnectDragSource, isDragging: boolean}}
 * @author http://react-dnd.github.io/react-dnd/
 * @package react-dnd
 */
const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

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
    const { book, shelves, connectDragSource } = this.props;
    const authors = book.authors ? book.authors.join(", ") : "Unknown";

    return connectDragSource(
      <div className="book-container">
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

export default DragSource(ItemTypes.BOOK, itemSource, collect)(Book);
