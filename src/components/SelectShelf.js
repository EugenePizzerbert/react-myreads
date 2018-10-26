import React, { Component } from "react";
import PropTypes from "prop-types";

class SelectShelf extends Component {
  /**
   * Handles the shelf select event
   * @param event
   * @return {*}
   */
  handleSelectShelf = event => {
    const { onUpdateBookShelf } = this.props;
    return onUpdateBookShelf(event.target.value);
  };

  render() {
    const { book, shelves } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={this.handleSelectShelf}>
          {shelves.map(shelf => (
            <option key={shelf.id} value={shelf.id}>
              {shelf.name}
            </option>
          ))}
          <option value="none">None</option>
        </select>
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

export default SelectShelf;
