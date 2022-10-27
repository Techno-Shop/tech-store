import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin.jsx";
import Sidebar from "./Admin/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [data,setData]=useState([]);







  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/" element={<Admin cols={[data]} rows={data}/>} />
          <Route path="/prod" element={<Sidebar/>} />
          <Route path="/add" element={<Sidebar/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
