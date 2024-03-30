import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./heroSection.css"; // Import CSS file for custom styling

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderImages = [
    "https://www.kayak.co.in/rimg/kimg/ce/7a/9edeaa63-62da7057-0.jpeg",
    "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    "https://travelhub-mu.com/wp-content/uploads/2019/08/6214153-thegem-gallery-fullwidth.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      {/* Welcome message */}
      <div className="welcome-message">
        <h1 className="animated-text">Welcome to TicTac</h1>
        <p>Your Ideal Destination for Memorable Hotel Stays</p>
      </div>
      {/* Slideshow */}
      <div className="slideshow-container">
        <div className="slide active">
          <img
            src={sliderImages[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            className="slide-image"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      </div>
      {/* Book Now button */}
      <div className="hero-content">
        <Link to="/HotelsFilter">
          <button className="book-now-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
