import React from 'react'

const renderReview = ({ headline, byline, link, summary_short }) => {
  return (
    <div className="review">
      <h2><a href={link.url}>{headline}</a></h2>
      <h4>By: {byline}</h4>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return <div className='review-list'>
      {reviews.map(renderReview)}
    </div>
}

MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews;
