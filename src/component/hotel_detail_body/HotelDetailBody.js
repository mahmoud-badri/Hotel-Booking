import React, { useEffect, useState } from "react";
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

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "react-bootstrap";
import BookingModal from "../../pages/hotel-details/bookingModal";

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

function Description(props) {
    const list = [
        { icon: "check", text: "Lorem ipsum dolor sit amet" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "Ut est saepe munere ceteros" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "Lorem ipsum dolor sit amet" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
        { icon: "check", text: "Quidam percipitur instructior an eum" },
        { icon: "check", text: "No scripta electram necessitatibus sit" },
    ];
    return (
        <>
            <div className="row text-dark my-3" style={{ textAlign: "start" }}>
                <div className="col-md-3">
                    <h3>Description</h3>
                </div>

                <div className="col-md-9 ">
                    <p>
                        Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno
                        legimus insolens ad. Sit cu detraxit constituam, an mel iudico
                        constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens
                        in pro. Mea liber ridens inermis ei, mei legendos vulputate an,
                        labitur tibique te qui.
                    </p>
                    <h4 className="py-3">Hotel facilities</h4>
                    <p>
                        Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno
                        legimus insolens ad. Sit cu detraxit constituam, an mel iudico
                        constituto efficiendi.
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
    const list = props.iconlist.map((el) => {
        return (
            <div className={`d-flex flex-column`}>
                <i className={`fa-solid fa-${el.iconsrc} size-i text-muted`}></i>
                <span className="text-muted">{el.icontext}</span>
            </div>
        );
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
                    <span className="text-muted fs-6">- 10 March 2015 -</span>
                </div>
            </div>
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
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.combinHotel.hotelReviews);

    let register = useFormik({
        initialValues: {
            name: "",
            rate: "",
            description: "",
        },
        onSubmit: (values) => {
            dispatch(postHotelReviews(values));
            console.log(values);
        },
    });
    useEffect(() => {
        dispatch(getHotelReviews());
    }, [dispatch]);
    // const Revs=reviews.map((el)=> <Review name={el.name} img={el.images} description={el.descripen} rate={el.rate} />)

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
                                        <label htmlFor="rate"> Rate</label>
                                        <input
                                            value={register.values.rate}
                                            onChange={register.handleChange}
                                            type="number"
                                            name="rate"
                                            id="rate"
                                            className="form-control mb-3"
                                            placeholder="rate"
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
                                                className="btn bg-success text-white">
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-9 text-start py-4 ">
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
                </div>
            </div>
        </>
    );
}

export default function HotelDetailBody({ data }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const iconlist = [
        { iconsrc: "tv", icontext: "Plasma TV " },
        { iconsrc: "wifi", icontext: "Free Wifi" },
        { iconsrc: "person-swimming", icontext: "poll" },
        { iconsrc: "mug-hot", icontext: "BreakFast" },
        { iconsrc: "dog", icontext: "Pet allowed" },
        { iconsrc: "wheelchair", icontext: "Accessibiliy" },
        { iconsrc: "car", icontext: "Parking" },
    ];

    return (
        <>
            <div className="container mt-5 ">
                <div className="row">
                    {/* first col icons , carousel , rooms , reviews */}
                    <div className="col-md-8">
                        <div className="col-md-12 px-4 py-2 d-flex justify-content-between border-bottom border-1 border-dark">
                            <Icons iconlist={iconlist} />
                        </div>

                        <div className="col-md-12 pt-4">
                            <ImageGallery items={images} />
                        </div>

                        {/* 
        
        desc
        */}
                        <Description />
                        <RoomTypes />
                        <Reviews />
                    </div>
                    {/* details */}
                    <div className="col-md-4  cc ">
                        <i class="fa-solid fa-phone fs-2 mt-4 mb-3 icon-d"></i>
                        <p className="fs-4 icon-d">
                            {" "}
                            <span className="sp-d">Book</span> My Phone
                        </p>
                        <p className="fs-5 phone-icon-d ">
                            +456<span> </span>789<span> </span>0097
                        </p>
                        <p className="fs-6 text-muted">Monday to Friday 9.00am - 7.30pm</p>
                        <Button variant="primary" onClick={handleShow}>
                            Book Your Room
                        </Button>
                    </div>
                </div>
            </div>
            <BookingModal handleClose={handleClose} showModal={show} />
        </>
    );
}