import React from "react";
import "./viewProducts.css";
import {Checkbox, FormControl, FormControlLabel, FormGroup, Slider, TextField } from "@mui/material";
import NavbarComp from "../NavbarComp";
import Cards from "../Card/Cards";

function ViewProducts() {
  return (
    <div className="pageContainer">
      <div className="header">top bar</div>
      <div className="menu">
        <h4>FILTER BY</h4>
        <h5>Price</h5>
        <div className="minMax">
          <div className="MInputs">
            <TextField id="min" label="Min" variant="outlined" />
          </div>
          <div className="MInputs">
            <TextField id="max" label="Max" variant="outlined" />
          </div>
        </div>
        <h5>Category</h5>
        <div className="Category">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Computer"
            />
            <div className="border"></div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Smart Phone"
            />
            <div className="border"></div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="TV"
            />
          </FormGroup>
        </div>
      </div>
      <div className="main">
        <div><Cards/></div>
      </div>
    </div>
  );
}

export default ViewProducts;
