import React from "react";
import Footer from "../Footer/Footer";
import NavbarComp from "../NavbarComp";
import ViewProducts from "../viewProducts/ViewProducts";
import "./allProd.css";

function AllProduct(props) {

  return (
    <div>
      <div>
        
        <NavbarComp cartData={props.cartData}/>
        <center>
          <div className="lessWidth">
            <ViewProducts data={props.data} cart={props.cart} />
          </div>
        </center>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
