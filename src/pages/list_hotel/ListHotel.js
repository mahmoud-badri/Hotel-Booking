// ListHotel.js

import React, { useEffect } from 'react';
import './ListHotel.css';
import CardListHotel from '../../component/card_list_hotel/CardListHotel';
import { useSelector, useDispatch } from 'react-redux';
import { gethotel } from '../../Redux/HotelAction';
import { useState } from 'react';
const ListHotel = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        gethotel()?.then((res) => {
            console.log(res)
            setHotels(res);
        });
    }, []);

    return (
        <div className='container'>
            {hotels && hotels.map((hotel) => (
                <div key={hotel.id}>
                    <CardListHotel
                        id={hotel.id}
                        image={hotel.image}
                        rate={hotel.rate}
                        status={hotel.status}
                        review={hotel.review}
                        name={hotel.name}
                        description={hotel.descripen}
                        governorate={hotel.governorate}
                        price={hotel.prices}
                    />
                </div>
            ))}

        </div>
    );
}

export default ListHotel;



