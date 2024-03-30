import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
    getHotelReviews,
    postHotelReviews,
    putHotelReviews,
    deleteHotelReviews,
} from "../../Redux/HotelAction";
import "./HotelDetailBody.css";
import { Rating } from "../hotel_detail_header/HotelDetailHeader";
import Pagination from '../Pagination/Pagintaion';
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import Appointment from '../../pages/Appointment/Appointment';

import { Button } from "react-bootstrap";
import BookingModal from "../../pages/hotel-details/bookingModal";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Alert from 'react-bootstrap/Alert';
import EditHotel from "../../pages/EditHotel/EditHotel";

var user = localStorage.getItem("user")
user = JSON.parse(user)

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
];
const iconlist = [
    { iconsrc: "tv", icontext: "Plasma TV", field: "is_tv" },
    { iconsrc: "wifi", icontext: "Free Wifi", field: "is_wifi" },
    { iconsrc: "person-swimming", icontext: "Pool", field: "is_poll" },
    { iconsrc: "mug-hot", icontext: "Breakfast", field: "is_BreakFast" },
    { iconsrc: "dog", icontext: "Pet allowed", field: "is_Pet" },
    { iconsrc: "wheelchair", icontext: "Accessibility", field: "is_Accessibility" },
    { iconsrc: "car", icontext: "Parking", field: "is_Parking" },
];
function Description(props) {
    const hotelId = useParams();

    const hotels = useSelector((state) => state.combinHotel.hotels)

    const hotel = hotels.find((hotel) => hotel.id == hotelId.id)


    //   useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(`http://127.0.0.1:8000/hotel/allFacilites/${hotel}`);
    //         const jsonData = await response.json();
    //         setFacility(jsonData);
    //         console.log(jsonData);
    //       } catch (error) {
    //         setError(error.message);
    //       }
    //     };

    //     fetchData();
    //   }, []);
    const dispatch = useDispatch()
    // const facilities = useSelector((state) => state.combinHotel.facilities)
    const fa = hotel.facility.split(',')
    useEffect(() => {
        console.log(fa);
        // dispatch(getFacilities(hotel.id))
    }, [dispatch]);

    const list = fa.map((item) => ({ icon: "check", text: item }))

    

    return (
        <>
            <div className="row text-dark my-3" style={{ textAlign: "start" }}>
                <div className="col-md-3">
                    <h3>Description</h3>
                </div>

                <div className="col-md-9 ">
                    <p>
                        {hotel.description}
                    </p>
                    <h4 className="py-3">Hotel facilities</h4>
                    <p>
                        {hotel.facility_desc}
                    </p>
                    <ItemList columns={2} itemlist={list} />
                </div>
            </div>
        </>
    );
}

function ItemList(props) {
    const list = props.itemlist.map((el) => {
        return (
            <div className="d-flex align-items-start mb-2">
                <i className={`fa-solid fa-${el.icon} text-muted`}></i>
                <span className="ms-3 "> {el.text} </span>
            </div>
        );
    });
    return (
        <div
            style={{
                columns: props.columns,
                columnGap: "2vw",
            }}>
            {list}
        </div>
    );
}

function Icons(props) {
    const hotelId = useParams();

    const hotels = useSelector((state) => state.combinHotel.hotels)

    const hotel = hotels.find((hotel) => hotel.id == hotelId.id)
    const list = props.iconlist.map((el) => {
        const isChecked = hotel[el.field];
        if (isChecked) {
            return (
                <div className={`d-flex flex-column`}>
                    <i className={`fa-solid fa-${el.iconsrc} size-i text-muted`}></i>
                    <span className="text-muted">{el.icontext}</span>
                </div>
            );
        }
    });
    return <>{list}</>;
}

function RoomFeatures(props) {
    const roomImages = [
        "https://picsum.photos/id/1019/250/150/",
        "https://picsum.photos/id/1019/250/150/",
        "https://picsum.photos/id/1019/250/150/",
        "https://picsum.photos/id/1019/250/150/",
    ].map((el) => (
        <div className="col-md-3">
            <img src={el} className="w-100 m-0" />
        </div>
    ));

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <ItemList columns={1} itemlist={props.roomIcons} />
                </div>
                <div className="col-md-6">
                    <ItemList columns={1} itemlist={props.roomItems} />
                </div>
            </div>
            <div className="row my-3">{roomImages}</div>
        </>
    );
}

