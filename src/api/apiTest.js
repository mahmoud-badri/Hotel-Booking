import React, { useState, useEffect } from "react";
import axios from "axios";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/reviews/").then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.hotel}</h2>
          <p>{review.content}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
