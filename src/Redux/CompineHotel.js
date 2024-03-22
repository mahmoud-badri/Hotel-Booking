import { combineReducers } from 'redux';
import hotelReducer from './HotelReducer';
import roomReducer from './RoomReducer';


export default combineReducers({
    combinHotel: hotelReducer,
    combineRoom : roomReducer,
});
