import React from "react";
import AddProduct from "./Comps/AddProduct";
import DataTable from "./Comps/DataTable";
import "./MainSec.css";

function Main(props) {
  return (
    <div className="mainSec">
      <div className="loginSect">
        <p>Logged In Person</p>
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
