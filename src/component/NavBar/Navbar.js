import React, { useContext, useEffect } from "react";
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
import { AuthContext } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MyNavbar() {
  const { contextLoggedIn, setContextLoggenIn } = useContext(LoggedInContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const isLoggedIn = authContext.isLoggedIn;
  const currentUser = authContext.currentUser;

  useEffect(() => {
    history.push("/");
  }, [isLoggedIn, currentUser]);

  const logOut = () => {
    localStorage.removeItem("loginUser");
    setContextLoggenIn("");
    authContext.logout();
  };
  
  var user = localStorage.getItem("user")
  user = JSON.parse(user)

  return (
    <>
      {/* First Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <h3>
              {" "}
              ITI <sub>bnb</sub>{" "}
            </h3>
          </Link>
          <Form className="d-flex mx-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            {isLoggedIn && (
              <Link to="/userprofile">
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Second Navbar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/HotelsFilter">
                List Hotels
              </Nav.Link>
              <Nav.Link as={Link} to="/Wishlist">
                WishList
              </Nav.Link>
              <Nav.Link as={Link} to="/AddHotelForm">
                Add Hotel
              </Nav.Link>
              {!isLoggedIn ? (
                <Nav.Link as={Link} to="/Register">
                  Register
                </Nav.Link>
              ) : (
                <>
                  <div className="d-flex m-2">
                    {`Hello  ${user.name}`}
                  </div>
                  <Nav.Link as={Link} to="/Dashboard">
                    Dashboard
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" onClick={logOut}>
                    log out
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
