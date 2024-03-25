import React, { useState, useEffect } from "react";

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/hotel/booking_by_hotel_owner/2/");
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  console.log(bookings)

  return (
    <div className="container">
      <table className="table table-secondary m-4">
        <thead>
          <tr>
            <th>User Email</th>
            <th>User Name</th>
            <th>Room Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th>Guests</th>
            <th>Children</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.userEmail}</td>
              <td>{booking.userName}</td>
              <td>{booking.room_type}</td>
              <td>{booking.start_date}</td>
              <td>{booking.endDate}</td>
              <td>{booking.price}</td>
              <td>{booking.guest}</td>
              <td>{booking.children}</td>
              <td>
                <button className="btn btn-success mr btn-sm">Approval</button>
              </td>
              <td>
                <button className="btn btn-danger ml btn-sm">Rejection</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
