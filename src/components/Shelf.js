import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import SelectShelf from "./SelectShelf";
import { Droppable } from "react-beautiful-dnd";

const Shelf = props => {
  const {
    books,
    shelf,
    shelves,
    onUpdateBookShelf,
    getBooksByShelfCount
  } = props;

  return (
    <Droppable droppableId={shelf.id} direction="horizontal">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDraggingOver ? "blue" : "grey"
          }}
          {...provided.droppableProps}
          className="bookshelf"
        >
          <div className="bookshelf-title-container d-flex align-items-start">
        <h2 className="bookshelf-title">
            {shelf.name}</h2>
            <span className="badge badge-pill badge-success ml-2">
              {getBooksByShelfCount(shelf.id)}
            </span>
          </div>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book, index) => (
                <Book
                  book={book}
                  bookIndex={index}
                  shelves={shelves}
                  key={book.id}
                  onUpdateBookShelf={onUpdateBookShelf}
                />
              ))}
            </ol>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
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

export default Shelf;
