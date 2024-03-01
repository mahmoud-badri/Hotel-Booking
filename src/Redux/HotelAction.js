   
 
// HotelAction.js
import axios from "axios";

// Action types
export const GET_HOTEL_LIST_SUCCESS = 'GET_HOTEL_LIST_SUCCESS';
export const GET_HOTEL_BY_ID = 'GET_HOTEL_BY_ID';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

// Action creators
export const gethotel = () => (dispatch) => {
    console.log("Fetching hotel data...");
    return axios
        .get('https://retoolapi.dev/Ffu2bp/data')
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: GET_HOTEL_LIST_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
};

export const getHotelById = (id) => (dispatch) => {
    console.log(`Fetching hotel data for ID: ${id}`);
    return axios
        .get(`https://retoolapi.dev/Ffu2bp/data/${id}`)
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: GET_HOTEL_BY_ID,
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
};

export const addToWishlist = (hotel) => (dispatch, getState) => {
    const { combinHotel } = getState();
    const isAlreadyInWishlistIndex = combinHotel.wishlist.findIndex((item) => item.id === hotel.id);

    if (isAlreadyInWishlistIndex >= 0) {
        // If already in wishlist, dispatch an action to remove it
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: hotel.id,
        });
    } else {
        // If not in wishlist, dispatch an action to add it
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: hotel,
        });
    }
};

export const removeFromWishlist = (hotel) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: hotel.id,
    });
};

