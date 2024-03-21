import React from "react";
import "./card.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Card({ card }) {
  return (
    <NavLink to={"/hotelDetails"} state={card}>
      <div className="card-box">
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
          {card.imgSrc.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} className="card-img" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="card-info-flex">
          <h3 className="card-title">{card.name}</h3>
          <div className="card-rating">
            <StarRateRoundedIcon />
            <p>{card.rating}</p>
          </div>
        </div>
        <p style={{ margin: 0, color: "var(--font-grey)" }}>
          {card.description}
        </p>
        {/* <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p> */}
        <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
          <span style={{ fontWeight: "600" }}>${card.prices}</span> night
        </p>
      </div>
    </NavLink>
  );
}

export default Card;