import React, { useEffect, useState } from "react";
import Card from "./cards.js";
import "./card.css";

function Cards({ list }) {
<<<<<<< HEAD
  return (
    <div className="cards-flex">
      {list?.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
=======
  const [filterdList, setFilterdList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = list.filter((hotel) =>
      hotel.governorate.toLowerCase().includes(query.toLowerCase())
    );
    setFilterdList(filtered);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search By Governorate..."
        value={searchQuery}
        onChange={handleSearch}
        className="my-4 d-block m-auto form-control w-50"
      />

      <div className="cards-flex">
        {filterdList.length > 0 &&
          filterdList?.map((card, i) => <Card card={card} key={i} />)}
        {filterdList.length === 0 &&
          list?.map((card, i) => <Card card={card} key={i} />)}
      </div>
    </>
>>>>>>> origin/booking_requests
  );
}

export default Cards;