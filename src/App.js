import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import "./App.css";
import React, { Component, useState } from "react";
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
import Appointment from "./pages/Appointment/Appointment";
import { LoggedInContext } from "./Context/loggedUser.js";
import HotelDashboard from "./pages/Dashboard/Dashboard";
import Footer from "./component/Footer/Footer.js";
import { AuthProvider } from "./Context/AuthContext.js";
import AddHotelForm from "./component/add_hotel_form/AddHotelForm.js";
import ListHotel from "./pages/list_hotel/ListHotel.js";
import AddRoomForm from "./component/add_room_form /AddRoomForm.js";
import GuardedRoute from './GuardedRoute';

function App() {
  const isAuthenticated = true; // Replace with actual authentication check
  const [contextLoggedIn, setContextLoggenIn] = useState("");

  return (
    <div className="App">
    <LoggedInContext.Provider value={{contextLoggedIn, setContextLoggenIn}}>

      <BrowserRouter>
      <AuthProvider>
        <MyNavbar />
        <ParticlesComponent id="particles" />
 
        <Switch>        

          <Route exact path={"/"} component={Home} />
          <Route exact path={"/ListHotel"} component={ListHotel} />
          <Route exact path={"/HotelDetails/:id"} component={HotelDetails} />

          <Route exact path={"/HotelsFilter"} component={HotelsFilter} />
          {/* <Route exact path={"/Wishlist"} component={Wishlist} /> */}
          <Route exact path={"/Register"} component={Register} />
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/userprofile"} component={UserProfilePage} />
          <Route exact path={"/Dashboard"} component={HotelDashboard} />
          <Route exact path={"/Appointment"} component={Appointment} />
          <Route exact path={"/AddHotelForm"} component={AddHotelForm} />
          <Route exact path={"/AddRoomForm"} component={AddRoomForm} />
          <PrivateRoute exact path="/Wishlist" component={Wishlist} isAuthenticated={isAuthenticated} />

         
        <GuardedRoute
          path="/HotelDetails/:id"
          component={Wishlist}
          isAuthenticated={HotelDetails}
        />
        </Switch>
        <Footer />
        </AuthProvider>
       </BrowserRouter>
      
      
      </LoggedInContext.Provider>
    </div>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated ? <Component {...props} />
    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  );
}
export default App;