function RoomType(props) {
    return (
        <>
            <h4>{props.title}</h4>
            <p>
                Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus
                insolens ad. Sit cu detraxit constituam, an mel iudico constituto
                efficiendi.
            </p>
            <RoomFeatures roomIcons={props.iconlist} roomItems={props.itemlist} />
        </>
    );
}

function RoomTypes(props) {
    const roomIcons = [
        { icon: "wifi", text: "Lorem ipsum dolor sit amet" },
        { icon: "tv", text: "No scripta electram necessitatibus sit" },
        { icon: "shield", text: "Quidam percipitur instructior an eum" },
    ];

    const roomItems = [
        { icon: "check", text: "Lorem ipsum dolor sit amet" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
    ];
    return (
        <div className="row text-dark my-3" style={{ textAlign: "start" }}>
            <div className="col-md-3">
                <h3>Rooms Types</h3>
            </div>

            <div className="col-md-9">
                <RoomType
                    title={"Single Room"}
                    iconlist={roomIcons}
                    itemlist={roomItems}
                />
                <RoomType
                    title={"Double Room"}
                    iconlist={roomIcons}
                    itemlist={roomItems}
                />
            </div>
        </div>
    );
}
function Review(props) {
    const fullDate = new Date(props.date)
    const date = fullDate.toDateString();
    return (
        <div className="border-bottom border-1 border-dark py-2">
            <div className="row d-flex  justify-content-between">
                <div className="col-md-6 d-flex align-items-center justify-content-start">
                    <div className="">
                        <img
                            src={props.img}
                            style={{ width: "4vw", height: "4vw" }}
                            className="rounded-circle"
                            alt=""
                        />
                    </div>
                    <span className="ms-3 fs-5">{props.name}</span>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <span className="text-muted fs-6"> {date} </span>
                </div>
            </div>
            <div>Rate:{props.rate}</div>

            <p className="my-4 ">{props.description}</p>

            <Rating
                star={props.rate}
                icon={"star"}
                color1={"text-warning"}
                color2={"text-dark"}
            />
        </div>
    );
}

function Reviews(props) {
    const hotelId = useParams();

    const hotels = useSelector((state) => state.combinHotel.hotels)

    const hotel = hotels.find((hotel) => hotel.id == hotelId.id)


    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.combinHotel.hotelReviews);
    const [state,setState] = useState(reviews)
    // console.log(reviews);
    let register = useFormik({
        initialValues: {
            hotel: hotel.id,
            name: "",
            rating: "",
            description: "",
            user: user ? user.id : '',
            image: user ? user.image : null
        },
        onSubmit: (values) => {
            dispatch(postHotelReviews(values));
            dispatch(getHotelReviews(hotel.id));
            handleCloseModal()
            // console.log(values);
        },
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5); // Set the number of reviews per page
    const indexOfLastReview = currentPage * pageSize;
    const indexOfFirstReview = indexOfLastReview - pageSize;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

     // Function to handle page changes
     const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
    },[dispatch,state]);
    // const Revs=reviews.map((el)=> <Review name={el.name} img={el.images} description={el.descripen} rate={el.rate} />)
    
    // Calculate the index of the first and last reviews to display based on pagination
    const handleCloseModal = () => {
        const modal = document.getElementById('staticBackdrop');
        const backdrop = document.getElementsByClassName('modal-backdrop')[0];
        modal.classList.remove('show');
        backdrop.parentNode.removeChild(backdrop);
    };
   
    return (
        <>
            <div className="row text-dark ">
                <div className="col-md-3 d-flex flex-column">
                    <h3>Reviews</h3>

                    <button
                        type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Leave a Review
                    </button>

                    <div
                        className="modal fade "
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true">
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">
                                        Reviews
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={register.handleSubmit} className="text-start">
                                        <label htmlFor="Name"> Name</label>
                                        <input
                                            value={register.values.name}
                                            onChange={register.handleChange}
                                            type="text"
                                            name="name"
                                            id="Name"
                                            className="form-control mb-3"
                                            placeholder="Name"
                                        />
                                        <label htmlFor="rating"> rating</label>
                                        <input
                                            value={register.values.rating}
                                            onChange={register.handleChange}
                                            type="number"
                                            name="rating"
                                            id="rating"
                                            className="form-control mb-3"
                                            placeholder="rating"
                                        />
                                        <label for="textarea" class="col-4 col-form-label">
                                            Description
                                        </label>
                                        <div class="col-12">
                                            <textarea
                                                id="textarea"
                                                value={register.values.description}
                                                onChange={register.handleChange}
                                                name="description"
                                                cols="40"
                                                rows="5"
                                                class="form-control"
                                                placeholder="Description"></textarea>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="submit"
                                                className="btn bg-success text-white"
                                                aria-label="Close"
                                                >
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="col-md-9 text-start py-4 ">
                    {reviews.map((el) => (
                        <div key={el.id}>
                            <Review
                                name={el.name}
                                img={el.images}
                                description={el.description}
                                rate={el.rate}
                            />
                        </div>
                    ))}
                </div> */}
                <div className="col-md-9 text-start py-4 ">
                    {currentReviews.map((el) => (
                        <div key={el.id}>
                            <Review
                                name={el.name}
                                img={el.image}
                                description={el.description}
                                rate={el.rating}
                                date={el.createAt}
                            />
                        </div>
                    ))}
                    {/* Pagination component */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(reviews.length / pageSize)}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </>
    );
}

