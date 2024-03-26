import React, { useEffect } from 'react';
import './ListHotel.css';
import CardListHotel from '../../component/card_list_hotel/CardListHotel';
import { useSelector, useDispatch } from 'react-redux';
import { gethotel } from '../../Redux/HotelAction';
import { useState } from 'react';

const ListHotel = () => {
    const [hotels, setHotels] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        gethotel()?.then((res) => {
            console.log(res)
            setHotels(res);
        });
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredHotels = hotels.filter((hotel) =>
        hotel.governorate.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='container'>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder="Search By Governorate..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="my-4 d-block m-auto form-control w-50"
                />
            </div>
            {filteredHotels.map((hotel) => (
                <div key={hotel?.id}>
                    <CardListHotel
                        id={hotel.id}
                        image={hotel.image}
                        rating={hotel.rating}
                        status={hotel.status}
                        review={hotel.review}
                        name={hotel.name}
                        //description={hotel.description}
                        governorate={hotel.governorate}
                        address={hotel.address}
                        price={hotel.prices}
                        hotel={hotel}
                    />
                </div>
            ))}
        </div>
    );
};

export default ListHotel;