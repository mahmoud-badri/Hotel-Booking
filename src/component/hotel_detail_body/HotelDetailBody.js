import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { getHotelReviews, postHotelReviews } from "../../Redux/HotelAction";
import "./HotelDetailBody.css";
import { Rating } from "../hotel_detail_header/HotelDetailHeader";
import Pagination from "../Pagination/Pagintaion";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

import { Button } from "react-bootstrap";
import BookingModal from "../../pages/hotel-details/bookingModal";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Alert from "react-bootstrap/Alert";
import EditHotel from "../../pages/EditHotel/EditHotel";
import Swal from "sweetalert2";

var user = localStorage.getItem("user");
user = JSON.parse(user);

const iconlist = [
  { iconsrc: "tv", icontext: "Plasma TV", field: "is_tv" },
  { iconsrc: "wifi", icontext: "Free Wifi", field: "is_wifi" },
  { iconsrc: "person-swimming", icontext: "Pool", field: "is_poll" },
  { iconsrc: "mug-hot", icontext: "Breakfast", field: "is_BreakFast" },
  { iconsrc: "dog", icontext: "Pet allowed", field: "is_Pet" },
  {
    iconsrc: "wheelchair",
    icontext: "Accessibility",
    field: "is_Accessibility",
  },
  { iconsrc: "car", icontext: "Parking", field: "is_Parking" },
];
function Description(props) {
  const hotelId = useParams();

  const hotels = useSelector((state) => state.combinHotel.hotels);

  const hotel = hotels.find((hotel) => hotel.id == hotelId.id);
  const dispatch = useDispatch();
  const fa = hotel.facility.split(",");
  useEffect(() => {
    console.log(fa);
  }, [dispatch]);

  const list = fa.map((item) => ({ icon: "check", text: item }));

  return (
    <>
      <div className="row text-dark my-3" style={{ textAlign: "start" }}>
        <div className="col-md-3">
          <h3>Description</h3>
        </div>

        <div className="col-md-9 ">
          <p>{hotel.description}</p>
          <h4 className="py-3">Hotel facilities</h4>
          <p>{hotel.facility_desc}</p>
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
      }}
    >
      {list}
    </div>
  );
}

