import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sideBar'>
        
        <img alt="logo" />
        <ul>
            <li> <Link to="/">Users</Link></li>
            <li> <Link to="/prod">Products</Link></li>
            <li> <Link to="/add">Add Product</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar