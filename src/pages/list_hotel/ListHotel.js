import React, { useEffect, useState } from 'react';
import './ListHotel.css';
import CardListHotel from '../../component/card_list_hotel/CardListHotel';
import { useSelector, useDispatch } from 'react-redux';
import { getHotel } from '../../Redux/HotelAction';
import { Link } from "react-router-dom";
import Pagination from '../../component/Pagination/Pagintaion';

const ListHotel = () => {
    const dispatch = useDispatch();
    const hotels = useSelector((state) => state.combinHotel.hotels);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(6); // Set the number of hotels to display per page

    useEffect(() => {
        dispatch(getHotel());
    }, [dispatch]);

    // const ListHotel = () => {
//     const [hotels, setHotels] = useState([]);
//     useEffect(() => {
//         gethotel()?.then((res) => {
//             console.log(res)
//             setHotels(res);
//         });
//     }, []);


    // Calculate the index of the first and last hotels to display based on pagination
    const indexOfLastHotel = currentPage * pageSize;
    const indexOfFirstHotel = indexOfLastHotel - pageSize;
    const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

    // Function to handle page changes
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='container'>
            {/* Render hotels for the current page */}
            {currentHotels.map((hotel) => (
                <Link to={`/HotelDetails/${hotel.id}`} key={hotel.id}>
                    <div>
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
            {/* Render pagination component */}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(hotels.length / pageSize)}
                onPageChange={onPageChange}
                color="blue" // Change the color if needed
                width="40px" // Adjust the width of the page buttons if needed
            />
        </div>
    );
}

export default ListHotel;

