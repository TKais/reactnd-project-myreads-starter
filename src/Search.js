import React from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class Search extends React.Component {
  state = {
    displayedResults : [],
    errorText: ''
  }

  static propTypes = {
    allBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    const value = event.target.value;
    if(value.trim() === '') { this.clearResults(); }

    search(value)
      .then( (data) => {
        this.handleAPIResults(data);
      });
  }

  handleAPIResults = (data) => {
    if(Array.isArray(data)) {
      this.clearErrorText();
      this.createResultsToDisplay(data);
    } else if (data && data.error === 'empty query') {
      this.clearResults();
      this.setState({ errorText : 'No results match this query' });
    }
  }

  clearErrorText = () => {
    this.setState({ errorText: '' });
  }

  clearResults = () => {
    this.setState({ displayedResults : [] });
  }

  createResultsToDisplay = (data) => {
    const booksOnShelf = this.getBooksOnShelf();
    const displayed = data.map( result => {
      if(booksOnShelf[result.id]) {
        let currentBook = booksOnShelf[result.id];
        return (
          <Book key={currentBook.id} bookTitle={currentBook.title} id={currentBook.id} author={currentBook.authors} bookImage={currentBook.imageLinks ? currentBook.imageLinks.thumbnail : currentBook.previewLink} onShelfChange={this.props.onShelfChange} books={this.props.allBooks} shelf={currentBook.shelf} /> 
        );
      } else {
        return (
          <Book key={result.id} bookTitle={result.title} id={result.id} author={result.authors} bookImage={ result.imageLinks ? result.imageLinks.thumbnail : result.previewLink } onShelfChange={this.props.onShelfChange} books={data} shelf={result.shelf}   /> 
        );
      }
    });

    this.setState({ displayedResults : displayed });
  }

  getBooksOnShelf = () => {
    const bookObject = {};
    this.props.allBooks.forEach( (el) => {
      bookObject[el.id] = el;
    });
    return bookObject;
  }

	render() {
		return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          { this.state.errorText }
          <ol className="books-grid">
            { this.state.displayedResults }
          </ol>
        </div>
      </div>
		);
  }
}

export default Search;