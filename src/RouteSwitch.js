import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
                    <Link to="/"><h1>Pet Shop</h1></Link>
                    <div className="App-header-right">
                        <Link to="/"><h2>Home</h2></Link>
                        <Link to="/shop"><h2>Shop</h2></Link>
                        <Link to="/"><h4 className="fa badge fa-lg" value={cart}>&#xf07a;</h4></Link>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop addCart={addCart} />} />
            </Routes>
            <footer className="App-footer">
                @arnelsr
            </footer>
        </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;