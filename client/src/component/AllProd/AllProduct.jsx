import React from "react";
import NavbarComp from "../NavbarComp";
import ViewProducts from "../viewProducts/ViewProducts";
import "./allProd.css";

function AllProduct() {
  return (
    <div>
      <div>
        <NavbarComp />
        <center>
          <div className="lessWidth">
            <ViewProducts />
          </div>
        </center>
      </div>
    </div>
  );
}

export default AllProduct;
