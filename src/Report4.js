import { Box } from "@material-ui/core";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const Report4 = () => {
  return (
    <>
      <Box height="500px">
        <AgGridReact className="ag-theme-material" rowData={[]}>
          <AgGridColumn field="Year" />
          <AgGridColumn field="Month" />
          <AgGridColumn field="Balance" />
        </AgGridReact>
      </Box>
    </>
  );
};

export default Report4;
