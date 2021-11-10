import { Box } from "@material-ui/core";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const Report3 = () => {
  return (
    <>
      <Box height="500px">
        <AgGridReact className="ag-theme-material" rowData={[]}>
          <AgGridColumn field="Customer" />
          <AgGridColumn field="Department" />
          <AgGridColumn field="Balance" />
        </AgGridReact>
      </Box>
    </>
  );
};

export default Report3;
