// HotelReducer.js

const INITIAL_VALUES = {
    hotels: [],
    wishlist: [],
    hotelReviews:[],
    currentHotel: null,
};

export default function HotelReducer(state = INITIAL_VALUES, action) {
    switch (action.type) {
        case 'GET_HOTEL_LIST':
            return {
                ...state,
                hotels: action.payload
            }
        case 'GET_HOTEL_BY_ID':
            return {
                ...state,
                currentHotel: action.payload,
            };


        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload],
            };

        case 'GET_HOTEL_REVIEWS':
            return {
                ...state,
                hotelReviews: action.payload,
            };
        case 'POST_HOTEL_REVIEWS':
            return {
                ...state,
                
            };
        case 'PUT_HOTEL_REVIEWS':
            return {
                ...state,
                
            };
        case 'DELETE_HOTEL_REVIEWS':
            return {
                ...state,
                
            };

        default:
            return state;
    }
}
