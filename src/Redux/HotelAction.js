import axios from "axios";

export const GET_HOTEL_LIST_SUCCESS = 'GET_HOTEL_LIST_SUCCESS';
export const ADD_HOTEL_SUCCESS = 'ADD_HOTEL_SUCCESS';
export const GET_HOTEL_BY_ID = 'GET_HOTEL_BY_ID';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const gethotel = async (hotelData) => {
    try {
        const res = await axios.get('http://127.0.0.1:8000/hotel/', hotelData, {
        
            headers: {
                'Content-Type': 'multipart/form-data'
                  
            }
           
        });
        return res.data 
        // dispatch({ type: ADD_HOTEL_SUCCESS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};


export const addHotel = async (hotelData, userId) => {
  try {
      const res = await axios.post('http://127.0.0.1:8000/hotel/add/', hotelData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      return res.data;
  } catch (error) {
      console.log(error);
  }
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



// export const getHotelReviews = () => (dispatch) => {
//     console.log(`Fetching hotel data `);

//     return axios.get(`https://api-generator.retool.com/qCCCiu/data`)
//         .then((res) => {
//             console.log("Data received:", res.data);
//             dispatch({
//                 type: 'GET_HOTEL_REVIEWS',
//                 payload: res.data,
//             });
//         })
//         .catch((err) => console.log("Error fetching data:", err));
// };


export const postHotelReviews = (review) => (dispatch) => {
    console.log(`Fetching hotel data for ID:`, review);

    return axios({ method: 'POST', url: `https://api-generator.retool.com/qCCCiu/data`, headers: { "Content-Type": "application/json" }, data: review })
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'POST_HOTEL_REVIEWS',
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));

};

export const putHotelReviews = (id, review) => (dispatch) => {
    console.log(`Updating hotel data for ID:`, id);

    return axios({ method: 'PUT', url: `https://api-generator.retool.com/qCCCiu/data/${id}`, headers: { "Content-Type": "application/json" }, data: review })
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

    return axios({ method: 'DELETE', url: `https://api-generator.retool.com/qCCCiu/data/${id}` })
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: 'DELETE_HOTEL_REVIEWS',
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));

};