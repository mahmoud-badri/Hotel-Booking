// ListHotel.js

import React, { useEffect , useState } from 'react';
import './ListHotel.css';
import CardListHotel from '../../component/card_list_hotel/CardListHotel';
// import { useSelector, useDispatch } from 'react-redux';
import { gethotel } from '../../Redux/HotelAction'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ListHotel = () => {
    // const dispatch = useDispatch();
     // Update the selector 
    // const hotels = useSelector((state) => state.combinHotel.hotels);
    const [hotel, setHotel] = useState([]);
    useEffect(() => {
      gethotel()?.then((res) => {
        console.log(res)
        setHotel(res);
      });
    }, []);
    // useEffect(() => {
    //     dispatch(gethotel()); 
    // }, [dispatch]);

    return (
        <div className='container'>
            {hotel && hotel.map((hotel) => (
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
                        hotel={hotel}
                    />
                </div>
            ))}
            
        </div>
    );
}

export default ListHotel;



