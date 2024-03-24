import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function GetBooking() {

    const [bookings, setBookings] = useState([]);
    const current_user = JSON.parse(localStorage.getItem('user'));
    

    useEffect(() => {

        fetch(`http://127.0.0.1:8000/hotel/booking_by_hotel_owner/${current_user.id}/`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching bookings');
                }
            })
            .then(data => setBookings(data))
            .catch(error => console.error('Error:', error));

    }, []);

    if (!Array.isArray(bookings)) {
        return <div>Loading...</div>;
    }
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Room Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Guest</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{booking.user.name}</td>
                        <td>{booking.user.email}</td>
                        <td>{booking.room_type}</td>
                        <td>{booking.start_date}</td>
                        <td>{booking.end_date}</td>
                        <td>{booking.guest}</td>
                        <td>
                            <Button variant="success">Confirm</Button>{' '}
                            <Button variant="danger">Cancel</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default GetBooking;
