import React, { useState, useContext } from "react";
import axios from "axios";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import "./profil.css";
import "./form.css";

import { AuthContext } from "../../Context/AuthContext";

function UserProfilePage() {
  const authContext = useContext(AuthContext);
  // const isLoggedIn = authContext.isLoggedIn;
  const currentUser = authContext.currentUser;

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    image: null,
    phone: "",
  });
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setUserData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("address", userData.address);
      formData.append("image", userData.image);
      formData.append("phone", userData.phone);

      await axios.post(
        "https://api-generator.retool.com/4tQuPx/data",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setShowForm(!showForm);

      // setIsSubmitted(true);
    } catch (error) {
      console.error("Error posting user data:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    // setIsSubmitted(false); // Reset submission status when showing form
  };

  return (
    <div className="mb-3 container text-dark">
      <h2 className="text-center mb-4"> Profile </h2>
      {showForm && (
        <div className="container mt-5 mb-5 d-flex justify-content-center body2">
          <div className="card2 px-1 py-4">
            <div className="card-body">
              <h6 className="card-title m-3"> personal information :</h6>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      {/* <label for="name">Name</label> */}{" "}
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={currentUser.name}
                        onChange={handleChange}
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="input-group">
                        {" "}
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          value={currentUser.email}
                          onChange={handleChange}
                          placeholder="Mobile"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <div className="input-group">
                        {" "}
                        <input
                          className="form-control mb-2"
                          type="text"
                          placeholder="Address"
                          name="address"
                          value={userData.address}
                          onChange={handleChange}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <small className="agree-text">
                        <label for="c" className="form-label">
                          Image:
                        </label>
                      </small>
                      <div className="input-group">
                        {" "}
                        <input
                          className="form-control"
                          type="file"
                          name="image"
                          id="c"
                          placeholder="Address"
                          onChange={handleChange}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                  {" "}
                  <small className="agree-text">
                    By Booking this appointment you agree to the
                  </small>{" "}
                  <a href="#" className="terms">
                    Terms &amp; Conditions
                  </a>{" "}
                </div>{" "}
                <button class="btn btn-primary m-3" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {!showForm && (
        <div className="container d-flex justify-content-center body">
          <div className="card_profile p-3 py-4">
            <div >
              {userData.image && (
                <img
                  src={URL.createObjectURL(userData.image)}
                  width={100}
                  className="rounded-circle"
                  alt="User-Profile-Image"
                />
              )}

              <h5 style={{ color: "white" }} className="mt-2">
              User Name :  {currentUser.name}
              </h5>
              <span style={{ color: "white" }} className="mt-1 clearfix">
              <hr style={{ color: "white" }} className="line" />
              </span>
              <div className="row mt-3 mb-3">
                <div className="col-md- ms-">
                  <h5 style={{ color: "white" }}>Address : {userData.address} </h5>
                  <span className="num"></span>
                </div>
                <span style={{ color: "white" }} className="mt-1 clearfix">
                <hr style={{ color: "white" }} className="line" />
              </span>
                {/* <div className="col-md-4">
          <h5>Projects</h5>
          <span className="num">10</span>
        </div> */}
                <div className="col-md- ms-">
                  <h5 style={{ color: "white" }}>Email : {currentUser.email}</h5>
                </div>
              </div>

              <hr style={{ color: "white" }} className="line" />
              {/* <small style={{ color: "white" }} className="mt-4">
                I am an android developer working at google Inc at
                california,USA
              </small> */}

              <div className="social-buttons mt-5">
                <button className="neo-button">
                  <FacebookRoundedIcon></FacebookRoundedIcon>
                </button>
                <button className="neo-button">
                  <GoogleIcon></GoogleIcon>
                </button>

                <button className="neo-button">
                  <LinkedInIcon></LinkedInIcon>
                </button>

                <button className="neo-button">
                  <YouTubeIcon></YouTubeIcon>
                </button>

                <button className="neo-button">
                  <XIcon></XIcon>
                </button>
              </div>

              <div className="profile mt-5">
                <button className="profile_button px-5" onClick={toggleForm}>
                  Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfilePage;
