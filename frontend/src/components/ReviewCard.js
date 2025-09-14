import React from 'react';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <p><strong>{review.user}</strong>: {review.comment}</p>
      <p>Rating: {review.rating}/5</p>
    </div>
  );
}

export default ReviewCard;
