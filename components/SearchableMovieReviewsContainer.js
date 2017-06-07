import React from 'react'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import MovieReviews from './MovieReviews'
import SearchReviews from './SearchReviews'

const API_KEY = '624219117d5d48ff8ef45388cdeeef75'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      reviews: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
  }

  handleSearchTerm(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json() )
      .then(response => this.setState({ reviews: response.results}) );
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
      <SearchReviews handleSubmit={this.handleSubmit} handleSearchTerm={this.handleSearchTerm} />
      <MovieReviews reviews={ this.state.reviews } />
      </div>
    )
  }
}
