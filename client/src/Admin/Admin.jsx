import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./main/Main";
import AddProduct from "./main/Comps/AddProduct";
import axios from "axios";

function Admin(props) {
  const [view, setView] = useState("users");
  const [users, setUsers] = useState([]);
  const [products,setProducts] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:3001/product/all")
    .then((res)=>{setProducts(res.data)})
  },[]);

  const changeView = (v) => {
    setView(v);
  };
  const renderView = () => {
    // if (view === "users") {
    //   return (
        
    //   );
    // } else
     if (view === "products") {
      return (
        <Main
          cols={products}
          rows={products}
        />
      );
    } else if (view === "add") {
      return <AddProduct />;
    }
  };

  return (
    <div>
      {console.log(products)}
      <Sidebar changeView={changeView} />
      {renderView()}
    </div>
  );
}

export default Admin;
