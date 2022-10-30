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
  const [sign, setSing] = useState(false);
  const [userName,setUserName]= useState("");

const signHandler = ()=>{
  setSing(true);
  
}
  const userNameHandler = (user) => {
    setUserName(user)
    console.log(user)
  }

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
          <Route exact path="/" index element={data.length&&< Home data={data} cart={cartHandler} cartData={cart} connected={userName} sign={sign}/>} />
          <Route  path="/login" element= {<Login signstate={sign} sign={signHandler} user={userNameHandler}/>} />
          <Route  path='/products' element= {data.length&& <AllProduct data={data} cart={cartHandler} cartData={cart} connected={userName} sign={sign}/>} />
          <Route  path="/Register" element= {<Register/>} />
          <Route  path="/logout" element= {<LogOut/>} />
          <Route path="/admin" element={<Admin  connected={userName} sign={sign}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
