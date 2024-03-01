import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import Wishlist from "./pages/wishlist/Wishlist";
import MyNavbar from "./component/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HotelsFilter from "./pages/HotelsFilter";
import UserProfilePage from "./pages/user_profile/user_profile";

// import HotelsFilter from "./pages/HotelsFilter";
import Home from "./pages/Homepage/home_page";
import ParticlesComponent from "./component/particles/particles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/HotelsFilter"} component={HotelsFilter} />
          <Route exact path={"/Wishlist"} component={Wishlist} />
          <Route exact path={"/userprofile"} component={UserProfilePage} />

          <ParticlesComponent id="particles" />
        </Switch>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
