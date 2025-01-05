import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product";
import CreateProduct from "./Pages/CreateProduct";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="Product">
          <Route path="" element={<Product />}></Route>
          <Route path="Create" element={<CreateProduct />}></Route>
          <Route path="Details" element={<ProductDetails />}></Route>
          <Route path="List" element={<ProductList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
