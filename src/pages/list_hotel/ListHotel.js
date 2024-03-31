import React, { useEffect, useState } from "react";
import "./ListHotel.css";
import CardListHotel from "../../component/card_list_hotel/CardListHotel";
import { useSelector, useDispatch } from "react-redux";
import { getHotel } from "../../Redux/HotelAction";
import { Link } from "react-router-dom";
import Pagination from "../../component/Pagination/Pagintaion";

const ListHotel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.combinHotel.hotels);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [selectedRating, setSelectedRating] = useState(null);

  // useEffect(() => {
  //     gethotel()?.then((res) => {
  //         console.log(res)
  //         setHotels(res);
  //     });
  // }, []);
  useEffect(() => {
    dispatch(getHotel());
  }, [dispatch]);

  // Calculate the index of the first and last hotels to display based on pagination
  const indexOfLastHotel = currentPage * pageSize;
  const indexOfFirstHotel = indexOfLastHotel - pageSize;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  // Filter hotels based on the selected rating
  const filteredHotels = selectedRating
    ? currentHotels.filter((hotel) => hotel.rating === selectedRating)
    : currentHotels;

  // Function to handle page changes
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };

  const [query, setQuery] = useState("");

  // Get hotels based on search query
  const filteredQueryHotels = filteredHotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <select
              className="form-select"
              value={selectedRating || ""}
              onChange={(e) => handleRatingSelect(e.target.value)}
            >
              <option value="">All ratings</option>
              <option value="⭐️">1 Star</option>
              <option value="⭐️⭐️">2 Stars</option>
              <option value="⭐️⭐️⭐️">3 Stars</option>
              <option value="⭐️⭐️⭐️⭐️">4 Stars</option>
              <option value="⭐️⭐️⭐️⭐️⭐️">5 Stars</option>
            </select>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-3">
            <input
              placeholder="Search"
              className="form-control me-2"
              aria-label="Search"
              type="search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {filteredQueryHotels.map((hotel) => (
            <div key={hotel?.id}>
              <CardListHotel
                id={hotel.id}
                image={hotel.image}
                status={hotel.status}
                name={hotel.name}
                rating = {hotel.rating}
                governorate={hotel.governorate}
                address={hotel.address}
                price={hotel.prices}
                user_id={hotel.user}
                single_room={hotel.single_room}
                suite={hotel.suite}
                family_room={hotel.family_room}
              />
</div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(hotels.length / pageSize)}
          onPageChange={onPageChange}
          color="blue"
          width="40px"
        />
      </div>
    </>
  );
};

export default ListHotel;