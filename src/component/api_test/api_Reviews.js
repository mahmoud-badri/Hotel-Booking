import React, { useState } from "react";
import axios from "axios";

const ReviewTest = () => {
  const [hotelName, setHotelName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleGetReviews = () => {
    axios.get("http://localhost:8000/api/reviews/").then((response) => {
      setReviews(response.data);
    });
  };

  const handlePostReview = () => {
    axios.post("http://localhost:8000/api/reviews/", {
      hotel: hotelName,
      content: content,
      rating: rating,
    });
  };

  return (
    <div>
      <button onClick={handleGetReviews}>Get Reviews</button>
      <input
        type="text"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
        placeholder="Hotel Name"
      />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Review Content"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
      />
      <button onClick={handlePostReview}>Post Review</button>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.hotel}</h2>
          <p>{review.content}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewTest;
