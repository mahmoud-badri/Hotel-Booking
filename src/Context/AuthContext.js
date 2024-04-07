import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [token, setToken] = useState("");
  const [bookingsCont, setBookingsCont] = useState([]);
  const history = useHistory();

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");
      if (user) {
        setCurrentUser(user);
        setToken(token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const login = (token, user) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentUser(false);
    history.push("/");
  };
  
  useEffect(() => {
    setCurrentUser(localStorage.getItem("user"));
  }
  , []);

  const current_user = JSON.parse(localStorage.getItem('user'));
  function getBookings() {
    fetch(`http://127.0.0.1:8000/hotel/booking_by_hotel_owner/${current_user.id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching bookings');
                }
            })
            .then(data => setBookingsCont(data))
            .catch(error => console.error('Error:', error));
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        currentUser,
        setCurrentUser,
        token,
        setToken,
        login,
        logout,
        setIsLoggedIn,
        getBookings,
        bookingsCont
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };