import React, { Component } from "react";
import * as BooksAPI from "./api/BooksAPI";
import ListShelf from "./modules/ListShelf";
import SearchOverlay from "./modules/SearchOverlay";
import SearchButton from "./components/SearchButton";
import { Route } from "react-router-dom";

class MyReadsContainer extends Component {
  /**
   * State property
   * @type {{books: array}}
   * @type {{shelves: array}}
   */
  state = {
    books: [],
    shelves: [
      { name: "Currently Reading", id: "currentlyReading" },
      { name: "Want to Read", id: "wantToRead" },
      { name: "Read", id: "read" }
    ]
  };

  /**
   * Get all books
   * @returns {array} All books objects from BooksAPI
   */
  componentDidMount() {
    this.getAllBooks();
  }

  /**
   * Get all books from api
   */
  getAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  };

  render() {
    //destructure the books object
    const { books, shelves } = this.state;

    return (
      <div className="my-reads-container">
        <Route path="/search" render={() => <SearchOverlay books={books} />} />
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <ListShelf books={books} shelves={shelves} />
              <SearchButton />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default MyReadsContainer;
