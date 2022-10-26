import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./main/Main";
function Admin(props) {
  return (
    <div>
      <Sidebar />
      <Main cols={props.cols} rows={props.rows}/>
    </div>
  );
}

export default Admin;
