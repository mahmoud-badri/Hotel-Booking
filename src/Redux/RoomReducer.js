import {
    ADD_ROOM_SUCCESS,
    GET_ROOM_BY_ID,
   
} from './RoomAction';

const INITIAL_VALUES = {
    rooms: [],
};

const roomReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case 'GET_ROOMS_LIST':
            return{
                ...state,
                rooms: action.payload
            }
        case ADD_ROOM_SUCCESS:
            return {
                ...state,
                rooms: [action.payload, ...state.rooms],
            };
        case GET_ROOM_BY_ID:
            return {
                ...state,
            };
       
        default:
            return state;
    }
};

export default roomReducer;
