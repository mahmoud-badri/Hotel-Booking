import React from 'react';


// const BookingTable = ({ bookings }) =>
const BookingTable = () => {
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
        {/* {bookings.map((booking, index) => */}
        {/* <tr key={index}> */}
            <tr>
              <td>"booking.userEmail"</td>
              <td>"booking.userName"</td>
              <td>"booking.roomType"</td>
              <td>"booking.startDate"</td>
              <td>"booking.endDate"</td>
              <td>"booking.price"</td>
              <td>"booking.guests"</td>
              <td>"booking.children"</td>
              <td>
              {/* <button onClick={() => handleApproval(index)}>Approval</button>
                <button onClick={() => handleRejection(index)}>Rejection</button> */}

                <button className="btn btn-success mr btn-sm">Approval</button>
               </td>
                  <td>
                <button className="btn btn-danger ml btn-sm">Rejection</button>
              </td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );

  // // Define functions for handling approval and rejection
  // const handleApproval = (index) => {
  //   // Implement your logic for approval here
  //   console.log("Booking approved:", bookings[index]);
  // };

  // const handleRejection = (index) => {
  //   // Implement your logic for rejection here
  //   console.log("Booking rejected:", bookings[index]);
  // };
};

export default BookingTable;
