import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "../components/Shelf";

class ListShelf extends Component {
  /**
   * Query to get books by shelf
   * @param query
   * @returns {*}
   */
  getBooksByShelf = query => {
    //first we destructure the books prop from the parent component state
    const { books } = this.props;

    //next we filter the results based on the query param passed to the function & return the queried results
    return books.filter(b => b.shelf === query);
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
                books={this.getBooksByShelf(shelf.id)}
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
