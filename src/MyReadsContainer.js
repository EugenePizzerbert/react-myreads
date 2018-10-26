import React, { Component } from "react";
import { update, getAll } from "./api/BooksAPI";
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
   * Fires when the component is mounted
   * @returns {array} All books objects from BooksAPI
   */
  componentDidMount() {
    this.getAllBooks();
  }

  /**
   * Get all books from api
   */
  getAllBooks = () => {
    getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  };

  /**
   * Query to get books by shelf
   * @param query
   * @returns {*}
   */
  getBooksByShelf = query => {
    //first we destructure the books from the component state
    const { books } = this.state;

    //next we filter the results based on the query param passed to the function & return the queried results
    return books.filter(book => book.shelf === query);
  };

  /**
   * Update book object
   * @description variadic function
   * @param params
   */
  updateBook = (...params) => {
    //destructure the rest params
    let [book, shelfId] = params;

    //update book shelf
    this.updateBookShelf(book, shelfId);
  };

  /**
   * Updates shelf parameter in the book object
   * @param book
   * @param shelfId
   */
  updateBookShelf = (book, shelfId) => {
    //first we update the book via the api
    update(book, shelfId).then(data => {
      // then we set the shelf for the updated book
      book.shelf = shelfId;
      // then we update state with the updated book
      this.updateBookState(book);
    });
  };

  /**
   * Updates book state
   * @param book
   */
  updateBookState = book => {
    this.setState(prevState => ({
      books: prevState.books
        // now we remove the old data from the updated book from the array
        .filter(b => b.id !== book.id)
        // and append the updated book to the books array
        .concat(book)
    }));
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
              <ListShelf
                books={books}
                shelves={shelves}
                getBooksByShelf={this.getBooksByShelf}
                onUpdateBookShelf={this.updateBook}
              />
              <SearchButton />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default MyReadsContainer;
