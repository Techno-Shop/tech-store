import React,{useState} from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from "./Cart/Cart";
import {Link, useNavigate} from "react-router-dom";
import "./Navbar.css";


function NavbarComp(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const navigate = useNavigate();
  const TotalValue=()=>{
    let total=0
    for(let element of props.cartData){
      total+=parseInt(element.price)
    }
    return total
  }
const onClickChange = ()=>{
  navigate('/login')
}
  return (
    <div className="header">
      <div className="imgLogo">
      <Link to="/">
        <img alt="logo" src="https://res.cloudinary.com/dmqowjr06/image/upload/v1666969385/tech-store/isolated-monochrome-white_nws0ly.svg"/>
      </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." className="searchInput"/>
        <button onClick={()=>navigate('/products')}><SearchIcon fontSize="medium"></SearchIcon></button>
        
      </div>
      <div className="rightElement">
        <ul className="itemContainer">
          <li className="HeaderItem" onClick={()=>toggleShow()}><ShoppingCartIcon/>{ TotalValue() } TND</li>
          {props.connected!==""? 
           
           <li className="HeaderItem" ><PersonIcon/>{props.connected!==""? props.connected:"My Account"}</li>
           
          :
          <Link to="/login">
          <li className="HeaderItem" onClick={onClickChange}><PersonIcon/>{props.connected!==""? props.connected:"My Account"}</li>
          </Link>
          }
        
        </ul>
      </div>
      <Cart data={props.cartData} toggle={toggleShow} modal={basicModal} setbasic={setBasicModal} cart={props.cart} total={TotalValue}/>
    </div>
  );
}

export default NavbarComp;
