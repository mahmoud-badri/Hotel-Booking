import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { differenceInDays } from 'date-fns';

const EditHotel = ({
    isOpen,
    closeModal,
    handleSubmit,
    handleInputChange,
    formData,
    hotel,
}) => {
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
            width: '550px',
        },
    };

    function send_post_request(formData, hotel) {
        const total_days = differenceInDays(formData.end_date, formData.start_date);

        axios
            .post(' http://127.0.0.1:8000/hotel/update', {
                // Assuming the update endpoint
                hotelId: hotel.id,
                name: formData.name,
                address: formData.address,
                // Include other fields you want to update
            })
            .then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                    console.log(formData);
                }
            );
    }

    const myHandleSubmit = (e) => {
        e.preventDefault();
        send_post_request(formData, hotel);
        closeModal();
    };

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
            <h2 className="text-primary mb-4">Edit Hotel</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* Include other fields for editing */}
                <div className="form-group">
                    <label htmlFor="name">prices:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="prices"
                        name="prices"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-regis me-2"
                    onClick={myHandleSubmit}
                >
                    Save Changes
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-regis"
                    onClick={closeModal}
                >
                    Cancel
                </button>
            </form>
        </Modal>
    );
};

export default EditHotel;
