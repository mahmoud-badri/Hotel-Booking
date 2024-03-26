import React, { useState, useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Context/AuthContext';

function GetBooking() {
    const current_user = JSON.parse(localStorage.getItem('user'));
    const {getBookings,bookingsCont} = useContext(AuthContext);
    const [bookings, setBookings] = useState(bookingsCont);
    useEffect(() => {
        getBookings()
    }, []);

    const handleConfirm = async (bookingId, index) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/hotel/confirm_booking/${bookingId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log(`Booking confirmed /${bookingId}/`);
                // Remove the confirmed booking from the state
                const updatedBookings = [...bookings];
                updatedBookings.splice(index, 1);
                setBookings(updatedBookings);
            } else {
                throw new Error('Error confirming booking');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleReject = async (bookingId, index) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/hotel/reject_booking/${bookingId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log(`Booking rejected /${bookingId}/`);
                // Remove the rejected booking from the state
                const updatedBookings = [...bookings];
                updatedBookings.splice(index, 1);
                setBookings(updatedBookings);
            } else {
                throw new Error('Error rejecting booking');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                            <Button variant="success" onClick={() => handleConfirm(booking.id, index)}>Confirm</Button>{' '}
                            <Button variant="danger" onClick={() => handleReject(booking.id, index)}>Cancel</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default GetBooking;
