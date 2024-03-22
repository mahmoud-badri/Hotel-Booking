import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

function MyNavbar() {
  const { contextLoggedIn, setContextLoggenIn } = useContext(LoggedInContext);
  const logOut = () => {
    localStorage.removeItem("loginUser");
    setContextLoggenIn("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h3>
            {" "}
            ITI <sub>bnb</sub>{" "}
          </h3>
        </Link>

        <button
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
              <Link
                className="nav-link active"
                aria-current="page"
                to="HotelsFilter"
              >
                List Hotels
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="Wishlist">
                WishList
              </Link>
            </li>
          </ul>

          <div className="d-flex m-2">
            <Link className="nav-link active" aria-current="page" to="Register">
              {`${!contextLoggedIn ? "Register" : ""}`}
            </Link>
          </div>

          <div className="d-flex m-2">
            {`${contextLoggedIn ? "Hello " + contextLoggedIn.username : ""}`}
          </div>

          {contextLoggedIn && (
            <div className="nav-item">
              <Link to="Dashboard" className="nav-link">
                Dashboard
              </Link>
            </div>
          )}

          <div className="d-flex m-2">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              onClick={logOut}
            >
              {`${contextLoggedIn ? "Log out" : ""}`}
            </Link>
          </div>

          <div className="d-flex m-2">
            <Link to="/userprofile">
              <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
