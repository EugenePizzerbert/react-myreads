import React, { Component } from "react";
import Shelf from "../components/Shelf";

class ListShelf extends Component {
  render() {
    const { books } = this.props;
    // console.log(books);
    return (
      <div className="list-books">
        <div className="list-books-content">
          <Shelf books={books} />
        </div>
        {/*//search btn*/}
      </div>
    );
  }
}

export default ListShelf;
