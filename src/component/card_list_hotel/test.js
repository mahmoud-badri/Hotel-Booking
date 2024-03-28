// BookingPopup.js
import React from "react";
import Modal from "react-modal";

import axios from "axios";
import { differenceInDays } from "date-fns";

const BookingPopup = ({
    isOpen,
    closeModal,
    handleSubmit,
    handleInputChange,
    formData,
    hotel,
    current_user,
}) => {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "35px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "550px",
        },
    };

    function send_post_request(formData, current_user, hotel) {
        var total_days = differenceInDays(formData.end_date, formData.start_date)

        axios
            .post(" http://127.0.0.1:8000/hotel/booking_customer", {
                user: current_user.id,
                hotel: hotel.id,
                room_type: formData.room_type,
                start_date: formData.start_date,
                end_date: formData.end_date,
                guest: formData.guest,

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
        formData.room_type === "Single" ? formData.total_price = hotel.single_room * total_days
            : formData.room_type === "Suite" ? formData.total_price = hotel.suite * total_days
                : formData.room_type === "Family" ? formData.total_price = hotel.family_room * total_days
                    : console.log("invalid");

    }

    const myHAndelSbmit = (e) => {
        e.preventDefault();
        send_post_request(formData, current_user, hotel);
        closeModal();
    };

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
            <h2 className="text-primary mb-4">Booking Details</h2>
            <form>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="room_type"
                        value={formData.room_type}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>
                            Select Room Type
                        </option>
                        <option value="Single">Single Room</option>
                        <option value="Family">Family Room</option>
                        <option value="Suite">Suite</option>
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
                <button
                    type="submit"
                    value="submit"
                    className="btn btn-success btn-regis me-2"
                    onClick={myHAndelSbmit}
                >
                    Confirm
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

export default BookingPopup;
