import React from 'react';
import logo from './images/react.png'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
        
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <img src={logo} alt="" style={{width:"35px",verticalAlign:"top"}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active text-danger" : "nav-link"} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active text-danger" : "nav-link"} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active text-danger" : "nav-link"} to="/cryptoDetail/BTC/10">Crypto Details</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Product
          </a>
          <ul class="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/Product">Product</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Product/Details">Product Details</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Product/Create">Create Product</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Product/List">Product List</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header