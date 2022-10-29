import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin.jsx";
import Sidebar from "./Admin/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./component/NavbarComp";
import axios from "axios";
import ViewProducts from "./component/viewProducts/ViewProducts";
import AllProduct from "./component/AllProd/AllProduct";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/product/all").then((res) => {
      setData(res.data);
    })
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/admin" element={<Admin />} />
          
          {/* TODO: change the main view to the home page then add a route to the admin with /admin */}
         <Route exact path="/" index element={<AllProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
