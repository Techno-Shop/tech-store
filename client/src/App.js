import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin.jsx";
import Sidebar from "./Admin/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./component/NavbarComp";
import Login from "./component/Login";
import Register from "./component/Register";
import LogOut from "./component/LogOut";
import axios from "axios";
import ViewProducts from "./component/viewProducts/ViewProducts";
import AllProduct from "./component/AllProd/AllProduct";
import Home from "./component/Home/Home";

function App() {
  const [data, setData] = useState([]);
    const user = { isConnected: false }
  useEffect(() => {
    axios.get("http://localhost:3001/product/all").then((res) => {
      setData(res.data);
    })
  }, []);
  
  return (
    <div className="App">
      {console.log(data)}
      <Router>
        <Routes>





          <Route exact path="/" index element={data.length&&< Home data={data}/>} />
          <Route  path="/login" element= {<Login/>} />
          <Route  path="/products" element= {<AllProduct data={data}/>} />
          <Route  path="/Register" element= {<Register/>} />
          <Route  path="/logout" element= {<LogOut/>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
