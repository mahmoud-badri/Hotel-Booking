import React, { useEffect, useState } from "react";
import { list, list2 } from "../../assets/cards/cardslist";
import Cards from "../../component/home_cards/cardindex";
import "bootstrap/dist/css/bootstrap.min.css";
import { gethotel } from "../../Redux/HotelAction";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [hotels, setHotels] = useState([]);

        const fetchHotels = async () => {
            const result = await axios.get('http://localhost:8000/hotel/');
    
            console.log(result.data)
            setData(result.data)
        }
    
        useEffect(() => {
            fetchHotels();
        }, [])
  return (
    <>
      <Cards list={data} /> : <Cards list={list2} />
    </>
  );
}

export default Home;