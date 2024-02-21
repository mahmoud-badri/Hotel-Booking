// HotelAction.js

import axios from "axios";

export const gethotel = () => (dispatch) => {
    console.log("Fetching hotel data...");
    return axios.get('https://retoolapi.dev/Ffu2bp/data')
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'GET_HOTEL_LIST',
                payload: res.data
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
};

export const getHotelById = (id) => (dispatch) => {
    console.log(`Fetching hotel data for ID: ${id}`);
    return axios.get(`https://retoolapi.dev/Ffu2bp/data/${id}`)
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'GET_HOTEL_BY_ID',
                payload: res.data,  // Update the payload to be the hotel object
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
};

export const addToWishlist = (hotel) => (dispatch) => {
    dispatch({
        type: 'ADD_TO_WISHLIST',
        payload: hotel,
    });
};
