import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./booingModal.css";

function BookingModal({ showModal, handleClose }) {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    bedType: "",
    guests: "",
    children: "",
    checkIn: "",
    checkOut: ""
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
      const response = await fetch("https://api-generator.retool.com/qCCCiu/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Check response status
      if (response.ok) {
        // Handle success, maybe show a success message
        console.log("Form data sent successfully");
        console.log(response);
        console.log("Form data sent successfully");
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
                          name="bedType"
                          value={formData.bedType}
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
                          name="guests"
                          value={formData.guests}
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
                          name="checkIn"
                          value={formData.checkIn}
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
                          name="checkOut"
                          value={formData.checkOut}
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
