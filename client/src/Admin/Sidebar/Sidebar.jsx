import React from 'react'
import "./SideBar.css"

function Sidebar(props) {
  return (
    <div className='sideBar'>
        <img alt="logo" />
        <ul>
            <li onClick={()=>props.changeView("users")}> Users</li>
            <li onClick={()=>props.changeView("products")}> Products</li>
            <li onClick={()=>props.changeView("add")}> Add Product</li>
        </ul>
    </div>
  )
}

export default Sidebar