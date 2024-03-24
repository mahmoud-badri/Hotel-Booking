import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getStarRatings, postStarRating } from "../../Redux/HotelAction.js";

const StarRatingTest = () => {
  const [rating, setRating] = useState(0);
  const [hotelName, setHotelName] = useState("");
  const dispatch = useDispatch();

  const handleGetRatings = () => {
    dispatch(getStarRatings());
  };

  const handlePostRating = () => {
    dispatch(postStarRating(hotelName, rating));
  };

  return (
    <div>
      <button onClick={handleGetRatings}>Get Star Ratings</button>
      <input
        type="text"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
        placeholder="Hotel Name"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
      />
      <button onClick={handlePostRating}>Post Star Rating</button>
    </div>
  );
};

export default StarRatingTest;
