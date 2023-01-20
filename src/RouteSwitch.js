import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import App from "./components/App";
import Shop from "./components/Shop";
import React, {useState} from 'react';

const RouteSwitch = () => {
    const[cart,setCart]=useState(0);
    const addCart=(e)=>{
        console.log('addcart');
        setCart(cart+1);
    }
  return (
    <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <div className="App-header-1">
                    <Link to="/shopping-cart"><h1>Pet Shop</h1></Link>
                    <div className="App-header-right">
                        <Link to="/shopping-cart"><h2>Home</h2></Link>
                        <Link to="/shopping-cart/shop"><h2>Shop</h2></Link>
                        <Link to="/shopping-cart"><h4 className="fa badge fa-lg" value={cart}>&#xf07a;</h4></Link>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/shopping-cart" element={<App />} />
                <Route path="/shopping-cart/shop" element={<Shop addCart={addCart} />} />
            </Routes>
            <footer className="App-footer">
                @arnelsr
            </footer>
        </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;