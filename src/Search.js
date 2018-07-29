import React from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';
import Book from './Book';

class Search extends React.Component {
  state = {
    results : [],
    displayedResults : [],
    errorText: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    if(!value) { this.clearResults(); }

    search(value)
      .then( (data) => {
        this.setState({ results: data });
        this.handleAPIResults();
      });
  }

  handleAPIResults = () => {
    const results = this.state.results;

    if(Array.isArray(results)) {
      this.clearErrorText();
      this.createResultsToDisplay();
    } else if (results && results.error === 'empty query') {
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

  createResultsToDisplay = () => {
    const displayed = this.state.results.map( result => ( 
      <Book key={result.id} bookTitle={result.title} id={result.id} author={result.authors} bookImage={ result.imageLinks.thumbnail } changeShelf={this.setCategory} books={this.props.books} shelf={result.shelf}  /> 
    ));
    
    this.setState({ displayedResults : displayed });
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