function Icons(props) {
  const hotelId = useParams();

  const hotels = useSelector((state) => state.combinHotel.hotels);

  const hotel = hotels.find((hotel) => hotel.id == hotelId.id);
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

function Review(props) {
  const fullDate = new Date(props.date);
  const date = fullDate.toDateString();

  return (
    <div className="border-bottom border-1 border-dark py-2">
      <div className="row d-flex justify-content-between">
        <div className="col-md-6 d-flex align-items-center justify-content-start">
          <div className=""></div>
          <span className="ms-3 fs-5">{props.name}</span>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <span className="text-muted fs-6"> {date} </span>
        </div>
      </div>
      <div>Rate:{props.rate}</div>
      <div className="row">
        <p className="my-4 col-6">{props.description}</p>
        {props.user == user.id && (
          <div className="my-4 col-6 d-flex justify-content-end">
            <a
              onClick={() => props.handleEdit(props)}
              style={{
                textDecoration: "none",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Edit
            </a>
            <a
              className=" mx-2 "
              onClick={() => props.handleDelete(props.id)}
              style={{
                textDecoration: "none",
                color: "red",
                cursor: "pointer",
              }}
            >
              Delete
            </a>
          </div>
        )}
      </div>

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

  const hotels = useSelector((state) => state.combinHotel.hotels);

  const hotel = hotels.find((hotel) => hotel.id == hotelId.id);

  const handleCloseModal = () => {
    const modal = document.getElementById("staticBackdrop");
    const backdrop = document.getElementsByClassName("modal-backdrop")[0];
    modal.classList.remove("show");
    backdrop.parentNode.removeChild(backdrop);
  };
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.combinHotel.hotelReviews);
  const [state, setState] = useState(reviews);
  // console.log(reviews);
  let register = useFormik({
    initialValues: {
      hotel: hotel.id,
      name: "",
      rating: "",
      description: "",
      user: user ? user.id : "",
      image: user ? user.image : null,
    },
    onSubmit: (values) => {
      dispatch(postHotelReviews(values));
      dispatch(getHotelReviews(hotel.id));
      handleCloseModal();

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
  };
  useEffect(() => {
    dispatch(getHotelReviews(hotel.id));
  }, []);
  // const Revs=reviews.map((el)=> <Review name={el.name} img={el.images} description={el.descripen} rate={el.rate} />)

  // Calculate the index of the first and last reviews to display based on pagination

  const [bookings, setBookings] = useState([]);
  const [editReview, setEditReview] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/hotel/bookingList`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching bookings");
        }
      })
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  const booking = bookings.find(
    (booking) =>
      booking.user == user.id &&
      booking.hotel == hotel.id &&
      booking.is_accepted == true
  );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Make DELETE request to delete the hotel
        fetch(`http://127.0.0.1:8000/api_review/delete-rate/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              dispatch(getHotelReviews(hotel.id));

              // history.push("/"); // Redirect to home after successful deletion
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire(
              "Error",
              "An error occurred while deleting your review.",
              "error"
            );
          });
      }
    });
  };
  const handleEdit = (review) => {
    setEditReview(review);

    Swal.fire({
      title: "Edit Review",
      html: `
      <lable>name</lable>
        <input id="name" type="text" class="swal2-input" value="${review.name}">
      <lable>rate</lable>
        <input id="rating" type="number" class="swal2-input" value="${review.rate}">
      <lable>description</lable><br>
        <textarea id="description" class="swal2-input">${review.description}</textarea>
      `,
      confirmButtonText: "Update",
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const rating = Swal.getPopup().querySelector("#rating").value;
        const description = Swal.getPopup().querySelector("#description").value;

        const updatedReview = {
          ...review,
          name,
          rating,
          description,
        };

        fetch(`http://127.0.0.1:8000/api_review/update-rate/${review.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedReview),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Error updating review.");
            }
          })
          .then((data) => {
            dispatch(getHotelReviews(hotel.id));
            Swal.fire("Success", "Review updated successfully.", "success");
          })
          .catch((error) => {
            Swal.fire("Error", error.message, "error");
          });
      },
    });
  };

  return (
    <>
      <div className="row text-dark ">
        <div className="col-md-3 d-flex flex-column">
          <h3>Reviews</h3>
          {booking && (
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Leave a Review
            </button>
          )}
          <div
            className="modal fade "
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
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
                        placeholder="Description"
                      ></textarea>
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
          {currentReviews ? (
            currentReviews.map((el) => (
              <div key={el.id}>
                <Review
                  id={el.id}
                  name={el.name}
                  img={el.image}
                  description={el.description}
                  rate={el.rating}
                  date={el.createAt}
                  handleDelete={handleDelete}
                  user={el.user}
                  handleEdit={handleEdit}
                />
              </div>
            ))
          ) : (
            <div>There is no Reviews</div>
          )}
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
  const [error, setError] = useState("");
  const hotels = useSelector((state) => state.combinHotel.hotels);
  //console.log(hotels.find((hotel) => hotel.id == hotelId.id).is_tv);
  // console.log(posts);
  //console.log(hotelId.id);
  const hotel = hotels.find((hotel) => hotel.id == hotelId.id);
  // console.log(hotel["name"])
  const [show, setShow] = useState(false);
  // console.log(data)
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!user) {
      setError("You must login first");
      setShow(false); // Set show to false to prevent showing the modal

      // alert('You must login first'); // Display an alert instead
    } else {
      setShow(true); // Show the modal if the user is true
    }
  };
  // Hide the alert after a certain delay
  // setTimeout(() => {
  // setShowAlert(false);
  // }, 3000); // Adjust the delay as needed
  const images = [
    {
      original: hotel.image,
      thumbnail: hotel.image,
    },
  ];

  return (
    <>
      <div className="container mt-5 ">
        {error && (
          <Alert key="danger" variant="danger">
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

            <Reviews />
          </div>
          {/* details */}
          <div className="col-md-4 cc ">
            <i class="fa-solid fa-phone fs-2 mt-4 mb-3 icon-d"></i>
            <p className="fs-4 icon-d m-0">
              {" "}
              <span className="sp-d ">Book</span> {hotel.name}
            </p>
            <p className="fs-3 phone-icon-d m-0">
              +201111<span> </span>045<span> </span>955
            </p>
            <p className="fs-6 text-muted m-2">
              Saturday to Thursday 9.00am - 7.30pm
            </p>
            {user !== null && user.type === "user" ? (
              <button className="btn btn-danger btn-regis" onClick={handleShow}>
                Book Your Room
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <BookingModal handleClose={handleClose} showModal={show} hotel={hotel} />
    </>
  );
}
