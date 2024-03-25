import React, { useState } from "react"; // Added useState import
import "./CardListHotel.css";
import { useDispatch, useSelector } from "react-redux";
import {
    getHotelById,
    addToWishlist,
    removeFromWishlist,
} from "../../Redux/HotelAction";
import hotel from "../media/hotel2.jpg";
import { Link } from "react-router-dom";
import HotelDetails from "../../pages/hotel-details/HotelDetails";
import BookingPopup from "./BookingPopup";

const CardListHotel = (props) => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.combinHotel.wishlist);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        room_type: "",
        start_date: "",
        end_date: "",
        guest: "",
    });

    const current_user = JSON.parse(localStorage.getItem('user'));
    const hotel = props

    console.log("=========hotel data============");
    console.log(hotel);
    console.log("===============================");

    console.log("=========user data============");
    console.log(current_user);
    console.log("===============================");

    // Check if the current hotel is in the wishlist
    const isAlreadyInWishlist = wishlistItems.some(
        (item) => item.id === props.id
    );

    const handleHeartIconClick = () => {
        if (isAlreadyInWishlist) {
            dispatch(removeFromWishlist(props.id));
        } else {
            dispatch(getHotelById(props.id));
            dispatch(addToWishlist(props.hotel));
        }
    };

    // Function to open the modal
    const openModal = () => {
        setModalIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Function to handle form input changes and update state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/hotel/booking_customer",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    `HTTP error! status: ${response.status}, message: ${errorData.message}`
                );
            }
            const data = await response.json();
            console.log("Form data sent successfully!");
            console.log(data);
        } catch (error) {
            console.error("Error sending form data:", error);
            // Handle the error here
        }

        // Close the modal
        closeModal();
    };

    return (
        <div className="container-fluid px-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="hotel-card card border-0">
                    <div className="row set-p justify-content-center">
                        <div className="col-sm-4 px-0">
                            <button
                                className="btn-icon"
                                onClick={() => handleHeartIconClick(props)}
                            >
                                <i
                                    className={`fa-solid fa-heart fa-lg ${isAlreadyInWishlist ? "red-heart" : ""
                                        }`}
                                    style={{ color: isAlreadyInWishlist ? "#dc0909" : "" }}
                                ></i>
                            </button>
                            <img className="image" src={props.image} alt="Card" />
                        </div>
                        <div className="col-sm-8">
                            <div className="row px-3 mt-4 mb-3">
                                <div className="d-flex align-items-center">
                                    <p className="rating mb-0 px-2 mr-3 me-2">
                                        <strong>{props.rate}</strong>
                                    </p>
                                    <p className="text-primary mb-0 mr-2 grade me-2">
                                        <strong>{props.status}</strong>
                                    </p>
                                    <p className="text-secondary mb-0 mr-2 me-2">&middot;</p>
                                    <p className="text-secondary mb-0 me-2">{props.review}</p>
                                </div>
                            </div>
                            <div className="row px-3">
                                <h3 className="font-weight-bold title">{props.name}</h3>
                            </div>
                            <div className="row px-3 mb-2 mt-2">
                                <div className="d-flex align-items-center">
                                    <span className="fa fa-star text-warning mr-1"></span>
                                    <span className="fa fa-star text-warning mr-1"></span>
                                    <span className="fa fa-star text-warning mr-1"></span>
                                    <span className="fa fa-star text-warning mr-1"></span>
                                </div>
                            </div>
                            <div className="row px-3 text-left">
                                <h5 className="mb-1 details">{props.description}</h5>
                            </div>
                            <div className="row px-3">
                                <p className="text-left address">
                                    {props.governorate}, Egypt &middot; {props.address}.
                                </p>
                            </div>
                            <div className="line"></div>
                            <div className="row px-3 mt-3">
                                <h5 className="text-secondary mb-1 suite">Sky Suite</h5>
                            </div>
                            <div className="row px-3">
                                <h2 className="text-success mb-1 font-weight-bold price">
                                    ${props.price}
                                </h2>
                            </div>
                            <div className="row px-3 mb-3">
                                <p className="text-muted mb-0 taxes">+ $14 taxes and charges</p>
                            </div>
                            <Link to={{pathname: "/hotelDetails" ,state:props.hotel}}>
                                <button className="btn btn-success btn-regis me-2">
                                    Details
                                </button>
                            </Link>
                            <button className="btn btn-danger btn-regis" onClick={openModal}>
                                BOOK NOW
                            </button>

                            {/* Render BookingPopup component conditionally */}
                            <BookingPopup
                                isOpen={modalIsOpen}
                                closeModal={closeModal}
                                handleSubmit={handleSubmit}
                                handleInputChange={handleInputChange}
                                formData={formData}
                                current_user={current_user}
                                hotel={hotel}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardListHotel;