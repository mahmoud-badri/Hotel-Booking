import React from 'react'
import './CardListHotel.css'
import { useDispatch } from 'react-redux';
import { getHotelById, addToWishlist } from '../../Redux/HotelAction';
const CardListHotel = (props) => {
    const dispatch = useDispatch();

    const handleHeartIconClick = (hotel) => {
        dispatch(getHotelById(hotel.id));
        dispatch(addToWishlist(hotel));
    };
    



    return (
        //=======================================================================================================

        <div className="container-fluid px-4 py-5 mx-auto ">
            <div className="row d-flex justify-content-center ">
                <div className="card border-0 ">
                    <div className="row set-p justify-content-center">
                        <div className="col-sm-4 px-0">

                        <button className='btn-icon' onClick={() => handleHeartIconClick(props)}>
                        <i className="fa-regular fa-heart fa-lg"></i>
                    </button>
                    

                            <img className="image" src={props.image} alt="Card" />

                        </div>

                        <div className="col-sm-8 ">
                            <div className="row px-3 mt-4 mb-3 ">
                                <div className="d-flex align-items-center ">
                                    <p className="rating mb-0 px-2 mr-3 me-2"><strong>{props.rate}</strong></p>
                                    <p className="text-primary mb-0 mr-2 grade me-2"><strong>{props.status}</strong></p>
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
                                <h5 className="mb-1 details">{props.description} </h5>
                            </div>
                            <div className="row px-3">
                                <p className="text-left address"> {props.governorate}, Egypt &middot; 1 km from Great Sphinx.</p>
                            </div>
                            <div className="line"></div>
                            <div className="row px-3 mt-3 ">
                                <h5 className="text-secondary mb-1 suite">Sky Suite</h5>
                            </div>
                            <div className="row px-3">
                                <h2 className="text-success mb-1 font-weight-bold price">${props.price}</h2>
                            </div>
                            <div className="row px-3 mb-3">
                                <p className="text-muted mb-0 taxes">+ $14 taxes and charges</p>
                            </div>
                            <button className='btn btn-success btn-regis me-2'>ENQUIRY</button>
                            <button className='btn btn-danger btn-regis'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*/=====================================================================================================*/}
            {/*///=======================================================================================================*/}
        </div>

    )
}

export default CardListHotel