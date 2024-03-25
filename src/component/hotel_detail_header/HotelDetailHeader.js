import React, { Children } from "react";
import "./HotelDetailHeader.css";

export function Rating(props) {
  return (
    <>
      {/* {
            [...Array(props.star).keys()].map((el)=> <i className={`fa-solid fa-${props.icon} ${props.color1}`}></i>).concat(
                [...Array(5-props.star).keys()].map((el)=> <i className={`fa-regular fa-${props.icon} ${props.color2}`}></i>)
            )
        
        } */}
    </>
  );
}
{
  /* <div className="col-md-3 bg-danger  offset-1 fs-2 py-2 align-item-center  ">
        <i class="fa-solid fa-phone"></i>
        <p className='fs-5'>Book My Phone</p>
        <p className='fs-5'>+456<span> </span>789<span> </span>0097</p>
        <p className='fs-6 text-muted'>Monday to Friday 9.00am - 7.30pm</p>
          
        </div> */
}

export default function HotelDetailHeader({ data }) {
  return (
    <>
      <header className="position-relative">
        <div className="container position-absolute con bottom-0">
          <div className="row d-flex justify-content-between position-relative  ">
            <div className="col-md-6 d-flex  position-relative   flex-column">
              <div className="me-auto ">
                {/* <Rating star={3} icon={"star"} color1={"color-i"} color2={"text-light"} /> */}
              </div>
              <h1 className="me-auto text-light"> { data?.name }</h1>
              <p className="text-light me-auto  ">
              { data?.address }
              </p>
              <p className="text-light me-auto">
              { data?.rating }
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-end">
              <p className="ms-auto text-light">
                from/per night{" "}
                <span className="d-head-span">
                  <sup className="sup">$</sup> { data?.prices }
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}