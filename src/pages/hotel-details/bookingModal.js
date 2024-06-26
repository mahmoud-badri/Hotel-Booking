import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./booingModal.css";
import axios from "axios";
import { differenceInDays } from 'date-fns'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BookingModal({ showModal, handleClose ,hotel }) {
  var user = localStorage.getItem("user")
  user = JSON.parse(user)
  // Define state variables to store form data
  
  const [formData, setFormData] = useState({
    user:user? user.id :'',
    hotel:hotel.id,
    room_type: "",
    guest:"",
    // children: "",
    start_date: "",
    end_date: "",
    total_price:"",
  }
  )
  

  // Function to handle form input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  function send_post_request(formData, user, hotel) {

    axios
      .post(" http://127.0.0.1:8000/hotel/booking_customer", {
        user: user.id,
        hotel: hotel.id,
        room_type: formData.room_type,
        start_date: formData.start_date,
        end_date: formData.end_date,
        guest: formData.guest,
        total_price:formData.room_type==="Single" ? hotel.single_room * differenceInDays(formData.end_date, formData.start_date) :
        formData.room_type === "Suite" ? hotel.suite * differenceInDays(formData.end_date, formData.start_date) :
        formData.room_type === "Family" && hotel.family_room * differenceInDays(formData.end_date, formData.start_date)
      })
     
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
          
        }
      );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    send_post_request(formData, user, hotel);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

     
      return (
        //   {isModalOpen && (  <ModalComponent onClose={() => setIsModalOpen(false)} />
        // )}
        <>
        <Modal show={showModal} onHide={handleClose} size="lg" className="row" >
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
                              <option value="Single">one bed</option>
                              <option value="Family">double bed </option>
                              <option value="Suite">suite</option>
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
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
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
                              value="0"
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
                        <Button variant="primary" type="submit"  onClick={handleSubmit}>
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
        </>)
};

 


export default BookingModal;