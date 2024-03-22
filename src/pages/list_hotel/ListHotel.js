// ListHotel.js

import React, { useEffect } from 'react';
import './ListHotel.css';
import CardListHotel from '../../component/card_list_hotel/CardListHotel';
import { useSelector, useDispatch } from 'react-redux';
import { getHotel } from '../../Redux/HotelAction';
import { useState } from 'react';
import axios from 'axios';
import Cards from '../../component/home_cards/cardindex';
import { list, list2 } from "../../assets/cards/cardslist";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"

const ListHotel = () => {
    // const dispatch = useDispatch();
    // const hotels = useSelector((state) => state.CompineHotel.hotels);

    // const [hotels, setHotels] = useState([]);
    // useEffect(() => {
    //     dispatch(gethotel()); 
    // }, [dispatch]);
    
    // axios.get('http://127.0.0.1:8000/room/hotels/') 
    // .then(response => {
    //     setData(response.data.message);
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    // });

       
        // const [hotels, setHotels] = useState([]);
        // const hotels = []
        // useEffect(() => {
        //   axios.get('http://127.0.0.1:8000/hotel/')
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     });
        // }, []);
        const dispatch = useDispatch()
        const hotels = useSelector((state) => state.combinHotel.hotels)
            console.log(hotels);
       
        useEffect(() => {
            dispatch(getHotel())

          }, [dispatch]);
    // const [hotels, setHotels] = useState([]);

    //     const fetchHotels = async () => {
    //         const result = await axios.get('http://localhost:8000/hotel/');
    
    //         console.log(result.data)
    //         setHotels(result.data)
    //     }
    
    //     useEffect(() => {
    //         fetchHotels();
    //     }, [])
    return (
        <div className='container'> 
            {hotels && hotels.map((hotel) => (
                <Link to={`/HotelDetails/${hotel.id}`}>
                <div key={hotel.id}>
                    <CardListHotel
                        id={hotel.id}
                        image={hotel.image}
                        status={hotel.status}
                        name={hotel.name}
                        description={hotel.descripen}
                        governorate={hotel.governorate}
                        price={hotel.prices}
                    />
                </div>
                </Link>
            ))}
{/* <Link to={`/productdetails/${product.id}`}></Link> */}
        </div>
    //     <>
    //   <Cards list={hotels} /> 
    // </>
    );
}

export default ListHotel;


