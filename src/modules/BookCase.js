import React, { Component } from "react";
import { update, getAll } from "../api/BooksAPI";
import ShelfList from "../components/ShelfList";
import SearchButton from "../components/Search/SearchButton";
import Search from "./Search";
import { Route } from "react-router-dom";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { toast } from "react-toastify";

class BookCase extends Component {
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
      this.setState({
        books
      });
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
   * Get books count by shelf
   * @param shelfId
   * @return {*}
   */
  getBooksByShelfCount = shelfId => {
    let shelf = this.getShelf(shelfId);
    let count = this.getBooksByShelf(shelf.id).length;
    return count;
  };
  
 /**
  * Get shelf by shelf id
  * @param shelfId
  * @return {*}
  */
  getShelf = shelfId => {
    const { shelves } = this.state;
    return shelves.find(shelf => shelf.id === shelfId);
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

    //update book state
    this.updateBookState(book, shelfId);
  };

  /**
   * Updates shelf parameter in the book object
   * @param book
   * @param shelfId
   */
  updateBookShelf = (book, shelfId) => {
    //first we update the book via the api
    update(book, shelfId).then(() => {
      //display the update notification
      this.showUpdateNotification(shelfId);
    });
  };

  /**
   * Updates book state
   * @param book
   * @param shelf
   */
  updateBookState = (book, shelf) => {
    let books = this.state.books;
    //here we loop through the books and compare the shelves, then update the bookshelf .
    books.map((oldBook, index) => {
      if (oldBook.id === book.id) {
        books[index].shelf = shelf;
      }
    });
    this.setState({ books });
  };

  /**
   * Update notification
   * @param shelfId
   */
  showUpdateNotification = shelfId => {
    const shelf = this.getShelf(shelfId);
    toast.success(
      () => (
        <span>
          Book moved to <span className="alert-link">{shelf.name}</span>
        </span>
      ),
      {
        className: "alert alert-success",
        progressClassName: "bg-success",
        autoClose: 3000
      }
    );
  };

  render() {
    //destructure the books object
    const { books, shelves } = this.state;

    return (
      <main className="container my-reads-container">
        <Route
          exact
          path="/search"
          render={() => (
            <div className="search-overlay-container">
              <Search
                books={books}
                shelves={shelves}
                onUpdateBookShelf={this.updateBook}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-shelf-container my-3">
              <ShelfList
                books={books}
                shelves={shelves}
                getBooksByShelf={this.getBooksByShelf}
                getBooksByShelfCount={this.getBooksByShelfCount}
                onUpdateBookShelf={this.updateBook}
              />
              <SearchButton />
            </div>
          )}
        />
      </main>
    );
  }
}
// export default BookCase;
export default DragDropContext(HTML5Backend)(BookCase);
