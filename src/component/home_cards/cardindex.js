import React from "react";
import Card from "./cards.js";
import "./card.css";


function Cards({ list }) {
  console.log(list);
  return (
    <div className="cards-flex">
      {list?.map((card, i) => (
        <Card card={card} key={i} />
        
      ))}
    </div>
  );
}

export default Cards;
