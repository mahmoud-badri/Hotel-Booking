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
            backgroundColor: "#fff",
            padding: "35px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "75vw",
            height: "80vh"
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
            

            <EditHotel hotelId = {hotel.id}/>

        </Modal>
    );
};

export default Edit_Hotel;
