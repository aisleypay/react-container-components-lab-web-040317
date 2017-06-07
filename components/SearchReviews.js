import React from 'react';
import { Component } from 'react';

const SearchReviews = ({ handleSubmit, handleSearchTerm}) => {
  return (
    <form onSubmit={handleSubmit}>
    <label>Find a Review!</label>
    <input type='text' id="searchTerm" onChange={handleSearchTerm}></input>
    <input type="submit" value="Find"></input>
    </form>
  )
}

export default SearchReviews;
