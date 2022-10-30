import React from "react";
import Footer from "../Footer/Footer";
import NavbarComp from "../NavbarComp";
import ViewProducts from "../viewProducts/ViewProducts";
import "./allProd.css";

function AllProduct(props) {
  return (
    <div>
      <div>
        <NavbarComp />
        <center>
          <div className="lessWidth">
            <ViewProducts data={props.data}/>
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
