// In Booking.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchBookings = async () => {
  const result = await axios.get("http://127.0.0.1:8000/hotel/");
  return result.data;
};

const bookHotel = async (bookingDetails) => {
  const result = await axios.post(
    "http://127.0.0.1:8000/hotel/booking_customer",
    bookingDetails
  );
  return result.data;
};

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    user: "",
    hotel: "",
    status: "",
    start_date: "",
    end_date: "",
    room_type: "",
  });

  useEffect(() => {
    const getBookings = async () => {
      const bookingsFromApi = await fetchBookings();
      setBookings(bookingsFromApi);
    };
    getBookings();
  }, []);

  const handleInputChange = (event) => {
    setBookingDetails({
      ...bookingDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleBookHotel = async () => {
    const newBooking = await bookHotel(bookingDetails);
    setBookings([...bookings, newBooking]);
  };

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <h2>
            {booking.user}'s booking at {booking.hotel}
          </h2>
          <p>Status: {booking.status}</p>
          <p>Start Date: {booking.start_date}</p>
          <p>End Date: {booking.end_date}</p>
          <p>Room Type: {booking.room_type}</p>
        </div>
      ))}
      <input
        type="text"
        name="status"
        onChange={handleInputChange}
        placeholder="Status"
      />
      <input
        type="date"
        name="start_date"
        onChange={handleInputChange}
        placeholder="Start Date"
      />
      <input
        type="date"
        name="end_date"
        onChange={handleInputChange}
        placeholder="End Date"
      />
      <input
        type="text"
        name="room_type"
        onChange={handleInputChange}
        placeholder="Room Type"
      />
      <button onClick={handleBookHotel}>Book Hotel</button>
    </div>
  );
}

export default Booking;
