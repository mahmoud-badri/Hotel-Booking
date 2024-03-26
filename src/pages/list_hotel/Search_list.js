import React, { useState } from 'react';

const Search = ({ onChange, value }) => {
    return (
        <div className='search-container'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                placeholder="Search By Governorate..."
                value={value}
                onChange={onChange}
                className="my-4 d-block m-auto form-control w-50"
            />
        </div>
    );
};

export default Search;