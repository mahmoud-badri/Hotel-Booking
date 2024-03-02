  
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
   

   const {contextLoggedIn, setContextLoggenIn} = useContext(LoggedInContext)
  const logOut=()=>{
    localStorage.removeItem("loginUser")
    setContextLoggenIn("")
    
   }
 
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

    

        <Link to="/" className="navbar-brand">
        <h3> Tic <sub>Tac</sub> </h3> 
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
                to="ListHotel"
              >
                List Hotels
              </Link>
            </li>
            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="Register">
                                Register
                            </Link>
                        </li>
            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="HotelDetails">
                                HotelDetails
                            </Link>
                        </li>           
            <li className="nav-item">
              <Link className="nav-link" to="Wishlist">
                WishList
              </Link>
            </li>
            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            
          </form>

          <div className="d-flex m-2">
              <Link
                className="nav-link active"
                aria-current="page"
                to="Register"
              >
                {`${!contextLoggedIn ? "Register" :"" }`}
              </Link>
              </div>

          <div className="d-flex m-2">
              
             {`${contextLoggedIn ? 'Hello ' + contextLoggedIn.username : "" }`}  
              </div>

              <div className="d-flex m-2">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={logOut}
              >
                {`${contextLoggedIn ? "Log out" : ""    }`}
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
 