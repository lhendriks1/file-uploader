import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';


export default class SearchBox extends Component {
  render(){
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input
          placeholder="Search term"
          value={this.props.searchTerm}
          onChange={e => this.props.handleUpdate(e.target.value)}/>
      </div>
    );
  };
};
