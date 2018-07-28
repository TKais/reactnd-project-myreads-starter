import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Library from './Library';
import Search from './Search';


class BooksApp extends React.Component {
  state = {
  	books: []
  }

  componentDidMount() {
  	this.updateBooks();
  }

  updateBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books });
        console.log('INITIAL--->>>', books);
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
        	<Library allBooks={ this.state.books } onShelfChange={this.updateBooks}/>
        )} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
