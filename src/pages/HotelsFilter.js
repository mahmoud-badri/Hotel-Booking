import React from 'react';
import ListHotel from './list_hotel/ListHotel';
import AllInfoFilter from '../component/filter/AllInfoFilter';
import Carousel from '../component/details_for_hotel/Carousel.';
// home function to add List Hotels and Filter in one page 
const HotelsFilter = () => {
    return (

        <> <Carousel />
            <div className="d-flex justify-content-evenly">
                <AllInfoFilter />
                <ListHotel />
            </div>
        </>
    );
}

export default HotelsFilter;
