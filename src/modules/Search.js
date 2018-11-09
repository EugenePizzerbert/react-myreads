import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchResults from "../components/Search/SearchResults";
import { search } from "../api/BooksAPI";
import SearchError from "../components/Search/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "throttle-debounce";
import "../assets/css/components/form-controls.css";

class Search extends Component {
  constructor() {
    super();
    this.setSearchResults = debounce(500, this.setSearchResults);
  }

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
    //if query exists, then run the search, otherwise set the results state to an empty array. This prevents unnecessary api calls when the input field is empty.
    if (query) {
      search(query).then(response => {
        //if response has an error set the results to an empty array, otherwise set the component results state to the new results
        if (this.hasSearchError(response)) {
          this.setState({ results: [] });
        } else {
          //merge the returned data with the existing books state to make sure the results have the updated shelf data
          const results = this.handleMergeResults(response);

          //now we can set the results state
          this.setState({ results });
        }

        //Handle any search errors
        return this.handleSearchError(response);
      });
    } else {
      this.setState({ results: [] });
    }
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
   * @param showError
   * @param errorMessage
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
   * Check if search results have an error
   * @return {boolean}
   */
  hasSearchError = results => {
    return !!results.error;
  };

  /**
   * Handle Search errors
   * @param results
   */
  handleSearchError = results => {
    //check if there's any results at all, this prevents any non-object errors
    if (results) {
      //here we check if there's results with an error returned
      if (this.hasSearchError(results)) {
        //if so, then let's set the state to show the error & error message
        return this.setSearchError(true, results.error);
      }
    }

    //if the results are returned properly or undefined due to an empty query in the input then make sure the showError state is set to false to avoid false error notifications
    return this.setSearchError(false, null);
  };

  /**
   * Handles merging search results with the parent books state
   * @param results
   * @return {*}
   */
  handleMergeResults = results => {
    let data = null;
    if (results) {
      //first we loop through the results
      data = results.map(result => {
        //and check for any existing books from the parent books state that that match our search results. Optimized with find() so we don't have to loop through the entire books array.
        const existingBook = this.props.books.find(
          book => book.id === result.id
        );
        //if the book exists in the parent component state, than update the shelf, otherwise set the shelf to "none"
        if (existingBook) {
          result.shelf = existingBook.shelf;
        } else {
          result.shelf = "none";
        }
        //now we can return the updated book back to the results array
        return result;
      });
    }
    return data;
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
    const { query, results, errorMessage, showError } = this.state;
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
    if (showError) {
      searchError = (
        <SearchError searchTerms={searchTerms} errorMessage={errorMessage} />
      );
    }

    return (
      <div className="search-books-container search-books">
        <div className="row">
          <div className="col-12">
            <div className="brk-form brk-form-transparent brk-library-rendered">
              <div className="brk-form-wrap btn-backgrounds_left-icon btn-backgrounds btn-backgrounds_transparent">
                <span className="before" style={{ left: "auto" }}>
                  <Link to="bookcase" className="">
                    <FontAwesomeIcon icon="arrow-left" />
                  </Link>
                </span>
                <input
                  className="brk-form-input-transparent text-dark pl-50"
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

Search.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default Search;
