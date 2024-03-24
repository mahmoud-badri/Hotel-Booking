import React from "react";
import HotelDetailHeader from "../../component/hotel_detail_header/HotelDetailHeader";
import HotelDetailBody from "../../component/hotel_detail_body/HotelDetailBody";
import Booking from "./bookingApi";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
export default function HotelDetails() {
  const { state } = useLocation();
  return (
    <div>
      <HotelDetailHeader data={state} />
      <Booking />
      <HotelDetailBody data={state} />
    </div>
  );
}
