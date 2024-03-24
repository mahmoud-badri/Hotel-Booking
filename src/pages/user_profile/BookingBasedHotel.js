import React, { useEffect, useState } from "react";
import axios from "axios";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import "./profil.css";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../Redux/HotelAction";

function BookinBasedHotel() {
    var user = localStorage.getItem("user")
    user = JSON.parse(user)
    const [userHotel, setUserHotel] = useState('');

    const dispatch = useDispatch()
        const hotels = useSelector((state) => state.combinHotel.hotels)
            // console.log(hotels);
       
        useEffect(() => {
            dispatch(getHotel())

          }, [dispatch]);
          hotels.map((hotel)=>(
            // book.hotel.user.id === user.hotel && setbookingHotel(result.data)
         
             hotel.user ===user.id &&   setUserHotel(hotel)
          
        ))
        // console.log(userHotel.id);
const [booking, setbooking] = useState([]);
const [bookingHotel, setbookingHotel] = useState([]);

        const fetchHotels = async () => {
            const result = await axios.get(`http://localhost:8000/hotel/bookingList`);
            setbooking(result.data)
    
            // console.log(result.data)
            
        }
    
        useEffect(() => {
            fetchHotels();
            // booking.map((book)=>(
            //     book.hotel === userHotel.id && setbookingHotel(book)
            //     // console.log(userHotel)

            // ))
            // console.log(bookingHotel);

        }, [])
  return (
   <>
  {bookingHotel && bookingHotel.map((book) => (
                
                <div key={book.id}>
                   book.user
                </div>
            ))}
   </>
  );
}

export default BookinBasedHotel;
