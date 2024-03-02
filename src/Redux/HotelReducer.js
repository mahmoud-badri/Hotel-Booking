 
import { GET_HOTEL_LIST_SUCCESS, GET_HOTEL_BY_ID, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './HotelAction';

const INITIAL_VALUES = {
    hotels: [],
    wishlist: [],
    hotelReviews:[],
    currentHotel: null,
};

const hotelReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case GET_HOTEL_LIST_SUCCESS:
            return {
                ...state,
                hotels: action.payload,
            };
        case GET_HOTEL_BY_ID:
            return {
                ...state,
                currentHotel: action.payload,
            };
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
                    
                };
        case 'DELETE_HOTEL_REVIEWS':
                return {
                    ...state,
                    
                };
    
        default:
                return state;
        }    

    


};

export default hotelReducer;
