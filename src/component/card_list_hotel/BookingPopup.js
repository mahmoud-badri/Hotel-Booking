// BookingPopup.js
import React from 'react';
import Modal from 'react-modal';

const BookingPopup = ({ isOpen, closeModal, handleSubmit, handleInputChange, formData }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '35px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: "550px",
        },
    };

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
            <h2 className="text-primary mb-4">Booking Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="room_type"
                        value={formData.room_type}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>Select Room Type</option>
                        <option value="single_room">Single Room</option>
                        <option value="double_room">Double Room</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="start_date">Start Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="start_date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="end_date">End Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="end_date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="guest">Number of Guests:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="guest"
                        name="guest"
                        value={formData.guest}
                        onChange={handleInputChange}
                        min="1"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success btn-regis me-2">Confirm</button>
                <button type="button" className="btn btn-danger btn-regis" onClick={closeModal}>Cancel</button>
            </form>
        </Modal>
    );
}

export default BookingPopup;