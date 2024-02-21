// HotelReducer.js

const INITIAL_VALUES = {
    hotels: [],
    wishlist: [],
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

        default:
            return state;
    }
}
