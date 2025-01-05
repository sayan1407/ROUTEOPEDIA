import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Home from './Home';
import About from './About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
       </Routes>
    </BrowserRouter>
  </div>

);

