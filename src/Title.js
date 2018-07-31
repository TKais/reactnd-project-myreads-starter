import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  return (
    <div className="list-books-title">
      <h1>{ props.pageTitle }</h1>
    </div>
  );
}

Title.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Title;
