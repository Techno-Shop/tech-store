import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./main/Main";
import AddProduct from "./main/Comps/AddProduct";
function Admin(props) {
  const [view, setView] = useState("Users");

  const changeView = (v) => {
    setView(v);
  };
  const renderView = () => {
    if (view === "users") {
      return (
        <Main
          cols={[{ name: "khalil", lastName: "ben ali" }]}
          rows={[{ id: 1, name: "khalil", lastName: "ben ali" }]}
        />
      );
    } else if (view === "products") {
      return (
        <Main
          cols={[{ name: "khalil", lastName: "ben ali" }]}
          rows={[{ id: 1, name: "khalil", lastName: "ben ali" }]}
        />
      );
    } else if (view === "add") {
      return <AddProduct />;
    }
  };

  return (
    <div>
      {console.log(view)}
      <Sidebar changeView={changeView} />
      {renderView()}
    </div>
  );
}

export default Admin;
