import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin.jsx";
import Sidebar from "./Admin/Sidebar/Sidebar";

import carosel from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [data,setData]=useState([]);








  return (
    <div className="App">
      <Router>
        <Routes>

        
          
         


          {/* TODO: change the main view to the home page then add a route to the admin with /admin */}
          <Route path="/" element={ <Admin/>} />
       

        </Routes>
      </Router>
    </div>
  );
}

export default App;
