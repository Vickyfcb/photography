import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Marketplace from "./pages/Marketplace";
import Home from './pages/Home'
import Auctions from "./pages/Auctions";
import Drop from "./pages/Drop";
import {Checkout, MarketProducts, ProductDetails} from "./components"
import { useState } from "react";


const App = () => {

  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace" element={<MarketProducts />} />
        <Route path="/marketplace/product/:id" element={<ProductDetails setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/drop" element={<Drop />} />
      </Routes>
    </Router>
  );
};

export default App;
