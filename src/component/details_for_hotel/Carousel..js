import React from 'react';
import pic1 from "../media/background1.jpg"
import pic2 from "../media/background2.jpg"
import pic3 from "../media/background3.jpg"
import "./Carousel.css";

const Carousel = () => {
    return (
        <div id="carouselMaterialStyle" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            {/* Inner */}
            <div className="carousel-inner  shadow-4-strong">
                {/* Single item */}
                <div className="carousel-item active">
                    <img src={pic1} className="d-block w-100" alt="Sunset Over the City" />
                </div>

                {/* Single item */}
                <div className="carousel-item">
                    <img src={pic2} className="d-block w-100" alt="Canyon at Night" />

                </div>
                {/* Single item */}
                <div className="carousel-item">
                    <img src={pic3} className="d-block w-100" alt="Cliff Above a Stormy Sea" />
                </div>
            </div>
            {/* Inner */}
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselMaterialStyle" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
