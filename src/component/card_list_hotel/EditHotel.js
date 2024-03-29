import React from "react";
import Modal from "react-modal";
import axios from "axios";

const EditHotel = ({ isOpen, closeModal, handleInputChange, formData, hotel }) => {
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
            <form onSubmit={myHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name || hotel.name}
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
                        value={formData.address || hotel.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prices">Prices:</label>
                    <input
                        type="float"
                        className="form-control"
                        id="prices"
                        name="prices"
                        value={formData.prices || hotel.prices}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        Rating:
                        <select
                            name='rating'
                            id="rating"
                            className="form-control"
                            value={formData.rating || hotel.rating}
                            onChange={handleInputChange}
                            required
                        >
                            <option value='⭐️'>⭐</option>
                            <option value='⭐️⭐️'>⭐️⭐</option>
                            <option value='⭐️⭐️⭐️'>⭐️⭐️⭐</option>
                            <option value='⭐️⭐️⭐️⭐️'>⭐️⭐️⭐️⭐</option>
                            <option value='⭐️⭐️⭐️⭐️⭐️'>⭐️⭐️⭐️⭐️⭐</option>
                        </select>
                    </label>
                </div>


                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select
                        className="form-control"
                        id="status"
                        name="status"
                        value={formData.status || hotel.status}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Pending">Pending</option>
                        <option value="Verified">Verified</option>
                        <option value="Regected">Regected</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description || hotel.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="governorate">Governorate:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="governorate"
                        name="governorate"
                        value={formData.governorate || hotel.governorate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="single_room">Single Room:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="single_room"
                        name="single_room"
                        value={formData.single_room || hotel.single_room}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="suite">Suite:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="suite"
                        name="suite"
                        value={formData.suite || hotel.suite}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="family_room">Family Room:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="family_room"
                        name="family_room"
                        value={formData.family_room || hotel.family_room}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-regis me-2">Save Changes</button>
                <button type="button" className="btn btn-danger btn-regis" onClick={closeModal}>Cancel</button>
            </form>
        </Modal>
    );
};

export default EditHotel;
