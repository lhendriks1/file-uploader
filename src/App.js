import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  };

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  };

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    });
  };

  render(){
    return (
      <main className='App'>
      <SearchBar
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption}
        handleUpdate={term => this.updateSearchTerm(term)}
        handleFilterChange={option => this.updateFilterOption(option)} />
      <FilterableList
        files={this.props.files}
        searchTerm={this.state.searchTerm}
        filterOption={this.state.filterOption}/>
      </main>
    );
  }
}
