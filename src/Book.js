import React from 'react';
import Picker from './Picker';
import PropTypes from 'prop-types';

class Book extends React.Component {
  static propTypes = {
    bookTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.any,
    bookImage: PropTypes.string,
    shelf: PropTypes.string,
  };

  getBook = (value) => {
    const bookToChange = this.props.books.filter( (book) => {
      return this.props.id === book.id;
    });
    this.props.onShelfChange(bookToChange[0], value);
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookImage})` }}></div>
            <Picker onCategoryChange={this.getBook} shelfCategory={this.props.shelf} />
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    );
  }
}

export default Book;