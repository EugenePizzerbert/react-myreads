import React, { Component } from "react";
import * as BooksAPI from "./api/BooksAPI";
import ListShelf from "./modules/ListShelf";
import SearchOverlay from "./modules/SearchOverlay";
import SearchButton from "./components/SearchButton";

class MyReadsContainer extends Component {
  /**
   * State property
   * @type {{showSearchPage: boolean}}
   */
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

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
    return (
      <div className="my-reads-container">
        {this.state.showSearchPage ? (
          <SearchOverlay toggleSearch={this.handleShowSearch} />
        ) : (
          <React.Fragment>
            <ListShelf />
            <SearchButton toggleSearch={this.handleShowSearch} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default MyReadsContainer;
