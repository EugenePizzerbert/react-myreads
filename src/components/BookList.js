import React from "react";
import Book from "./Book";
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

const BookList = props => {
  if (props.draggable) {
    return props.connectDragSource(
      <div className="book-container">
        <Book {...props} />
      </div>
    );
  } else {
    return <Book {...props} />;
  }
};

export default DragSource(ItemTypes.BOOK, itemSource, collect)(BookList);
