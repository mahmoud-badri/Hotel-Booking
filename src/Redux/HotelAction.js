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

export const getHotelReviews = (hotel) => (dispatch) => {
    console.log(`Fetching hotel data for ID: ${hotel}`);

    return axios.get(`https://api-generator.retool.com/qCCCiu/data?name=${hotel}`)
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'GET_HOTEL_REVIEWS',
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
   
};


export const postHotelReviews = (review) => (dispatch) => {
    console.log(`Fetching hotel data for ID:`, review);
    
    return axios({method: 'POST', url:`https://api-generator.retool.com/qCCCiu/data`, headers: {"Content-Type":"application/json"}, data: review})
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'POST_HOTEL_REVIEWS',
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
   
};

export const putHotelReviews = (id,review) => (dispatch) => {
    console.log(`Updating hotel data for ID:`, id);
    
    return axios({method: 'PUT', url:`https://api-generator.retool.com/qCCCiu/data/${id}`, headers: {"Content-Type":"application/json"}, data: review})
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'PUT_HOTEL_REVIEWS',
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
   
};

export const deleteHotelReviews = (id) => (dispatch) => {
    console.log(`Deleting hotel data for ID:`, id);
    
    return axios({method: 'DELETE', url:`https://api-generator.retool.com/qCCCiu/data/${id}`})
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'DELETE_HOTEL_REVIEWS',
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
   
};