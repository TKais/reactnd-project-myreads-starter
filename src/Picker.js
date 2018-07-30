import React from 'react';

class Picker extends React.Component {
  state = {
    selected : 'none' 
  }

  handleChange = (event) => {
    this.props.onCategoryChange(event.target.value);
  }

  componentWillMount() {
    if(this.props.shelfCategory) {
      this.setState({ selected : this.props.shelfCategory });
    }
  }

	render() {
		return (
			<div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.state.selected}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
		);
	}
}

export default Picker;