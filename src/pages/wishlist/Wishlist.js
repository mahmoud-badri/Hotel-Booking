 
import React from 'react';
import { connect } from 'react-redux';
import CardListHotel from '../../component/card_list_hotel/CardListHotel';

import { useSelector, useDispatch } from 'react-redux';


const Wishlist = () => {

    const dispatch = useDispatch();
    
    const wishlistItems = useSelector((state) => state.combinHotel.wishlist);  

    return (
        <div>
            <h2>Wishlist</h2>
            <div className='container'>
                {wishlistItems.map((hotel) => (
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
                            price={hotel.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default (Wishlist);
