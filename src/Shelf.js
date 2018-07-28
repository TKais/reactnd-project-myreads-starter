import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import { update } from './BooksAPI';

class Shelf extends React.Component {

  setCategory = (book, category) => {
    // logic
  }


	render() {
    const updatedBooks = this.props.books.map( (book) => {
      console.log(book);
      let shelfName = this.props.shelfTitle.toLowerCase().split(' ').join('');
      if(shelfName === book.shelf.toLowerCase()) {
        return (
          <Book key={book.id} bookTitle={book.title} author={book.authors} bookImage={ book.imageLinks.thumbnail } changeShelf={this.setCategory} />
        );
      }
    });

		return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { updatedBooks }
          </ol>
        </div>
      </div>
		);
	}
}

export default Shelf;