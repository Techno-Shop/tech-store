import React from "react";
import AddProduct from "./Comps/AddProduct";
import DataTable from "./Comps/DataTable";
import "./MainSec.css";

function Main(props) {
  console.log(props.connected)
  return (
    <div className="mainSec">
      <div className="loginSect">
        <p>Welcome  {props.connected}</p>
      </div>
        <div className="data">
          {props.view === "users" ? (
            <DataTable cols={props.cols} rows={props.rows} check={false} />
          ) : (
            <DataTable cols={props.cols} rows={props.rows} check={true} />
          )}
        </div>
    </div>
  );
}

export default Main;
