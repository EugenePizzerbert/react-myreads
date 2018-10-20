import React, {Component} from 'react';

class SearchButton extends Component {
    render() {
        const {toggleSearch} = this.props;
        return (
            <div className="open-search">
                <a onClick={toggleSearch}>Add a book</a>
            </div>
        );
    }
}

export default SearchButton;
