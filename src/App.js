import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ListHotel from './pages/list_hotel/ListHotel';
import Wishlist from "./pages/wishlist/Wishlist";
import MyNavbar from "./component/NavBar/Navbar";
import HotelDetailHeader from "./component/hotel_detail_header/HotelDetailHeader";
import HotelDetails from "./pages/hotel-details/HotelDetails";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <MyNavbar/>
      <Switch>
      
        <Route exact path={"/ListHotel"} component={ListHotel}/>
        <Route exact path={"/Wishlist"} component={Wishlist} />
        <Route exact path={"/HotelDetails"} component={ HotelDetails} />

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
