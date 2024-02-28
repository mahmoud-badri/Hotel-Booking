import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Wishlist from "./pages/wishlist/Wishlist";
import MyNavbar from "./component/NavBar/Navbar";

import HotelsFilter from './pages/HotelsFilter';
import Home from "./pages/Homepage/home_page";
function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <MyNavbar/>
      <Switch>
        <Route exact path={"/Home"} component={Home}/>
        <Route exact path={"/HotelsFilter"} component={HotelsFilter}/>
        <Route exact path={"/Wishlist"} component={Wishlist} />

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
