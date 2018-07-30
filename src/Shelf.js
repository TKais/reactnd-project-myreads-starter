import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import { update } from './BooksAPI';

class Shelf extends React.Component {

  static setCategory = (book, category) => {
    update(book, category)
      .then( () => {
        console.log('THIS--->', this);
        console.log('PROPS--->', this.props);
        this.props.onShelfChange();
      });
  }


	render() {
    const updatedBooks = this.props.books.map( (book) => {
      let shelfName = this.props.shelfTitle.toLowerCase().split(' ').join('');
      if(shelfName === book.shelf.toLowerCase()) {
        return (
          <Book key={book.id} bookTitle={book.title} id={book.id} author={book.authors} bookImage={ book.imageLinks.thumbnail } onShelfChange={this.props.onShelfChange} books={this.props.books} shelf={book.shelf} />
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