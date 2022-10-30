import React from 'react';
import "./SideBar.css";
import GroupIcon from '@mui/icons-material/Group';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AddBoxIcon from '@mui/icons-material/AddBox';
function Sidebar(props) {
  return (
    <div className='sideBar'>
        <img className='logos' src='https://techstore-bf.com/img/cetelcom-logo-1640954613.jpg' alt="logo" />
        <ul>
            <li onClick={()=>props.changeView("users")}><GroupIcon/> Users</li>
            <li onClick={()=>props.changeView("products")}><LaptopChromebookIcon/> Products</li>
            <li onClick={()=>props.changeView("add")}><AddBoxIcon/> Add Product</li>
        </ul>
    </div>
  )
}

export default Sidebar