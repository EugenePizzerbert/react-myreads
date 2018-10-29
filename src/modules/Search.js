import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import { Link } from "react-router-dom";
import { search } from "../api/BooksAPI";
import SearchError from "../components/Search/Error";

class Search extends Component {
  state = {
    query: "",
    results: [],
    showError: false,
    errorMessage: null
  };

  /**
   * Sets the search results from the returned api data
   * @param query
   */
  setSearchResults = query => {
    search(query).then(results => {
      //if results are returned then set the component results state to the new results, otherwise set the results to an empty array
      if (results) {
        this.setState({ results });
      } else {
        this.setState({ results: [] });
      }

      //Handle any search errors
      this.handleSearchError(results);
    });
  };

  /**
   * Sets the search query
   * @param query
   */
  setSearchQuery = query => {
    this.setState({ query });
  };

  /**
   * Sets the component's error state
   */
  setSearchError = (showError, errorMessage) => {
    this.setState(() => ({
      showError: showError,
      errorMessage: errorMessage
    }));
  };

  /**
   * Gets search results by query
   * @param query
   */
  getSearchResults = query => {
    //normalize the query passed from the input
    let q = query.trim();

    //lets set the search results
    this.setSearchResults(q);
  };

  /**
   * Check if current state has any results
   * @return {boolean}
   */
  hasSearchResults = () => {
    return this.state.results.length > 0;
  };

  /**
   * Check if current state has an error
   * @return {boolean}
   */
  hasSearchError = () => {
    return this.state.showError;
  };

  /**
   * Handle Search errors
   * @param results
   */
  handleSearchError = results => {
    //first we need to check if the results array is undefined. This happens when there's no input query and an explicit error isn't returned
    let hasNoResults = results === undefined;

    //now we do a check if there's any results at all, this prevents any non-object errors
    if (results) {
      //here we check if there's results with an error returned
      let hasError = results.error !== undefined;

      //if so, then let's set the state to show the error & error message otherwise, if the results are undefined then make sure the showError state is set to false;
      if (hasError) {
        return this.setSearchError(true, results.error);
      }
    } else if (hasNoResults) {
      return this.setSearchError(false, null);
    }
  };

  /**
   * Search event handler
   * @param event
   */
  handleSearch = event => {
    //grab the input value, normalize the input & assign it as query
    let value = event.target.value;
    //set the search state
    this.setSearchQuery(value);
    //run the search
    this.getSearchResults(value);
  };

  render() {
    const { query, results, errorMessage } = this.state;
    const { shelves, onUpdateBookShelf } = this.props;

    //conditionally render SearchResults component
    let searchResults = null;
    if (this.hasSearchResults()) {
      searchResults = (
        <SearchResults
          books={results}
          shelves={shelves}
          onUpdateBookShelf={onUpdateBookShelf}
        />
      );
    }

    //conditionally render Error Component
    let searchError = null;
    if (this.hasSearchError()) {
      searchError = (
        <SearchError searchTerms={searchTerms} errorMessage={errorMessage} />
      );
    }

    return (
      <div className="search-books-container search-books">
        <div className="row">
          <div className="col-12">
            <div className="search-bar-container my-3">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend close-search">
                  <Link
                    to="/"
                    className="btn btn-outline-primary px-4"
                    aria-label="Close"
                  />
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={this.handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {searchResults}
            {searchError}
          </div>
        </div>
      </div>
    );
  }
}

const searchTerms = [
  "Android",
  "Art",
  "Artificial Intelligence",
  "Astronomy",
  "Austen",
  "Baseball",
  "Basketball",
  "Bhagat",
  "Biography",
  "Brief",
  "Business",
  "Camus",
  "Cervantes",
  "Christie",
  "Classics",
  "Comics",
  "Cook",
  "Cricket",
  "Cycling",
  "Desai",
  "Design",
  "Development",
  "Digital Marketing",
  "Drama",
  "Drawing",
  "Dumas",
  "Education",
  "Everything",
  "Fantasy",
  "Film",
  "Finance",
  "First",
  "Fitness",
  "Football",
  "Future",
  "Games",
  "Gandhi",
  "History",
  "Homer",
  "Horror",
  "Hugo",
  "Ibsen",
  "Journey",
  "Kafka",
  "King",
  "Lahiri",
  "Larsson",
  "Learn",
  "Literary Fiction",
  "Make",
  "Manage",
  "Marquez",
  "Money",
  "Mystery",
  "Negotiate",
  "Painting",
  "Philosophy",
  "Photography",
  "Poetry",
  "Production",
  "Program Javascript",
  "Programming",
  "React",
  "Redux",
  "River",
  "Robotics",
  "Rowling",
  "Satire",
  "Science Fiction",
  "Shakespeare",
  "Singh",
  "Swimming",
  "Tale",
  "Thrun",
  "Time",
  "Tolstoy",
  "Travel",
  "Ultimate",
  "Virtual Reality",
  "Web Development",
  "iOS"
];

export default Search;
