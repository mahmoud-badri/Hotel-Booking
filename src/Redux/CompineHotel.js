import { combineReducers } from 'redux';
import hotelReducer from './HotelReducer';


export default combineReducers({
    combinHotel: hotelReducer,
});
