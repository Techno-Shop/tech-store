import React from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavbarComp() {
  return (
    <div className="header">
      <div className="imgLogo">
        <img alt="logo" src="https://res.cloudinary.com/dmqowjr06/image/upload/v1666969385/tech-store/isolated-monochrome-white_nws0ly.svg"/>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
        <button><SearchIcon fontSize="medium"></SearchIcon></button>
        
      </div>
      <div className="rightElement">
        <ul className="itemContainer">
          <li className="HeaderItem"><ShoppingCartIcon/> 0.000 TND</li>
          <li className="HeaderItem"><PersonIcon/> My Account</li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarComp;