export default function HotelDetailBody({ data }) {
    const hotelId = useParams();
    const [error, setError] = useState("")
    const hotels = useSelector((state) => state.combinHotel.hotels)
    //console.log(hotels.find((hotel) => hotel.id == hotelId.id).is_tv);
    // console.log(posts);
    //console.log(hotelId.id);
    const hotel = hotels.find((hotel) => hotel.id == hotelId.id)
    // console.log(hotel["name"])
    const [show, setShow] = useState(false);
    // console.log(data)
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (!user) {
            setError('You must login first');
            setShow(false); // Set show to false to prevent showing the modal

            // alert('You must login first'); // Display an alert instead
        } else {
            setShow(true); // Show the modal if the user is true
        }
    }
    // Hide the alert after a certain delay
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 3000); // Adjust the delay as needed
    const images = [
        {
            original: hotel.image,
            thumbnail: hotel.image,
        },
        // {
        //     original: "https://picsum.photos/id/1015/1000/600/",
        //     thumbnail: "https://picsum.photos/id/1015/250/150/",
        // },
        // {
        //     original: "https://picsum.photos/id/1019/1000/600/",
        //     thumbnail: "https://picsum.photos/id/1019/250/150/",
        // },
    ];
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/hotel/bookingList`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching bookings');
                }
            })
            .then(data => setBookings(data))
            .catch(error => console.error('Error:', error));

    }, []);
    const booking = bookings.find((booking) => booking.user == user.id && booking.hotel==hotel.id && booking.is_accepted==true)
    
    return (
        <>
            <div className="container mt-5 ">
                {error && (
                    <Alert key="danger" variant="danger"
                    >
                        {error}
                    </Alert>
                )}
                <div className="row">
                    {/* first col icons , carousel , rooms , reviews */}
                    <div className="col-md-8">
                        <div className="col-md-12 px-4 py-2 d-flex justify-content-between border-bottom border-1 border-dark">
                            <Icons iconlist={iconlist} />
                        </div>

                        <div className="col-md-12 pt-4">
                            <ImageGallery items={images} />
                        </div>

                        
                        <Description />
                        {/* <RoomTypes /> */}
                        <Appointment />
                        {booking && (<Reviews />)}
                       
                                
                    </div>
                    {/* details */}
                    <div className="col-md-4  cc  ">
                        <i class="fa-solid fa-phone fs-2 mt-4 mb-3 icon-d"></i>
                        <p className="fs-4 icon-d m-0">
                            {" "}
                            <span className="sp-d ">Book</span> {hotel.name}
                        </p>
                        <p className="fs-3 phone-icon-d m-0">
                            +456<span> </span>789<span> </span>0097
                        </p>
                        <p className="fs-6 text-muted m-2">Monday to Friday 9.00am - 7.30pm</p>

                        <Button variant="primary" onClick={handleShow}>
                            Book Your Room
                        </Button>
                    </div>
                </div>
            </div>
            {hotel.map_location &&
                <iframe
                    src={hotel.map_location}
                    width="90%"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                />
            }
            <BookingModal handleClose={handleClose} showModal={show} hotel={hotel} />
            {user&& user.type==='hotel'&& hotel.user == user.id &&(
                
                    <EditHotel hotelId={hotel.id}></EditHotel>

                
            )}
        </>
    );
}