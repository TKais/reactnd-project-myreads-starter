import React from 'react';

function Title(props) {
	return (
		<div className="list-books-title">
      <h1>{ props.pageTitle }</h1>
    </div>
	);
}

export default Title;