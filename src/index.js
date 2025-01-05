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
import NotFound from "./NotFound";
import CryptoDetails from "./CryptoDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cryptoDetail/:cryptoSymbol/:id" element={<CryptoDetails />}></Route>
        <Route path="/cryptoDetail/:cryptoSymbol" element={<CryptoDetails />}></Route>
        <Route path="Product">
          <Route index element={<Product />}></Route>
          <Route path="Create" element={<CreateProduct />}></Route>
          <Route path="Details" element={<ProductDetails />}></Route>
          <Route path="List" element={<ProductList />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
