import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./booingModal.css";
import axios from "axios";

function BookingModal({ showModal, handleClose }) {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    room_type: "",
    guest: "",
    children: "",
    start_date: "",
    end_date: ""
  });

  // Function to handle form input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send formData to backend API
      const response = await axios.post("http://127.0.0.1:8000/hotel/booking_customer", formData, {
      headers: {
        "Content-Type": "application/json"
      }
    });

 // Check response status
 if (response.status === 200) {
  // Handle success, maybe show a success message
  console.log("Form data sent successfully");
  console.log(formData);
} else {
  // Handle errors, maybe show an error message
  console.error("Error sending form data:", response.statusText);
}
} catch (error) {
console.error("Error sending form data:", error);
}
};

  return (
    <Modal show={showModal} onHide={handleClose} size="lg" className="row">
      <Modal.Header closeButton>
        <Modal.Title>Book Your Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="booking" className="section">
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="booking-form">
                  <form className="w-100" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="room_type"
                          value={formData.room_type}
                          onChange={handleInputChange}
                        >
                          <option>one bed</option>
                          <option>double bed </option>
                          <option>suite</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="guest"
                          value={formData.guest}
                          onChange={handleInputChange}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className="select-arrow"></span>
                        <span className="form-label">Guests</span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="children"
                          value={formData.children}
                          onChange={handleInputChange}
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className="select-arrow"></span>
                        <span className="form-label">Children</span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control w-100"
                          type="date"
                          required
                          name="start_date"
                          value={formData.start_date}
                          onChange={handleInputChange}
                        />
                        <span className="form-label">Check In</span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control w-100"
                          type="date"
                          required
                          name="end_date"
                          value={formData.end_date}
                          onChange={handleInputChange}
                        />
                        <span className="form-label">Check out</span>
                      </div>
                    </div>
                    <Button variant="primary" type="submit">
                      Check availability
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingModal;

