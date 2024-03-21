import React from "react";
import { list, list2 } from "../../assets/cards/cardslist";
import Cards from "../../component/home_cards/cardindex";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return(
  <>
    <Cards list={list} /> : <Cards list={list2} />
  </>
)}

export default Home;
