import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes,useSearchParams } from "react-router-dom";
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
  const [cart,setCart] = useState([]);
  // let [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams({ hello: "world"  });
    const user = { isConnected: false }
  useEffect(() => {
    axios.get("http://localhost:3001/product/all").then((res) => {
      setData(res.data);
    })
  }, []);
  const cartHandler = (e)=>{
    setCart([...cart,e])
    console.log(cart)
  }
  return (
    <div className="App">
      
      <Router>
        <Routes>





          <Route exact path="/" index element={data.length&&< Home data={data} cart={cartHandler} cartData={cart}/>} />
          <Route  path="/login" element= {<Login/>} />
          <Route  path='/products' element= {data.length&& <AllProduct data={data} cart={cartHandler} cartData={cart}/>} />
          <Route  path="/Register" element= {<Register/>} />
          <Route  path="/logout" element= {<LogOut/>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
