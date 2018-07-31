import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import Title from './Title';

function Library(props) {
	return (
    <div className="list-books">
      <Title pageTitle="MyReads" />
      <div className="list-books-content">
        <div>
          <Shelf shelfTitle="Currently Reading" books={props.allBooks} onShelfChange={props.onShelfChange} />
          <Shelf shelfTitle="Want to Read" books={props.allBooks} onShelfChange={props.onShelfChange} />
          <Shelf shelfTitle="Read" books={props.allBooks} onShelfChange={props.onShelfChange}  />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Library;