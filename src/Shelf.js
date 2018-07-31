import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function Shelf(props) {
  const updatedBooks = props.books.map( (book) => {
    let shelfName = props.shelfTitle.toLowerCase().split(' ').join('');
    if(shelfName === book.shelf.toLowerCase()) {
      return (
        <Book key={book.id} bookTitle={book.title} id={book.id} author={book.authors} bookImage={ book.imageLinks.thumbnail } onShelfChange={props.onShelfChange} books={props.books} shelf={book.shelf} />
      );
    }
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { updatedBooks }
        </ol>
      </div>
    </div>
  );
}

Shelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Shelf;
