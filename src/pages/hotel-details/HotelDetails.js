import React from "react";
import HotelDetailHeader from "../../component/hotel_detail_header/HotelDetailHeader";
import HotelDetailBody from "../../component/hotel_detail_body/HotelDetailBody";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
export default function HotelDetails() {
  const { state } = useLocation();
  console.log({state});
  return (
    <div>
      <HotelDetailHeader data={state} />
      <HotelDetailBody data={state} />
    </div>
  );
}