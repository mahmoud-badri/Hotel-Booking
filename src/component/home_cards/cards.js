import React from "react";
import "./card.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <Link  style={{ fontWeight: "500",textDecoration: "none",color :"black"  }} to={{pathname: "/hotelDetails" ,state:card}} >
      <div className="card-box bg-light" >
      <h3 className="card-title m-2 bg-light">{card?.name}</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          mousewheel={true}
          cssMode={true}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper-container">
          {/* {card.image.map((src, i) => ( */}
            <SwiperSlide >
              <img src={card?.image} className="card-img" />
            </SwiperSlide>
          {/* ))} */}
        </Swiper>
        <div className="card-info-flex">
          
          
          <div className="card-rating">
            <StarRateRoundedIcon />
          <p style={{ marginLeft : "10px"}}>{card?.rating}</p> 
          </div>
          
        </div>
        <p style={{  margin:"15px", color: "black"}}>
          {card.description}
        </p>
        {/* <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p> */}
        <p style={{ marginLeft : "200px", fontSize: "1.3rem", color: "black" }}>
          <span style={{ fontWeight: "800" }}>${card?.prices}</span> <span style={{ fontWeight: "800" }} > night</span> 
        </p>
      </div>
    </Link>
  );
}

export default Card;