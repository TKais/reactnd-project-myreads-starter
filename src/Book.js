import React from 'react';
import Picker from './Picker';

class Book extends React.Component {

  getBook = (value) => {
    const bookToChange = this.props.books.filter( (book) => {
      return this.props.id === book.id;
    });
    this.props.changeShelf(bookToChange[0], value);
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookImage})` }}></div>
            <Picker onCategoryChange={this.getBook} />
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    );
  }
}

export default Book;