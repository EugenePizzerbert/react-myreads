import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "../components/Shelf";

class ListShelf extends Component {
  /**
   * Handles getting the books by shelf id
   * @param shelfId
   * @return {*}
   */
  handleGetBooksByShelf = shelfId => {
    return this.props.getBooksByShelf(shelfId);
  };

  render() {
    const { shelves } = this.props;

    return (
      <React.Fragment>
        {shelves.map(shelf => (
          <div className="list-books" key={shelf.id}>
            <div className="list-books-content">
              <Shelf
                shelf={shelf}
                shelves={shelves}
                books={this.handleGetBooksByShelf(shelf.id)}
              />
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

ListShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired
};

export default ListShelf;
