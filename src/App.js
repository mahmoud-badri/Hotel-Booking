import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ListHotel from './pages/list_hotel/ListHotel';
import Wishlist from "./pages/wishlist/Wishlist";
import MyNavbar from "./component/NavBar/Navbar";
function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <MyNavbar/>
      <Switch>
      
        <Route exact path={"/ListHotel"} component={ListHotel}/>
        <Route exact path={"/Wishlist"} component={Wishlist} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
