import React, { useEffect, useState } from "react";
import { list, list2 } from "../../assets/cards/cardslist";
import Cards from "../../component/home_cards/cardindex";
import "bootstrap/dist/css/bootstrap.min.css";
import { gethotel } from "../../Redux/HotelAction";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    gethotel()?.then((res) => {
      console.log(res)
      setData(res);
    });
  }, []);
  return (
    <>
      <Cards list={data} /> : <Cards list={list2} />
    </>
  );
}

export default Home;
