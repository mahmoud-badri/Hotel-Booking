// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./heroSection.css"; // Import CSS file for custom styling

// const HeroSection = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [weather, setWeather] = useState(null);
//   const apiKey = "ae22662dc02fca15c92e6d2c8d2aeecd"; // Replace 'YOUR_API_KEY' with your actual API key
//   const city = "Cairo"; // Replace 'YOUR_CITY' with the desired city for weather information
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   const sliderImages = [
//     "https://www.kayak.co.in/rimg/kimg/ce/7a/9edeaa63-62da7057-0.jpeg",
//     "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
//     "https://travelhub-mu.com/wp-content/uploads/2019/08/6214153-thegem-gallery-fullwidth.jpg",
//   ];

//   useEffect(() => {
//     // Fetch weather data
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeather(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//       });

//     // Set interval for slideshow
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval
//   }, [apiUrl, sliderImages.length]);

//   return (
//     <div className="hero-section">
//       {/* Welcome message */}
//       <div className="welcome-message">
//         <h1 className="animated-text">Welcome to TicTac</h1>
//         <p>Your Ideal Destination for Memorable Hotel Stays</p>
//       </div>
//       {/* Slideshow */}
//       <div className="slideshow-container">
//         <div className="slide active">
//           <img
//             src={sliderImages[currentImageIndex]}
//             alt={`Slide ${currentImageIndex}`}
//             className="slide-image"
//             style={{ width: "100%", height: "400px" }}
//           />
//         </div>
//       </div>
//       {/* Special Offers */}
//       <div className="special-offers">
//         <h2>Special Offers</h2>
//         <p>Discover exclusive deals on luxury stays</p>
//         {/* Book Now button */}
//         <div className="hero-content">
//           <Link to="/HotelsFilter">
//             <button className="book-now-button">Book Now</button>
//           </Link>
//         </div>
//       </div>
//       {/* Weather Widget */}
//       {/* {weather && weather.main && (
//         <div className="weather-widget">
//           <h2>Current Weather in {city}</h2>
//           <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
//           <p>Weather: {weather.weather[0].description}</p>
//         </div>
//       )} */}
//       {weather && weather.main && (
//         <div className="weather-widget">
//           <h2>Current Weather in {city}</h2>
//           <div className="weather-info">
//             <img
//               src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
//               alt="Weather Icon"
//               className="weather-icon"
//             />
//             <div>
//               <p className="temperature">
//                 {(weather.main.temp - 273.15).toFixed(1)}°C
//               </p>
//               <p className="weather-description">
//                 {weather.weather[0].description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./heroSection.css"; // Import CSS file for custom styling

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [weather, setWeather] = useState(null);
  const apiKey = "ae22662dc02fca15c92e6d2c8d2aeecd"; // Replace 'YOUR_API_KEY' with your actual API key
  const [city, setCity] = useState("Cairo"); // Default city
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const sliderImages = [
    "https://www.kayak.co.in/rimg/kimg/ce/7a/9edeaa63-62da7057-0.jpeg",
    "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    "https://travelhub-mu.com/wp-content/uploads/2019/08/6214153-thegem-gallery-fullwidth.jpg",
  ];

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    }

    // Fetch weather data
    if (latitude !== null && longitude !== null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }

    // Set interval for slideshow
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [apiKey, city, latitude, longitude, sliderImages.length]);

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
      {/* Special Offers */}
      <div className="special-offers">
        <h2>Special Offers</h2>
        <p>Discover exclusive deals on luxury stays</p>
        {/* Book Now button */}
        <div className="hero-content">
          <Link to="/HotelsFilter">
            <button className="book-now-button">Book Now</button>
          </Link>
        </div>
      </div>
      {/* Weather Widget */}
      {weather && weather.main && (
        <div className="weather-widget">
          <h2>Current Weather in {weather.name}</h2>
          <div className="weather-info">
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
              className="weather-icon"
            />
            <div>
              <p className="temperature">
                {(weather.main.temp - 273.15).toFixed(1)}°C
              </p>
              <p className="weather-description">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
