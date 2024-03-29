import React from "react";
import Modal from "react-modal";
import axios from "axios";
import EditHotel from "../../pages/EditHotel/EditHotel";

const Edit_Hotel = ({ isOpen, closeModal, handleInputChange, formData, hotel }) => {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#f2f2f2",
            padding: "35px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "50vw",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
        },
    };

    const myHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:8000/hotel/edit/${hotel.id}/`, formData);
            console.log(response);
            closeModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
            <h2 className="text-primary mb-4">Edit Hotel</h2>
            <EditHotel hotelId={hotel.id} />
            <form onSubmit={myHandleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                />

                <label htmlFor="prices">Prices:</label>
                <input
                    type="text"
                    name="prices"
                    value={formData.prices}
                    onChange={handleInputChange}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />

                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                />

                <label htmlFor="governorate">Governorate:</label>
                <input
                    type="text"
                    name="governorate"
                    value={formData.governorate}
                    onChange={handleInputChange}
                />

                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    name="image"
                    //onChange={handleImageChange}
                />

                <label htmlFor="suite">Suite:</label>
                <input
                    type="number"
                    name="suite"
                    value={formData.suite}
                    onChange={handleInputChange}
                />

                <label htmlFor="single_room">Single Room:</label>
                <input
                    type="number"
                    name="single_room"
                    value={formData.single_room}
                    onChange={handleInputChange}
                />

                <label htmlFor="family_room">Family Room:</label>
                <input
                    type="number"
                    name="family_room"
                    value={formData.family_room}
                    onChange={handleInputChange}
                />

                <label htmlFor="facility_desc">Facility Description:</label>
                <textarea
                    name="facility_desc"
                    value={formData.facility_desc}
                    onChange={handleInputChange}
                />

                <label htmlFor="facility">Facilities:</label>
                <input
                type="text"
                name="facility"
                value={formData.facility}
                onChange={handleInputChange}
        />

                <label htmlFor="is_tv">Is TV:</label>
                <input
                    type="checkbox"
                    name="is_tv"
                    checked={formData.is_tv}
                    onChange={handleInputChange}
                />

                <label htmlFor="is_wifi">Is Wifi:</label>
                <input
                    type="checkbox"
                    name="is_wifi"
                    checked={formData.is_wifi}
                    onChange={handleInputChange}
                />

                <label htmlFor="is_poll">Is Pool:</label>
                <input
                    type="checkbox"
                    name="is_poll"
                    checked={formData.is_poll}
                    onChange={handleInputChange}
                />

                <label htmlFor="is_BreakFast">Is BreakFast:</label>
                <input
                    type="checkbox"
                    name="is_BreakFast"
                    checked={formData.is_BreakFast}
                    onChange={handleInputChange}
                />

                <label htmlFor="is_Pet">Is Pet:</label>
                <input
                    type="checkbox"
                    name="is_Pet"
                    checked={formData.is_Pet}
                    onChange={handleInputChange}
                />

                <label htmlFor="is_Accessibiliy">Is Accessibiliy:</label>
                <input
                    type="checkbox"
                    name="is_Accessibiliy"
                    checked={formData.is_Accessibiliy}
                    onChange={handleInputChange}
                />

                <label htmlFor="is_Parking">Is Parking:</label>
                <input
                    type="checkbox"
                    name="is_Parking"
                    checked={formData.is_Parking}
                    onChange={handleInputChange}
                />

                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
};

export default Edit_Hotel;