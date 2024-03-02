import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Wishlist from "./pages/wishlist/Wishlist";
import MyNavbar from "./component/NavBar/Navbar";

import Register from "./pages/Authorization/Register";
import Login from "./pages/Authorization/Login";


import "bootstrap/dist/css/bootstrap.min.css";
import HotelsFilter from "./pages/HotelsFilter";
import UserProfilePage from "./pages/user_profile/user_profile";

// import HotelsFilter from "./pages/HotelsFilter";
import Home from "./pages/Homepage/home_page";
import ParticlesComponent from "./component/particles/particles";

import Appointment from "./pages/Appointment/Appointment";
import ListHotel from "./pages/list_hotel/ListHotel";
import { LoggedInContext } from './Context/loggedUser.js';


function App() {
  const [contextLoggedIn, setContextLoggenIn] = useState("")

  return (
    <div className="App">
    <LoggedInContext.Provider value={{contextLoggedIn, setContextLoggenIn}}>

      <BrowserRouter>


        <MyNavbar />
         <ParticlesComponent id="particles" />
        <Switch>
            <Route exact path={"/ListHotel"} component={ListHotel}/>
            <Route exact path={"/Wishlist"} component={Wishlist} />
            <Route exact path={"/Register"} component={Register} />
            <Route exact path={"/Login"} component={Login} />
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/userprofile"} component={UserProfilePage} />
            <Route exact path={"/Appointment"} component={Appointment} />
        </Switch>
      </BrowserRouter>
      </LoggedInContext.Provider>

    </div>
  );
}

export default App;
