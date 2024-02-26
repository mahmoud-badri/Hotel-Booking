import React from 'react';
import ListHotel from './list_hotel/ListHotel';
import AllInfoFilter from '../component/filter/AllInfoFilter';

// home function to add List Hotels and Filter in one page 
const HotelsFilter = () => {
    return (
        <div className="d-flex justify-content-evenly">
            <AllInfoFilter />
            <ListHotel />
        </div>
    );
}

export default HotelsFilter;
