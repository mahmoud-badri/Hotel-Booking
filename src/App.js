 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import Wishlist from "./pages/wishlist/Wishlist";
import MyNavbar from "./component/NavBar/Navbar";
import HotelDetails from "./pages/hotel-details/HotelDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Authorization/Register";
import Login from "./pages/Authorization/Login";
import HotelsFilter from "./pages/HotelsFilter";
import UserProfilePage from "./pages/user_profile/user_profile";
import Home from "./pages/Homepage/home_page";
import ParticlesComponent from "./component/particles/particles";
import "bootstrap/dist/css/bootstrap.min.css";
import ListHotel from "./pages/list_hotel/ListHotel";
import HotelDashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <ParticlesComponent id="particles" />
        <Switch>
            {/* <Route exact path={"/ListHotel"} component={ListHotel}/> */}
            <Route exact path={"/HotelsFilter"} component={HotelsFilter}/>
            <Route exact path={"/HotelDetails"} component={HotelDetails} />
            <Route exact path={"/ListHotel"} component={ListHotel}/>


            <Route exact path={"/Wishlist"} component={Wishlist} />
            <Route exact path={"/Register"} component={Register} />
            <Route exact path={"/Login"} component={Login} />
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/userprofile"} component={UserProfilePage} />

          
           <Route exact path={"/Dashboard"} component={HotelDashboard} />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
 