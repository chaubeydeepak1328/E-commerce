import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products"
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
import Error from "./Error";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<contact/>} />
      <Route path="/singleproduct/:id" element={<SingleProduct/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  )
};

export default App;
