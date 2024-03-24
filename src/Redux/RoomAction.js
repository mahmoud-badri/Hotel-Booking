import axios from "axios";
export const GET_ROOM_LIST_SUCCESS = 'GET_ROOM_LIST_SUCCESS';
export const ADD_ROOM_SUCCESS = 'ADD_ROOM_SUCCESS';
export const GET_ROOM_BY_ID = 'GET_ROOM_BY_ID';

export const getRoom = (hotel_id) => (dispatch) => {
    return axios.get(`http://127.0.0.1:8000/room/${hotel_id}`)
    .then ((res) => dispatch({
        type: "GET_ROOMS_LIST",
        payload: res.data
    }))
    .catch((err) => console.log(err))
    
}


export const addRoom = async (roomData) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/room/add/', roomData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data
    } catch (error) {
        console.log(error);
    }
};




export const getRoomById = (id) => (dispatch) => {
    console.log(`Fetching hotel data for ID: ${id}`);
    return axios
        .get(`http://127.0.0.1:8000/room/${id}`)
        .then((res) => {
            console.log("Data received:", res.data);
            dispatch({
                type: GET_ROOM_BY_ID,
                payload: res.data,
            });
        })
        .catch((err) => console.log("Error fetching data:", err));
};



