import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import {Link} from "react-router-dom";
import * as BooksAPI from '../api/BooksAPI';

class SearchOverlay extends Component {
    state = {
        query: ''
    };
    
    updateQuery = query => {
        //first we clean up the query string
        const q = query.trim();
        console.log(q);
        //now we can update the state with search query results from the API
        this.setState(() => ({
            query: BooksAPI.search(q)
        }));
    };
    
    render() {
        const { query } = this.state;
        const { books } = this.props;
        //filter contacts on search functionality.
        const showingResults =
                  //if query is empty just return contacts
                  query === ""
                      ? books
                      : //filter contacts by query
                      books.filter(b =>
                          //only include contacts by name (lowercase), in the query after it's been normalized to lower case also.
                          b.name.toLowerCase().includes(query.toLowerCase())
                      );
        
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search"> Close </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={event=> this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <SearchResults/>
            </div>
        );
    }
}

export default SearchOverlay;
