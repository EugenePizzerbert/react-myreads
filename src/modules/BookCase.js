import React, { Component } from "react";
import { update, getAll } from "../api/BooksAPI";
import ShelfList from "../components/ShelfList";
import SearchButton from "../components/Search/SearchButton";
import Search from "./Search";
import { Route } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { reorder } from "../api/Helpers";

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
    const { shelves } = this.state;
    let shelf = shelves.find(shelf => shelf.id === shelfId);
    let count = this.getBooksByShelf(shelf.id).length;
    return count;
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
    update(book, shelfId).then(() => {
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

  onDragEnd = result => {
    // const {books} = this.state;
    const { draggableId } = result;
    const { droppableId } = result.destination;

    const books = reorder(
      this.state.books,
      result.source.index,
      result.destination.index
    );
    //get the book object
    const book = books.find(b => b.id === draggableId);
    //update the book
    // this.updateBook(book, droppableId);
    // this.setState({
    //   books
    // });
    this.updateBook(book, droppableId);
  };

  render() {
    //destructure the books object
    const { books, shelves } = this.state;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
      </DragDropContext>
    );
  }
}

export default BookCase;
