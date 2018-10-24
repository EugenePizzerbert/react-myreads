import React, { Component } from "react";
import * as BooksAPI from "./api/BooksAPI";
import ListShelf from "./modules/ListShelf";
import SearchOverlay from "./modules/SearchOverlay";
import SearchButton from "./components/SearchButton";
import { Route } from "react-router-dom";

class MyReadsContainer extends Component {
  /**
   * State property
   * @type {{showSearchPage: boolean}}
   */
  state = {
    books: [],
    shelves: [
      { name: "Currently Reading", id: "currentlyReading" },
      { name: "Want to Read", id: "wantToRead" },
      { name: "Read", id: "read" }
    ]
  };

  //Get all the books
  componentDidMount() {
    //call the api to get all the books
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  handleShowSearch = () => {
    const doSearch = this.state.showSearchPage;
    if (doSearch === false) {
      console.log("Search is true");
      this.setState({ showSearchPage: true });
    } else if (doSearch === true) {
      console.log("Search is false");
      this.setState({ showSearchPage: false });
    }
  };

  render() {
    //destructure the books object
    const { books, shelves } = this.state;

    return (
      <div className="my-reads-container">
        <Route
          path="/search"
          render={() => <SearchOverlay toggleSearch={this.handleShowSearch} />}
        />

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
