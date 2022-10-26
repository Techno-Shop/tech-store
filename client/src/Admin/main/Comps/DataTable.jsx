import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable(props) {
  const columns = Object.keys(props.cols[0]).map((e) => {
    return { field: e, headerName: e, width: 90 };
  });
  console.log(props.cols);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
