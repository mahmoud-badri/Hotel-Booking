import {
    ADD_HOTEL_SUCCESS,
    GET_HOTEL_BY_ID,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
} from './HotelAction';

const INITIAL_VALUES = {
    hotels: [],
    wishlist: [],
    hotelReviews: [],
    currentHotel: null,
    facilities: []
};

const hotelReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_HOTELS_LIST':
            return {
                ...state,
                hotels: action.payload
            }
        case ADD_HOTEL_SUCCESS:
            return {
                ...state,
                hotels: [action.payload, ...state.hotels],
            };
        case GET_HOTEL_BY_ID:
            return {
                ...state,
                currentHotel: action.payload,
            };
        // case GET_HOTEL_BY_ID:
        //         return {
        //             ...state,
        //             currentHotel: action.payload,
        //         };    
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload],
            };
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => item.id !== action.payload),
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
                currentHotel: action.payload,

            };
        case 'PUT_HOTEL':
            const updatedhotel = action.payload;
            const updatedHotelsList = state.hotels.map((hotel) =>
                hotel.id === updatedhotel.id ? updatedhotel : hotel
            );


            return {
                ...state,
                hotels: updatedHotelsList
            };
        case 'DELETE_HOTEL_REVIEWS':
            return {
                ...state,

            };
        case 'GET_FACILITIES':
            return {
                ...state,
                facilities: action.payload
            }
        default:
            return state;
    }
};

export default hotelReducer;
// const INITIAL_VALUE = {
//     hotels: []
// }

// export default function hotelReducer(state= INITIAL_VALUE, action){
//     switch(action.type){
//         case 'GET_HOTELS_LIST':
//             return{
//                 ...state,
//                 hotels: action.payload
//             }
//         default:
//            return state
//     }
// }