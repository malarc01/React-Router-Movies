import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props='chickenwing'
    console.log(props);
    console.log(this.props);
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button">Home</div>
        <Link to="/">HOME</Link>
      </div>
    );
  }
}
