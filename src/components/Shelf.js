import React from "react";
import PropTypes from "prop-types";
import SelectShelf from "./SelectShelf";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../api/Helpers";
import BookList from "./BookList";

/**
 * Implements the drop target contract.
 * @author http://react-dnd.github.io/react-dnd/
 * @package react-dnd
 */
const itemTarget = {
  drop(props, monitor) {
    // Obtain the dragged item
    const item = monitor.getItem();
    //update the bookshelf
    props.onUpdateBookShelf(item.book, props.shelf.id);
  }
};

/**
 * Specifies the props to inject into your component.
 * @param connect
 * @param monitor
 * @return {{connectDropTarget: ConnectDropTarget, isOver: boolean}}
 * @author http://react-dnd.github.io/react-dnd/
 * @package react-dnd
 */
const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

const Shelf = props => {
  const {
    books,
    shelf,
    shelves,
    onUpdateBookShelf,
    getBooksByShelfCount,
    connectDropTarget,
    isOver
  } = props;

  //Dynamic shelf css classes
  let shelfClass = "bookshelf";
  if (isOver) {
    shelfClass = "bookshelf-highlight";
  }
  return connectDropTarget(
    <div className={shelfClass}>
      <div className="bookshelf-title-container d-flex align-items-start">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <span className="badge badge-pill badge-success ml-2">
          {getBooksByShelfCount(shelf.id)}
        </span>
      </div>
      <div className="bookshelf-books">
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
    </div>
  );
};

/**
 * Prop Types Declaration
 * @type {{book: (*|shim), shelves: (*|shim), onUpdateBookShelf: (*|shim)}}
 */
SelectShelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default DropTarget(ItemTypes.BOOK, itemTarget, collect)(Shelf);
