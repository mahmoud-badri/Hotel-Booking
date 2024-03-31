// import React from "react";
// import "./card.css";
// import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
// import { Link } from "react-router-dom";
// import { Button, Card } from "react-bootstrap";

// function CarD({ card }) {
//   return (
//     // <Link  style={{ fontWeight: "500",textDecoration: "none",color :"black"  }} to={{pathname: "/hotelDetails" ,state:card}} >
//     //   <div className="card-box bg-light" >
//     //   <h3 className="card-title m-2 bg-light">{card?.name}</h3>
//     //     <Swiper
//     //       slidesPerView={1}
//     //       spaceBetween={10}
//     //       loop={true}
//     //       mousewheel={true}
//     //       cssMode={true}
//     //       pagination={true}
//     //       navigation={true}
//     //       modules={[Pagination, Navigation]}
//     //       className="swiper-container">
//     //       {/* {card.image.map((src, i) => ( */}
//     //         <SwiperSlide >
//     //           <img src={card?.image} className="card-img" />
//     //         </SwiperSlide>
//     //       {/* ))} */}
//     //     </Swiper>
//     //     <div className="card-info-flex">

//     //       <div className="card-rating">
//     //         <StarRateRoundedIcon />
//     //       <p style={{ marginLeft : "10px"}}>{card?.rating}</p>
//     //       </div>

//     //     </div>
//     //     <p style={{  margin:"15px", color: "black"}}>
//     //       {card.description}
//     //     </p>
//     //     {/* <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p> */}
//     //     <p style={{ marginLeft : "200px", fontSize: "1.3rem", color: "black" }}>
//     //       <span style={{ fontWeight: "800" }}>${card?.prices}</span> <span style={{ fontWeight: "800" }} > night</span>
//     //     </p>
//     //   </div>
//     // </Link>
//     <div style={{ display: "inline-block" }} className="card-box ">
//       <Card style={{ width: "20rem" }} className="m-1">
//         <Card.Header>
//           <Card.Title className="text-center">{card?.name}</Card.Title>
//           {/* <button className="btn btn-success" style={{borderRadius:"50%"}}>{avatar}</button> */}
//         </Card.Header>

//         <Card.Img
//           variant="top"
//           src={card?.image}
//           style={{ width: "286px", height: "192px", margin: "5px auto 0" }}
//         />
//         <Card.Body>
//           <Card.Text>Governorate: {card.governorate}</Card.Text>
//         </Card.Body>

//         <Card.Body>
//           {/* <StarRateRoundedIcon /> */}
//           {card?.rating}
//         </Card.Body>
//         <Card.Footer className="d-flex justify-content-between align-items-center">
//           <div
//             style={{ width: "40%" }}
//             className="d-flex justify-content-start align-items-center"
//           >
//             <h4 style={{ fontWeight: "700" }}>Price: </h4>{" "}
//             <h5 className="ml-1">
//               <span className="badge bg-danger rounded-pill">
//                 {" "}
//                 {card?.prices} EGP
//               </span>
//             </h5>
//           </div>
//           <div style={{ width: "30%" }}>
//             <Link
//               style={{ fontWeight: "800" }}
//               to={{ pathname: `/HotelDetails/${card.id}`, state: card }}
//             >
//               <Button className="btn btn-warning text-white font-weight-bold  px-4 ml-0">
//                 Details
//               </Button>
//             </Link>
//           </div>
//         </Card.Footer>
//       </Card>
//     </div>
//   );
// }

// export default CarD;
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./card.css";

function CarD({ card }) {
  return (
    <div className="card-box">
      <div className="card-container">
        <img src={card.image} alt={card.name} className="card-img" />
        <div className="card-content">
          <h2 className="card-title">{card.name}</h2>
          <p className="card-text">Governorate: {card.governorate}</p>
          <p className="card-text">
            <span className="rating">Rating: {card.rating}</span>{" "}
            <span className="star-icon">★</span>
          </p>
        </div>
        <div className="card-footer">
          <div className="price">Price: {card.prices} EGP</div>
          <Link
            to={{ pathname: `/HotelDetails/${card.id}`, state: card }}
            className="details-btn"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarD;
