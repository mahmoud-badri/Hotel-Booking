import React, { useEffect, useState } from "react";
// import { list, list2 } from "../../assets/cards/cardslist";
import Cards from "../../component/home_cards/cardindex";
import "bootstrap/dist/css/bootstrap.min.css";
import { gethotel } from "../../Redux/HotelAction";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import HeroSection from './heroSection';
function Home() {
  const [hotels, setHotels] = useState([]);

        const fetchHotels = async () => {
            const result = await axios.get('http://127.0.0.1:8000/hotel/');
    
            console.log(result.data)
            setHotels(result.data)
        }
        useEffect(() => {
            fetchHotels();
        }, [])
        
  return (
    <>
    <HeroSection/>
      {hotels?.length >0 ?<Cards list={hotels} /> : <h2>No Data</h2>}
    </>
  );
}

export default Home;