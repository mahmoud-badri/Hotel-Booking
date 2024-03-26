import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./nav.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoggedInContext } from "../../Context/loggedUser";
import { AuthContext } from "../../Context/AuthContext";

function MyNavbar() {
  const { contextLoggedIn, setContextLoggenIn } = useContext(LoggedInContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const isLoggedIn = authContext.isLoggedIn;
  const currentUser = authContext.currentUser;
  const [LocalValues, setLocalValues] = useState(JSON.parse(localStorage.getItem("userData")));

  useEffect(() => {
    history.push("/");
  }, [isLoggedIn, currentUser, history, LocalValues]);

  const logOut = () => {
    localStorage.removeItem("loginUser");
    localStorage.removeItem("userData");
    setContextLoggenIn("");
    authContext.logout();
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar navbar-expand-lg navbar_edit">
      <div className="container-fluid gap-4">
        <Link to="/" className="navbar-brand">
          <h3>
            Tic <sub>Tac</sub>{" "}
          </h3>
        </Link>

        <button
          style={{ background: "white" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="HotelsFilter">
                List Hotels
              </Link>
            </li>
            {LocalValues && LocalValues.type === "hotel" ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="AddHotelForm">
                    Add Hotel
                  </Link>
                </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="GetBooking"
                    >
                      Booking
                    </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link active" to="Wishlist">
                  WishList
                </Link>
              </li>
            )}
          </ul>
          <Form className="d-flex align-items-center gap-3">
            
            {!isLoggedIn ? (
              <>
                <div className="d-flex m-2">
                  <Link className="nav-link active" aria-current="page" to="Register">
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex m-2">Hello {user && user.name}</div>
                {LocalValues && LocalValues.type === "hotel" && (
                  <div className="nav-item">
                    <Link to="Dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </div>
                )}
                <div className="d-flex m-2">
                  <button to="/" onClick={logOut} className="Btn">
                    <div className="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>
                    <div className="text">Logout</div>
                  </button>
                </div>
              </>
            )}
          </Form>
          <div className="d-flex m-2">
            <Link to="/userprofile">
              <AccountCircleIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
