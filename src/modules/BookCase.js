import React, { Component } from "react";
import { update, getAll } from "../api/BooksAPI";
import ShelfList from "../components/ShelfList";
import SearchButton from "../components/Search/SearchButton";
import Search from "./Search";
import { Route } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { dndHelpers } from "../api/Helpers";

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
      this.setState(
        {
          books
        },
        console.log("getAllBooks state: ", books, this.state.books)
      );
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
    return this.state.books.filter(book => book.shelf === query);
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
    console.log("updateBook state: ", this.state.books);

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
    console.log("Before update: ", this.state.books);
    console.log("updateBookShelf before Update: ", book);
    //first we update the book via the api
    update(book, shelfId).then(() => {
      console.log("Book Updated Successfully : ", book, this.state.books);
    });
  };

  /**
   * Updates book state
   * @param book
   * @param shelf
   */
  updateBookState = (book, shelf) => {
    console.log("Before concat: ", this.state.books);
    //here we loop through the books and compare the shelves, then update the bookshelf .
    let books = this.state.books;
    books.forEach((oldBook, index) => {
      if (oldBook.id === book.id) {
        books[index].shelf = shelf;
      }
    });
    this.setState({ books }, console.log("After concat: ", this.state.books));
  };

  onDragEnd = result => {
    const { source, destination, draggableId } = result;
    console.log(result);

    const books = dndHelpers.reorder(
      this.state.books,
      source.index,
      destination.index
    );
    console.log("OnDragend reorder: ", books);
    //get the book object
    const book = books.find(b => b.id === draggableId);
    //update the book
    this.updateBookShelf(book, destination.droppableId);
    this.updateBookState(book, destination.droppableId);
  };

  render() {
    //destructure the books object
    const { books, shelves } = this.state;
    console.log("Render state: ", books);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {console.log("Render return: ", books)}
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
