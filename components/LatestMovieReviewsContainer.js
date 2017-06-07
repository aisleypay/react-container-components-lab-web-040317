import React from 'react';
import { Component } from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

import MovieReviews from './MovieReviews'

const API_KEY = '624219117d5d48ff8ef45388cdeeef75';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentWillMount(){
    fetch(URL)
      .then(resp => resp.json() )
      .then(response => this.setState({ reviews: response.results}) );
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>The Latest:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default LatestMovieReviewsContainer;
