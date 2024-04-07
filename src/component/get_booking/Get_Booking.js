import React, { useState, useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Context/AuthContext';

function GetBooking() {

    const [bookings, setBookings] = useState([]);
    const current_user = JSON.parse(localStorage.getItem('user'));
    const { getBookings, bookingsCont } = useContext(AuthContext);
    const [res, setRes] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/hotel/booking_by_hotel_owner/${current_user.id}`)
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

    const handleConfirm = async (bookingId, index) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/hotel/confirm_booking/${bookingId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setRes(response.ok)
            const updatedBookings = [...bookings];
            updatedBookings[index].status = 'confirmed';
            setBookings(updatedBookings);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleReject = async (bookingId, index) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/hotel/reject_booking/${bookingId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setRes(response.ok)
            const updatedBookings = [...bookings];
            updatedBookings[index].status = 'cancelled';
            setBookings(updatedBookings);
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
                            {(booking.status === 'confirmed' || booking.status === 'cancelled') ? (
                                <Button variant="secondary" disabled>{booking.status === 'confirmed' ? 'Confirmed' : 'Cancelled'}</Button>
                            ) : (
                                <Button variant="success" onClick={() => handleConfirm(booking.id, index)} disabled={booking.status === 'confirming'}>Confirm</Button>
                            )}
                            {(booking.status === 'confirmed' || booking.status === 'cancelled') ? null : (
                                <Button variant="danger" onClick={() => handleReject(booking.id, index)} disabled={booking.status === 'cancelling'}>Cancel</Button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default GetBooking;
