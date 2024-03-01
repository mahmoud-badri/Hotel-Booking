 
import React from 'react'
import Filter from './Filter';
import './filter.css';
const AllInfoFilter = () => {

    const filterSections = [
        {
            title: 'PRICE',
            options: [
                { label: 'Less than 2000', defaultChecked: true },
                { label: '2000 - 3000', defaultChecked: false },
                { label: '3000 - 4500', defaultChecked: false },
                { label: '4500 - 6000', defaultChecked: false },
                { label: '6000 - 8000', defaultChecked: false },
                { label: '8000 - 10000', defaultChecked: false },
                { label: '10000 and Above', defaultChecked: false }
            ],
        },

        {
            title: 'PROPERTY TYPE',
            options: [
                { label: 'Hotels', defaultChecked: true },
                { label: 'Apartments', defaultChecked: false },
                { label: 'Guest houses', defaultChecked: false },
                { label: 'Resorts', defaultChecked: false },
                { label: 'Villas', defaultChecked: false },
                { label: 'Lodges', defaultChecked: false },
                { label: ' Holiday Homes', defaultChecked: false }
            ],
        },



        {
            title: 'AMENITIES',
            options: [
                { label: 'Parking', defaultChecked: true },
                { label: 'Pets Allowed', defaultChecked: false },
                { label: 'Room Service', defaultChecked: false },
                { label: 'Family Rooms', defaultChecked: false },
                { label: 'Free Wifi', defaultChecked: false },
                { label: 'Non-smoking Rooms', defaultChecked: false },
            ],
        },

        {
            title: 'ROOM FACILITIES',
            options: [
                { label: 'Air Conditioning', defaultChecked: true },
                { label: 'Desk', defaultChecked: false },
                { label: 'Balcony', defaultChecked: false },
                { label: 'Flat Screen TV', defaultChecked: false },
                { label: 'Coffe/Tea Maker', defaultChecked: false },
                { label: 'Washing Machine', defaultChecked: false },
            ],
        },
    ];


    return (
        <div className="filter-container">
            {filterSections.map((section, index) => (
                <Filter key={index} title={section.title} options={section.options} />
    ))}

        




</div>
    );
}

 export default AllInfoFilter;