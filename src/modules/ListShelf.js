import React, { Component } from "react";
import Shelf from "../components/Shelf";

class ListShelf extends Component {
  render() {
    const { books, shelf } = this.props;
    // console.log(books);
    return (
      <div className="list-books">
        <div className="list-books-content">
          <Shelf shelf={shelf} books={books} />
        </div>
        {/*//search btn*/}
      </div>
    );
  }
}

export default ListShelf;
